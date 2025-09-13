package main

import (
	"encoding/json"
	"fmt"
	"log"
	"math"
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
	filename := fmt.Sprintf("data/test/test_data_%d.json", size)

	file, _ := os.Open(filename)

	defer file.Close()

	var data []int
	decoder := json.NewDecoder(file)
	decoder.Decode(&data)

	return data, nil
}

type BenchmarkResult struct {
	Algorithm           string  `json:"algorithm"`
	DataSize            int     `json:"data_size"`
	ExecutionTimeMean   float64 `json:"execution_time_mean"`
	ExecutionTimeStd    float64 `json:"execution_time_std"`
	ExecutionTimeMin    float64 `json:"execution_time_min"`
	ExecutionTimeMax    float64 `json:"execution_time_max"`
	MemoryUsedMBMean    float64 `json:"memory_used_mb_mean"`
	MemoryUsedMBStd     float64 `json:"memory_used_mb_std"`
	InitialMemoryMBMean float64 `json:"initial_memory_mb_mean"`
	InitialMemoryMBStd  float64 `json:"initial_memory_mb_std"`
	FinalMemoryMBMean   float64 `json:"final_memory_mb_mean"`
	FinalMemoryMBStd    float64 `json:"final_memory_mb_std"`
	Iterations          int     `json:"iterations"`
}

func MeasureMemory() float64 {
	var m runtime.MemStats
	runtime.ReadMemStats(&m)
	return float64(m.Alloc) / 1024 / 1024
}

func calculateMean(values []float64) float64 {
	if len(values) == 0 {
		return 0.0
	}
	sum := 0.0
	for _, v := range values {
		sum += v
	}
	return sum / float64(len(values))
}

func calculateStdDev(values []float64) float64 {
	if len(values) <= 1 {
		return 0.0
	}
	mean := calculateMean(values)
	sumSquaredDiffs := 0.0
	for _, v := range values {
		sumSquaredDiffs += math.Pow(v-mean, 2)
	}
	return math.Sqrt(sumSquaredDiffs / float64(len(values)-1))
}

func calculateMin(values []float64) float64 {
	if len(values) == 0 {
		return 0.0
	}
	min := values[0]
	for _, v := range values {
		if v < min {
			min = v
		}
	}
	return min
}

func calculateMax(values []float64) float64 {
	if len(values) == 0 {
		return 0.0
	}
	max := values[0]
	for _, v := range values {
		if v > max {
			max = v
		}
	}
	return max
}

func BenchmarkSortingAlgorithm(algorithm func([]int) []int, data []int, algorithmName string, iterations int) BenchmarkResult {
	var executionTimes []float64
	var memoryUsedValues []float64
	var initialMemoryValues []float64
	var finalMemoryValues []float64

	log.Printf("Starting benchmark for %s with %d elements (%d iterations)",
		algorithmName, len(data), iterations)

	for i := 0; i < iterations; i++ {
		runtime.GC()

		initialMemory := MeasureMemory()
		startTime := time.Now()

		algorithm(data)

		endTime := time.Now()
		finalMemory := MeasureMemory()

		executionTime := endTime.Sub(startTime)
		memoryUsed := finalMemory - initialMemory

		executionTimes = append(executionTimes, executionTime.Seconds())
		memoryUsedValues = append(memoryUsedValues, memoryUsed)
		initialMemoryValues = append(initialMemoryValues, initialMemory)
		finalMemoryValues = append(finalMemoryValues, finalMemory)

		// Log every iteration completion
		log.Printf("Completed iteration %d/%d for %s - Time: %.6fs, Memory: %.2fMB",
			i+1, iterations, algorithmName, executionTime.Seconds(), memoryUsed)
	}

	return BenchmarkResult{
		Algorithm:           algorithmName,
		DataSize:            len(data),
		ExecutionTimeMean:   calculateMean(executionTimes),
		ExecutionTimeStd:    calculateStdDev(executionTimes),
		ExecutionTimeMin:    calculateMin(executionTimes),
		ExecutionTimeMax:    calculateMax(executionTimes),
		MemoryUsedMBMean:    calculateMean(memoryUsedValues),
		MemoryUsedMBStd:     calculateStdDev(memoryUsedValues),
		InitialMemoryMBMean: calculateMean(initialMemoryValues),
		InitialMemoryMBStd:  calculateStdDev(initialMemoryValues),
		FinalMemoryMBMean:   calculateMean(finalMemoryValues),
		FinalMemoryMBStd:    calculateStdDev(finalMemoryValues),
		Iterations:          iterations,
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

	log.Printf("Starting benchmark suite with %d data sizes and %d algorithms",
		len(sizes), len(algorithms))

	for sizeIdx, size := range sizes {
		log.Printf("Processing data size %d (%d/%d)", size, sizeIdx+1, len(sizes))
		testData, _ := LoadTestData(size)

		for algIdx, alg := range algorithms {
			log.Printf("Running %s (%d/%d) on data size %d",
				alg.Name, algIdx+1, len(algorithms), size)
			result := BenchmarkSortingAlgorithm(alg.Function, testData, alg.Name, 50)
			results = append(results, result)
			log.Printf("Completed %s benchmark for size %d", alg.Name, size)
		}
	}

	log.Printf("Benchmark suite completed. Generated %d results.", len(results))
	return results
}

func main() {
	log.Printf("Starting Go sorting algorithm benchmark")
	rand.Seed(time.Now().UnixNano())

	results := RunBenchmarks()

	jsonFile, _ := os.Create("data/results/go_results.json")
	defer jsonFile.Close()

	encoder := json.NewEncoder(jsonFile)
	encoder.SetIndent("", "  ")
	encoder.Encode(results)

	log.Printf("Results saved to data/results/go_results.json")
}
