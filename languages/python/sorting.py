import json
import os
import time
import statistics
import logging
from typing import List

import psutil

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


def insertion_sort(arr: List[int]) -> List[int]:
    arr = arr.copy()
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr


def bubble_sort(arr: List[int]) -> List[int]:
    arr = arr.copy()
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr

 
def load_test_data(size: int) -> List[int]:
    filename = f"data/test/test_data_{size}.json"
    if not os.path.exists(filename):
        raise FileNotFoundError(
            f"Test data file {filename} not found. Run generate_test_data.py first."
        )

    with open(filename, "r") as f:
        return json.load(f)


def measure_memory():
    process = psutil.Process(os.getpid())
    return process.memory_info().rss / 1024 / 1024


def benchmark_sorting_algorithm(algorithm, data: List[int], algorithm_name: str, iterations: int = 50):
    execution_times = []
    memory_used_values = []
    initial_memory_values = []
    final_memory_values = []

    logger.info(f"Starting benchmark for {algorithm_name} with {len(data)} elements ({iterations} iterations)")

    for i in range(iterations):
        initial_memory = measure_memory()

        start_time = time.time()

        algorithm(data)

        end_time = time.time()

        final_memory = measure_memory()

        execution_time = end_time - start_time
        memory_used = final_memory - initial_memory

        execution_times.append(execution_time)
        memory_used_values.append(memory_used)
        initial_memory_values.append(initial_memory)
        final_memory_values.append(final_memory)

        # Log every iteration completion
        logger.info(f"Completed iteration {i+1}/{iterations} for {algorithm_name} - Time: {execution_time:.6f}s, Memory: {memory_used:.2f}MB")

    return {
        "algorithm": algorithm_name,
        "data_size": len(data),
        "execution_time_mean": statistics.mean(execution_times),
        "execution_time_std": statistics.stdev(execution_times) if len(execution_times) > 1 else 0.0,
        "execution_time_min": min(execution_times),
        "execution_time_max": max(execution_times),
        "memory_used_mb_mean": statistics.mean(memory_used_values),
        "memory_used_mb_std": statistics.stdev(memory_used_values) if len(memory_used_values) > 1 else 0.0,
        "initial_memory_mb_mean": statistics.mean(initial_memory_values),
        "initial_memory_mb_std": statistics.stdev(initial_memory_values) if len(initial_memory_values) > 1 else 0.0,
        "final_memory_mb_mean": statistics.mean(final_memory_values),
        "final_memory_mb_std": statistics.stdev(final_memory_values) if len(final_memory_values) > 1 else 0.0,
        "iterations": iterations,
    }


def run_benchmarks():
    sizes = [1000, 5000, 10000]

    algorithms = [(insertion_sort, "Insertion Sort"), (bubble_sort, "Bubble Sort")]

    results = []

    logger.info(f"Starting benchmark suite with {len(sizes)} data sizes and {len(algorithms)} algorithms")

    for size_idx, size in enumerate(sizes):
        logger.info(f"Processing data size {size} ({size_idx+1}/{len(sizes)})")
        test_data = load_test_data(size)

        for alg_idx, (algorithm, name) in enumerate(algorithms):
            logger.info(f"Running {name} ({alg_idx+1}/{len(algorithms)}) on data size {size}")
            result = benchmark_sorting_algorithm(algorithm, test_data, name)
            results.append(result)
            logger.info(f"Completed {name} benchmark for size {size}")
    
    logger.info(f"Benchmark suite completed. Generated {len(results)} results.")
    return results


if __name__ == "__main__":
    logger.info("Starting Python sorting algorithm benchmark")
    results = run_benchmarks()

    with open("data/results/python_results.json", "w") as f:
        json.dump(results, f, indent=2)
    
    logger.info("Results saved to data/results/python_results.json")
