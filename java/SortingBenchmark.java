import java.io.*;
import java.util.*;
import java.util.function.Function;

class BenchmarkResult {
    private String algorithm;
    private int dataSize;
    private double executionTime;
    private double memoryUsedMB;
    private double initialMemoryMB;
    private double finalMemoryMB;

    public BenchmarkResult(String algorithm, int dataSize, double executionTime,
            double memoryUsedMB, double initialMemoryMB, double finalMemoryMB) {
        this.algorithm = algorithm;
        this.dataSize = dataSize;
        this.executionTime = executionTime;
        this.memoryUsedMB = memoryUsedMB;
        this.initialMemoryMB = initialMemoryMB;
        this.finalMemoryMB = finalMemoryMB;
    }

    public String toJson() {
        return String.format(
                "{\n" +
                        "    \"algorithm\": \"%s\",\n" +
                        "    \"data_size\": %d,\n" +
                        "    \"execution_time\": %.6f,\n" +
                        "    \"memory_used_mb\": %.6f,\n" +
                        "    \"initial_memory_mb\": %.6f,\n" +
                        "    \"final_memory_mb\": %.6f\n" +
                        "  }",
                algorithm, dataSize, executionTime, memoryUsedMB, initialMemoryMB, finalMemoryMB);
    }

    public String getAlgorithm() {
        return algorithm;
    }

    public int getDataSize() {
        return dataSize;
    }

    public double getExecutionTime() {
        return executionTime;
    }

    public double getMemoryUsedMB() {
        return memoryUsedMB;
    }

    public double getInitialMemoryMB() {
        return initialMemoryMB;
    }

    public double getFinalMemoryMB() {
        return finalMemoryMB;
    }
}

class SortingAlgorithm {
    private Function<int[], int[]> function;
    private String name;

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

    public static BenchmarkResult benchmarkSortingAlgorithm(Function<int[], int[]> algorithm,
            int[] data, String algorithmName) {
        System.gc();

        double initialMemory = measureMemory();
        long startTime = System.nanoTime();

        int[] sortedData = algorithm.apply(data);

        long endTime = System.nanoTime();
        double finalMemory = measureMemory();

        double executionTime = (endTime - startTime) / 1_000_000_000.0;
        double memoryUsed = finalMemory - initialMemory;

        return new BenchmarkResult(algorithmName, data.length, executionTime,
                memoryUsed, initialMemory, finalMemory);
    }

    public static List<BenchmarkResult> runBenchmarks() throws IOException {
        int[] sizes = { 1000, 5000, 10000 };
        List<SortingAlgorithm> algorithms = Arrays.asList(
                new SortingAlgorithm(SortingBenchmark::insertionSort, "Insertion Sort"),
                new SortingAlgorithm(SortingBenchmark::bubbleSort, "Bubble Sort"));

        List<BenchmarkResult> results = new ArrayList<>();

        for (int size : sizes) {
            int[] testData = loadTestData(size);

            for (SortingAlgorithm alg : algorithms) {
                BenchmarkResult result = benchmarkSortingAlgorithm(
                        alg.getFunction(), testData, alg.getName());
                results.add(result);
            }
        }

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
            Random random = new Random(System.nanoTime());

            List<BenchmarkResult> results = runBenchmarks();

            saveResultsToJson(results);

        } catch (IOException e) {
            System.err.println("Erro durante o benchmark: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
