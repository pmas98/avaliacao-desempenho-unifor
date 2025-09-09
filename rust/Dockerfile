# syntax=docker/dockerfile:1
FROM rust:1.80-alpine AS build

RUN apk add --no-cache musl-dev gcc libc-dev make

WORKDIR /app
COPY rust/. ./
RUN cargo build --release

FROM alpine:3.20
WORKDIR /app
COPY --from=build /app/target/release/rust /app/rust-bench
COPY data /app/data
ENTRYPOINT ["/app/rust-bench"]
