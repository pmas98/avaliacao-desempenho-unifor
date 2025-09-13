use serde::{Deserialize, Serialize};
use serde_json;
use std::fs::File;
use std::io::BufReader;
use std::time::Instant;
use sysinfo::{System, Pid};

fn insertion_sort(arr: &[i32]) -> Vec<i32> {
    let mut result = arr.to_vec();
    for i in 1..result.len() {
        let key = result[i];
        let mut j = i;
        while j > 0 && result[j - 1] > key {
            result[j] = result[j - 1];
            j -= 1;
        }
        result[j] = key;
    }
    result
}

fn bubble_sort(arr: &[i32]) -> Vec<i32> {
    let mut result = arr.to_vec();
    let n = result.len();

    for i in 0..n {
        let mut swapped = false;
        for j in 0..(n - i - 1) {
            if result[j] > result[j + 1] {
                result.swap(j, j + 1);
                swapped = true;
            }
        }
        if !swapped {
            break;
        }
    }
    result
}

#[derive(Serialize, Deserialize)]
struct BenchmarkResult {
    algorithm: String,
    data_size: usize,
    execution_time_mean: f64,
    execution_time_std: f64,
    execution_time_min: f64,
    execution_time_max: f64,
    memory_used_mb_mean: f64,
    memory_used_mb_std: f64,
    initial_memory_mb_mean: f64,
    initial_memory_mb_std: f64,
    final_memory_mb_mean: f64,
    final_memory_mb_std: f64,
    iterations: usize,
}

fn load_test_data(size: usize) -> Vec<i32> {
    let filename = format!("data/test/test_data_{}.json", size);
    let file = File::open(&filename).expect("Não foi possível abrir o arquivo");
    let reader = BufReader::new(file);

    serde_json::from_reader(reader).expect("Erro ao decodificar JSON")
}

fn measure_memory(system: &mut System) -> f64 {
    system.refresh_processes();
    
    let current_pid = Pid::from(std::process::id() as usize);
    if let Some(process) = system.process(current_pid) {
        (process.memory() as f64) / (1024.0 * 1024.0)
    } else {
        0.0
    }
}

fn calculate_stats(values: &[f64]) -> (f64, f64, f64, f64) {
    if values.is_empty() {
        return (0.0, 0.0, 0.0, 0.0);
    }
    
    let mean = values.iter().sum::<f64>() / values.len() as f64;
    let variance = values.iter()
        .map(|x| (x - mean).powi(2))
        .sum::<f64>() / values.len() as f64;
    let std = variance.sqrt();
    let min = values.iter().fold(f64::INFINITY, |a, &b| a.min(b));
    let max = values.iter().fold(f64::NEG_INFINITY, |a, &b| a.max(b));
    
    (mean, std, min, max)
}

fn benchmark_sorting_algorithm<F>(
    algorithm: F,
    data: &[i32],
    algorithm_name: &str,
    system: &mut System,
    iterations: usize,
) -> BenchmarkResult
where
    F: Fn(&[i32]) -> Vec<i32>,
{
    let mut execution_times = Vec::new();
    let mut memory_used_values = Vec::new();
    let mut initial_memory_values = Vec::new();
    let mut final_memory_values = Vec::new();

    for _ in 0..iterations {
        let initial_memory = measure_memory(system);
        let start = Instant::now();

        let sorted_data = algorithm(data);

        let duration = start.elapsed();
        let final_memory = measure_memory(system);
        let memory_used = final_memory - initial_memory;

        std::hint::black_box(sorted_data);

        execution_times.push(duration.as_secs_f64());
        memory_used_values.push(memory_used);
        initial_memory_values.push(initial_memory);
        final_memory_values.push(final_memory);
    }

    let (exec_time_mean, exec_time_std, exec_time_min, exec_time_max) = calculate_stats(&execution_times);
    let (memory_used_mean, memory_used_std, _, _) = calculate_stats(&memory_used_values);
    let (initial_memory_mean, initial_memory_std, _, _) = calculate_stats(&initial_memory_values);
    let (final_memory_mean, final_memory_std, _, _) = calculate_stats(&final_memory_values);

    BenchmarkResult {
        algorithm: algorithm_name.to_string(),
        data_size: data.len(),
        execution_time_mean: exec_time_mean,
        execution_time_std: exec_time_std,
        execution_time_min: exec_time_min,
        execution_time_max: exec_time_max,
        memory_used_mb_mean: memory_used_mean,
        memory_used_mb_std: memory_used_std,
        initial_memory_mb_mean: initial_memory_mean,
        initial_memory_mb_std: initial_memory_std,
        final_memory_mb_mean: final_memory_mean,
        final_memory_mb_std: final_memory_std,
        iterations,
    }
}

fn run_benchmarks() -> Vec<BenchmarkResult> {
    let sizes = vec![1000, 5000, 10000];
    let algorithms: Vec<(&str, fn(&[i32]) -> Vec<i32>)> = vec![
        ("Insertion Sort", insertion_sort),
        ("Bubble Sort", bubble_sort),
    ];
    let iterations = 50;

    let mut results = Vec::new();
    let mut system = System::new_all();

    for size in sizes {
        let test_data = load_test_data(size);

        for (name, alg) in &algorithms {
            let result = benchmark_sorting_algorithm(*alg, &test_data, name, &mut system, iterations);
            results.push(result);
        }
    }

    results
}

fn main() {
    let results = run_benchmarks();

    let json_file = File::create("data/results/rust_results.json").expect("Erro ao criar arquivo de saída");
    serde_json::to_writer_pretty(json_file, &results).expect("Erro ao escrever JSON");
}
