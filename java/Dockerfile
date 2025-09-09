# syntax=docker/dockerfile:1
FROM eclipse-temurin:21-jdk-alpine AS build
WORKDIR /app
COPY java/*.java ./
RUN javac SortingBenchmark.java

FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY --from=build /app /app
COPY data /app/data
ENTRYPOINT ["java", "SortingBenchmark"]
