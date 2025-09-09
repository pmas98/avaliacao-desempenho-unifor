use serde::{Deserialize, Serialize};
use serde_json;
use std::fs::File;
use std::io::BufReader;
use std::time::Instant;
use sysinfo::{System};

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
    execution_time: f64,
    memory_used_mb: f64,
    initial_memory_mb: f64,
    final_memory_mb: f64,
}

fn load_test_data(size: usize) -> Vec<i32> {
    let filename = format!("data/test/test_data_{}.json", size);
    let file = File::open(&filename).expect("Não foi possível abrir o arquivo");
    let reader = BufReader::new(file);

    serde_json::from_reader(reader).expect("Erro ao decodificar JSON")
}

fn measure_memory(system: &mut System) -> f64 {
    system.refresh_memory();

    (system.used_memory() as f64) / 1024.0
}

fn benchmark_sorting_algorithm<F>(
    algorithm: F,
    data: &[i32],
    algorithm_name: &str,
    system: &mut System,
) -> BenchmarkResult
where
    F: Fn(&[i32]) -> Vec<i32>,
{
    let initial_memory = measure_memory(system);
    let start = Instant::now();

    let sorted_data = algorithm(data);

    let duration = start.elapsed();
    let final_memory = measure_memory(system);
    let memory_used = final_memory - initial_memory;

    std::hint::black_box(sorted_data);

    BenchmarkResult {
        algorithm: algorithm_name.to_string(),
        data_size: data.len(),
        execution_time: duration.as_secs_f64(),
        memory_used_mb: memory_used,
        initial_memory_mb: initial_memory,
        final_memory_mb: final_memory,
    }
}

fn run_benchmarks() -> Vec<BenchmarkResult> {
    let sizes = vec![1000, 5000, 10000];
    let algorithms: Vec<(&str, fn(&[i32]) -> Vec<i32>)> = vec![
        ("Insertion Sort", insertion_sort),
        ("Bubble Sort", bubble_sort),
    ];

    let mut results = Vec::new();
    let mut system = System::new_all();

    for size in sizes {
        let test_data = load_test_data(size);

        for (name, alg) in &algorithms {
            let result = benchmark_sorting_algorithm(*alg, &test_data, name, &mut system);
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
