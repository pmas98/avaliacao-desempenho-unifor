# syntax=docker/dockerfile:1
FROM python:3.13-slim
WORKDIR /app
COPY languages/python/requirements.txt ./requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
COPY languages/python/sorting.py ./sorting.py
COPY data /app/data
ENTRYPOINT ["python", "sorting.py"]
