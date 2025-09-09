# syntax=docker/dockerfile:1
FROM python:3.13-slim
WORKDIR /app
COPY python/requirements.txt ./requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
COPY python/sorting.py ./sorting.py
COPY data /app/data
ENTRYPOINT ["python", "sorting.py"]
