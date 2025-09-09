# syntax=docker/dockerfile:1
FROM golang:1.22-alpine AS build
WORKDIR /app
COPY languages/go/ ./
RUN go build -o sorting

FROM alpine:3.20
WORKDIR /app
COPY --from=build /app/sorting /app/sorting
# Mount data directory at runtime
COPY data /app/data
ENTRYPOINT ["/app/sorting"]
