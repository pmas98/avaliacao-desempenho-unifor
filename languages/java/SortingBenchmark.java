import java.io.*;
import java.util.*;
import java.util.function.Function;

class BenchmarkResult {
    private final String algorithm;
    private final int dataSize;
    private final double executionTimeMean;
    private final double executionTimeStd;
    private final double executionTimeMin;
    private final double executionTimeMax;
    private final double memoryUsedMBMean;
    private final double memoryUsedMBStd;
    private final double initialMemoryMBMean;
    private final double initialMemoryMBStd;
    private final double finalMemoryMBMean;
    private final double finalMemoryMBStd;
    private final int iterations;

    public BenchmarkResult(String algorithm, int dataSize, double executionTimeMean,
            double executionTimeStd, double executionTimeMin, double executionTimeMax,
            double memoryUsedMBMean, double memoryUsedMBStd,
            double initialMemoryMBMean, double initialMemoryMBStd,
            double finalMemoryMBMean, double finalMemoryMBStd, int iterations) {
        this.algorithm = algorithm;
        this.dataSize = dataSize;
        this.executionTimeMean = executionTimeMean;
        this.executionTimeStd = executionTimeStd;
        this.executionTimeMin = executionTimeMin;
        this.executionTimeMax = executionTimeMax;
        this.memoryUsedMBMean = memoryUsedMBMean;
        this.memoryUsedMBStd = memoryUsedMBStd;
        this.initialMemoryMBMean = initialMemoryMBMean;
        this.initialMemoryMBStd = initialMemoryMBStd;
        this.finalMemoryMBMean = finalMemoryMBMean;
        this.finalMemoryMBStd = finalMemoryMBStd;
        this.iterations = iterations;
    }

    public String toJson() {
        return String.format(
                "{\n" +
                        "    \"algorithm\": \"%s\",\n" +
                        "    \"data_size\": %d,\n" +
                        "    \"execution_time_mean\": %.6f,\n" +
                        "    \"execution_time_std\": %.6f,\n" +
                        "    \"execution_time_min\": %.6f,\n" +
                        "    \"execution_time_max\": %.6f,\n" +
                        "    \"memory_used_mb_mean\": %.6f,\n" +
                        "    \"memory_used_mb_std\": %.6f,\n" +
                        "    \"initial_memory_mb_mean\": %.6f,\n" +
                        "    \"initial_memory_mb_std\": %.6f,\n" +
                        "    \"final_memory_mb_mean\": %.6f,\n" +
                        "    \"final_memory_mb_std\": %.6f,\n" +
                        "    \"iterations\": %d\n" +
                        "  }",
                algorithm, dataSize, executionTimeMean, executionTimeStd, 
                executionTimeMin, executionTimeMax, memoryUsedMBMean, memoryUsedMBStd,
                initialMemoryMBMean, initialMemoryMBStd, finalMemoryMBMean, 
                finalMemoryMBStd, iterations);
    }

    public String getAlgorithm() {
        return algorithm;
    }

    public int getDataSize() {
        return dataSize;
    }

    public double getExecutionTimeMean() {
        return executionTimeMean;
    }

    public double getExecutionTimeStd() {
        return executionTimeStd;
    }

    public double getExecutionTimeMin() {
        return executionTimeMin;
    }

    public double getExecutionTimeMax() {
        return executionTimeMax;
    }

    public double getMemoryUsedMBMean() {
        return memoryUsedMBMean;
    }

    public double getMemoryUsedMBStd() {
        return memoryUsedMBStd;
    }

    public double getInitialMemoryMBMean() {
        return initialMemoryMBMean;
    }

    public double getInitialMemoryMBStd() {
        return initialMemoryMBStd;
    }

    public double getFinalMemoryMBMean() {
        return finalMemoryMBMean;
    }

    public double getFinalMemoryMBStd() {
        return finalMemoryMBStd;
    }

    public int getIterations() {
        return iterations;
    }
}

class SortingAlgorithm {
    private final Function<int[], int[]> function;
    private final String name;

    public SortingAlgorithm(Function<int[], int[]> function, String name) {
        this.function = function;
        this.name = name;
    }

    public Function<int[], int[]> getFunction() {
        return function;
    }

    public String getName() {
        return name;
    }
}

public class SortingBenchmark {

    public static int[] insertionSort(int[] arr) {
        int[] result = Arrays.copyOf(arr, arr.length);

        for (int i = 1; i < result.length; i++) {
            int key = result[i];
            int j = i - 1;

            while (j >= 0 && result[j] > key) {
                result[j + 1] = result[j];
                j--;
            }
            result[j + 1] = key;
        }
        return result;
    }

    public static int[] bubbleSort(int[] arr) {
        int[] result = Arrays.copyOf(arr, arr.length);
        int n = result.length;

        for (int i = 0; i < n; i++) {
            boolean swapped = false;

            for (int j = 0; j < n - i - 1; j++) {
                if (result[j] > result[j + 1]) {
                    int temp = result[j];
                    result[j] = result[j + 1];
                    result[j + 1] = temp;
                    swapped = true;
                }
            }

            if (!swapped) {
                break;
            }
        }
        return result;
    }

    public static int[] loadTestData(int size) throws IOException {
        String filename = String.format("data/test/test_data_%d.json", size);

        try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {
            StringBuilder jsonContent = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                jsonContent.append(line);
            }

            return parseJsonArray(jsonContent.toString());
        } catch (FileNotFoundException e) {
            System.out.println("Arquivo " + filename + " não encontrado. Gerando dados aleatórios.");
            return generateRandomData(size);
        }
    }

    private static int[] parseJsonArray(String json) {
        json = json.replaceAll("\\s", "").replace("[", "").replace("]", "");

        if (json.isEmpty()) {
            return new int[0];
        }

        String[] parts = json.split(",");
        int[] result = new int[parts.length];

        for (int i = 0; i < parts.length; i++) {
            result[i] = Integer.parseInt(parts[i]);
        }

        return result;
    }

    private static int[] generateRandomData(int size) {
        Random random = new Random();
        int[] data = new int[size];
        for (int i = 0; i < size; i++) {
            data[i] = random.nextInt(10000);
        }
        return data;
    }

    public static double measureMemory() {
        Runtime runtime = Runtime.getRuntime();
        return (runtime.totalMemory() - runtime.freeMemory()) / 1024.0 / 1024.0;
    }

    private static double calculateMean(List<Double> values) {
        return values.stream().mapToDouble(Double::doubleValue).average().orElse(0.0);
    }

    private static double calculateStdDev(List<Double> values) {
        if (values.size() <= 1) return 0.0;
        
        double mean = calculateMean(values);
        double sumSquaredDiffs = values.stream()
            .mapToDouble(value -> Math.pow(value - mean, 2))
            .sum();
        return Math.sqrt(sumSquaredDiffs / (values.size() - 1));
    }

    private static double calculateMin(List<Double> values) {
        return values.stream().mapToDouble(Double::doubleValue).min().orElse(0.0);
    }

    private static double calculateMax(List<Double> values) {
        return values.stream().mapToDouble(Double::doubleValue).max().orElse(0.0);
    }

    public static BenchmarkResult benchmarkSortingAlgorithm(Function<int[], int[]> algorithm,
            int[] data, String algorithmName, int iterations) {
        List<Double> executionTimes = new ArrayList<>();
        List<Double> memoryUsedValues = new ArrayList<>();
        List<Double> initialMemoryValues = new ArrayList<>();
        List<Double> finalMemoryValues = new ArrayList<>();

        System.out.printf("[%s] Starting benchmark for %s with %d elements (%d iterations)%n", 
                         java.time.LocalTime.now(), algorithmName, data.length, iterations);

        for (int i = 0; i < iterations; i++) {
            System.gc();

            double initialMemory = measureMemory();
            long startTime = System.nanoTime();

            algorithm.apply(data);

            long endTime = System.nanoTime();
            double finalMemory = measureMemory();

            double executionTime = (endTime - startTime) / 1_000_000_000.0;
            double memoryUsed = finalMemory - initialMemory;

            executionTimes.add(executionTime);
            memoryUsedValues.add(memoryUsed);
            initialMemoryValues.add(initialMemory);
            finalMemoryValues.add(finalMemory);

            // Log every iteration completion
            System.out.printf("[%s] Completed iteration %d/%d for %s - Time: %.6fs, Memory: %.2fMB%n",
                             java.time.LocalTime.now(), i + 1, iterations, algorithmName, 
                             executionTime, memoryUsed);
        }

        return new BenchmarkResult(
            algorithmName, 
            data.length,
            calculateMean(executionTimes),
            calculateStdDev(executionTimes),
            calculateMin(executionTimes),
            calculateMax(executionTimes),
            calculateMean(memoryUsedValues),
            calculateStdDev(memoryUsedValues),
            calculateMean(initialMemoryValues),
            calculateStdDev(initialMemoryValues),
            calculateMean(finalMemoryValues),
            calculateStdDev(finalMemoryValues),
            iterations
        );
    }

    public static List<BenchmarkResult> runBenchmarks() throws IOException {
        int[] sizes = { 1000, 5000, 10000 };
        List<SortingAlgorithm> algorithms = Arrays.asList(
                new SortingAlgorithm(SortingBenchmark::insertionSort, "Insertion Sort"),
                new SortingAlgorithm(SortingBenchmark::bubbleSort, "Bubble Sort"));

        List<BenchmarkResult> results = new ArrayList<>();

        System.out.printf("[%s] Starting benchmark suite with %d data sizes and %d algorithms%n",
                         java.time.LocalTime.now(), sizes.length, algorithms.size());

        for (int sizeIdx = 0; sizeIdx < sizes.length; sizeIdx++) {
            int size = sizes[sizeIdx];
            System.out.printf("[%s] Processing data size %d (%d/%d)%n",
                             java.time.LocalTime.now(), size, sizeIdx + 1, sizes.length);
            int[] testData = loadTestData(size);

            for (int algIdx = 0; algIdx < algorithms.size(); algIdx++) {
                SortingAlgorithm alg = algorithms.get(algIdx);
                System.out.printf("[%s] Running %s (%d/%d) on data size %d%n",
                                 java.time.LocalTime.now(), alg.getName(), 
                                 algIdx + 1, algorithms.size(), size);
                BenchmarkResult result = benchmarkSortingAlgorithm(
                        alg.getFunction(), testData, alg.getName(), 50);
                results.add(result);
                System.out.printf("[%s] Completed %s benchmark for size %d%n",
                                 java.time.LocalTime.now(), alg.getName(), size);
            }
        }

        System.out.printf("[%s] Benchmark suite completed. Generated %d results.%n",
                         java.time.LocalTime.now(), results.size());
        return results;
    }

    private static void saveResultsToJson(List<BenchmarkResult> results) throws IOException {
        try (PrintWriter writer = new PrintWriter(new FileWriter("data/results/java_results.json"))) {
            writer.println("[");

            for (int i = 0; i < results.size(); i++) {
                writer.print(results.get(i).toJson());
                if (i < results.size() - 1) {
                    writer.println(",");
                } else {
                    writer.println();
                }
            }

            writer.println("]");
        }
    }

    public static void main(String[] args) {
        try {
            System.out.printf("[%s] Starting Java sorting algorithm benchmark%n", 
                             java.time.LocalTime.now());

            List<BenchmarkResult> results = runBenchmarks();

            saveResultsToJson(results);
            
            System.out.printf("[%s] Results saved to data/results/java_results.json%n", 
                             java.time.LocalTime.now());

        } catch (IOException e) {
            System.err.println("Erro durante o benchmark: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
