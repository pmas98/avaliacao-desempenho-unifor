package main

import (
	"encoding/json"
	"fmt"
	"math/rand"
	"os"
	"runtime"
	"time"
)

// InsertionSort implements the insertion sort algorithm
// Time Complexity: O(n²)
// Space Complexity: O(1)
func InsertionSort(arr []int) []int {
	// Create a copy to avoid modifying the original slice
	result := make([]int, len(arr))
	copy(result, arr)

	for i := 1; i < len(result); i++ {
		key := result[i]
		j := i - 1
		for j >= 0 && result[j] > key {
			result[j+1] = result[j]
			j--
		}
		result[j+1] = key
	}
	return result
}

// BubbleSort implements the bubble sort algorithm
// Time Complexity: O(n²)
// Space Complexity: O(1)
func BubbleSort(arr []int) []int {
	// Create a copy to avoid modifying the original slice
	result := make([]int, len(arr))
	copy(result, arr)

	n := len(result)
	for i := 0; i < n; i++ {
		swapped := false
		for j := 0; j < n-i-1; j++ {
			if result[j] > result[j+1] {
				result[j], result[j+1] = result[j+1], result[j]
				swapped = true
			}
		}
		if !swapped {
			break
		}
	}
	return result
}

// LoadTestData loads test data from shared JSON file
func LoadTestData(size int) ([]int, error) {
	filename := fmt.Sprintf("test_data_%d.json", size)

	file, err := os.Open(filename)
	if err != nil {
		return nil, fmt.Errorf("test data file %s not found. Run generate_test_data.py first: %v", filename, err)
	}
	defer file.Close()

	var data []int
	decoder := json.NewDecoder(file)
	err = decoder.Decode(&data)
	if err != nil {
		return nil, fmt.Errorf("error decoding JSON: %v", err)
	}

	return data, nil
}

// BenchmarkResult holds the results of a benchmark
type BenchmarkResult struct {
	Algorithm       string  `json:"algorithm"`
	DataSize        int     `json:"data_size"`
	ExecutionTime   float64 `json:"execution_time"`
	MemoryUsedMB    float64 `json:"memory_used_mb"`
	InitialMemoryMB float64 `json:"initial_memory_mb"`
	FinalMemoryMB   float64 `json:"final_memory_mb"`
}

// MeasureMemory returns current memory usage in MB
func MeasureMemory() float64 {
	var m runtime.MemStats
	runtime.ReadMemStats(&m)
	return float64(m.Alloc) / 1024 / 1024
}

// BenchmarkSortingAlgorithm benchmarks a sorting algorithm and returns performance metrics
func BenchmarkSortingAlgorithm(algorithm func([]int) []int, data []int, algorithmName string) BenchmarkResult {
	// Force garbage collection before measuring
	runtime.GC()

	// Measure initial memory
	initialMemory := MeasureMemory()

	// Start timing
	startTime := time.Now()

	// Execute the algorithm
	sortedData := algorithm(data)

	// End timing
	endTime := time.Now()

	// Measure final memory
	finalMemory := MeasureMemory()

	// Calculate metrics
	executionTime := endTime.Sub(startTime)
	memoryUsed := finalMemory - initialMemory

	// Prevent compiler optimization from removing sortedData
	_ = sortedData

	return BenchmarkResult{
		Algorithm:       algorithmName,
		DataSize:        len(data),
		ExecutionTime:   executionTime.Seconds(),
		MemoryUsedMB:    memoryUsed,
		InitialMemoryMB: initialMemory,
		FinalMemoryMB:   finalMemory,
	}
}

// RunBenchmarks runs benchmarks for both sorting algorithms with different data sizes
func RunBenchmarks() []BenchmarkResult {
	// Test data sizes
	sizes := []int{1000, 5000, 10000}

	// Algorithms to test
	algorithms := []struct {
		Function func([]int) []int
		Name     string
	}{
		{InsertionSort, "Insertion Sort"},
		{BubbleSort, "Bubble Sort"},
	}

	var results []BenchmarkResult

	fmt.Println("Go Sorting Algorithms Benchmark")
	fmt.Println("================================")

	for _, size := range sizes {
		fmt.Printf("\nTesting with array size: %d\n", size)
		fmt.Println("------------------------------")

		// Load shared test data
		testData, err := LoadTestData(size)
		if err != nil {
			fmt.Printf("Error loading test data: %v\n", err)
			continue
		}

		for _, alg := range algorithms {
			fmt.Printf("Running %s...\n", alg.Name)

			// Run benchmark
			result := BenchmarkSortingAlgorithm(alg.Function, testData, alg.Name)
			results = append(results, result)

			// Print results
			fmt.Printf("  Execution time: %.6f seconds\n", result.ExecutionTime)
			fmt.Printf("  Memory used: %.2f MB\n", result.MemoryUsedMB)
			fmt.Printf("  Initial memory: %.2f MB\n", result.InitialMemoryMB)
			fmt.Printf("  Final memory: %.2f MB\n", result.FinalMemoryMB)
		}
	}

	return results
}

func main() {
	// Seed random number generator
	rand.Seed(time.Now().UnixNano())

	results := RunBenchmarks()

	// Save results to JSON file
	jsonFile, err := os.Create("go_results.json")
	if err != nil {
		fmt.Printf("Error creating JSON file: %v\n", err)
		return
	}
	defer jsonFile.Close()

	encoder := json.NewEncoder(jsonFile)
	encoder.SetIndent("", "  ")
	err = encoder.Encode(results)
	if err != nil {
		fmt.Printf("Error encoding JSON: %v\n", err)
		return
	}
}
