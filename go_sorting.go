package main

import (
	"encoding/json"
	"fmt"
	"math/rand"
	"os"
	"runtime"
	"time"
)

func InsertionSort(arr []int) []int {
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

func BubbleSort(arr []int) []int {
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

func LoadTestData(size int) ([]int, error) {
	filename := fmt.Sprintf("test_data_%d.json", size)

	file, _ := os.Open(filename)

	defer file.Close()

	var data []int
	decoder := json.NewDecoder(file)
	decoder.Decode(&data)

	return data, nil
}

type BenchmarkResult struct {
	Algorithm       string  `json:"algorithm"`
	DataSize        int     `json:"data_size"`
	ExecutionTime   float64 `json:"execution_time"`
	MemoryUsedMB    float64 `json:"memory_used_mb"`
	InitialMemoryMB float64 `json:"initial_memory_mb"`
	FinalMemoryMB   float64 `json:"final_memory_mb"`
}

func MeasureMemory() float64 {
	var m runtime.MemStats
	runtime.ReadMemStats(&m)
	return float64(m.Alloc) / 1024 / 1024
}

func BenchmarkSortingAlgorithm(algorithm func([]int) []int, data []int, algorithmName string) BenchmarkResult {
	runtime.GC()

	initialMemory := MeasureMemory()

	startTime := time.Now()

	sortedData := algorithm(data)

	endTime := time.Now()

	finalMemory := MeasureMemory()

	executionTime := endTime.Sub(startTime)
	memoryUsed := finalMemory - initialMemory

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

func RunBenchmarks() []BenchmarkResult {
	sizes := []int{1000, 5000, 10000}

	algorithms := []struct {
		Function func([]int) []int
		Name     string
	}{
		{InsertionSort, "Insertion Sort"},
		{BubbleSort, "Bubble Sort"},
	}

	var results []BenchmarkResult

	for _, size := range sizes {
		testData, _ := LoadTestData(size)

		for _, alg := range algorithms {
			result := BenchmarkSortingAlgorithm(alg.Function, testData, alg.Name)
			results = append(results, result)
		}
	}

	return results
}

func main() {
	rand.Seed(time.Now().UnixNano())

	results := RunBenchmarks()

	jsonFile, _ := os.Create("go_results.json")
	defer jsonFile.Close()

	encoder := json.NewEncoder(jsonFile)
	encoder.SetIndent("", "  ")
	encoder.Encode(results)
}
