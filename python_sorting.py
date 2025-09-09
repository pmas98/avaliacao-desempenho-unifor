import time
import psutil
import os
import json
from typing import List


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
        raise FileNotFoundError(f"Test data file {filename} not found. Run generate_test_data.py first.")
    
    with open(filename, 'r') as f:
        return json.load(f)


def measure_memory():
    process = psutil.Process(os.getpid())
    return process.memory_info().rss / 1024 / 1024


def benchmark_sorting_algorithm(algorithm, data: List[int], algorithm_name: str):
    initial_memory = measure_memory()
    
    start_time = time.time()
    
    algorithm(data)
    
    end_time = time.time()
    
    final_memory = measure_memory()
    
    execution_time = end_time - start_time
    memory_used = final_memory - initial_memory
    
    return {
        'algorithm': algorithm_name,
        'data_size': len(data),
        'execution_time': execution_time,
        'memory_used_mb': memory_used,
        'initial_memory_mb': initial_memory,
        'final_memory_mb': final_memory
    }


def run_benchmarks():
    sizes = [1000, 5000, 10000]
    
    algorithms = [
        (insertion_sort, "Insertion Sort"),
        (bubble_sort, "Bubble Sort")
    ]
    
    results = []
    
    for size in sizes:
        
        test_data = load_test_data(size)
        
        for algorithm, name in algorithms:
            
            result = benchmark_sorting_algorithm(algorithm, test_data, name)
            results.append(result)
    return results


if __name__ == "__main__":
    results = run_benchmarks()
    
    with open("python_results.json", "w") as f:
        json.dump(results, f, indent=2)

