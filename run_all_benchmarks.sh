#!/usr/bin/env zsh
set -euo pipefail

# Ensure results dir exists
mkdir -p data/results

# Build images
docker compose build

# Run containers
echo "Running Python benchmark..."
docker compose run --rm python

echo "Running Go benchmark..."
docker compose run --rm go

echo "Running Java benchmark..."
docker compose run --rm java

echo "Running Rust benchmark..."
docker compose run --rm rust
