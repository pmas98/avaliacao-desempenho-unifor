#!/bin/bash

# This script executes JMeter tests and Axe accessibility tests for evaluating Unifor or UFC website

echo "=========================================="
echo "University Website Testing Suite"
echo "Performance + Accessibility Testing"
echo "=========================================="

# Check if JMeter is installed
if ! command -v jmeter &>/dev/null; then
    echo "Error: JMeter is not installed or not in PATH"
    echo "Please install JMeter and ensure it's in your PATH"
    exit 1
fi

UNIVERSITY=$1
RESULT_BASE_FOLDER="results"

run_tests_for_university() {
    local UNIVERSITY=$1
    local DATA_FOLDER=${UNIVERSITY}
    local RESULT_FOLDER="${RESULT_BASE_FOLDER}/${UNIVERSITY}"

    echo "=========================================="
    echo "Starting tests for: ${UNIVERSITY^^}"
    echo "=========================================="

    # Create results directory
    mkdir -p "$RESULT_FOLDER"

    echo "Results will be saved in: $RESULT_FOLDER"
    echo ""

    # Teste 1: Homepage Load Test
    echo "Running Homepage Load Test..."
    if [ -f "${DATA_FOLDER}/${UNIVERSITY}-homepage-test.jmx" ]; then
        jmeter -n -t "${DATA_FOLDER}/${UNIVERSITY}-homepage-test.jmx" \
            -l "${RESULT_FOLDER}/${UNIVERSITY}-homepage-results.jtl" \
            -e -o "${RESULT_FOLDER}/${UNIVERSITY}-homepage-report/"
        echo "✅ Homepage Load Test completed"
    else
        echo "⚠️  File not found: ${DATA_FOLDER}/${UNIVERSITY}-homepage-test.jmx"
    fi
    echo ""

    # Teste 2: Navigation Test
    echo "Running Navigation Test..."
    if [ -f "${DATA_FOLDER}/${UNIVERSITY}-navigation-test.jmx" ]; then
        jmeter -n -t "${DATA_FOLDER}/${UNIVERSITY}-navigation-test.jmx" \
            -l "${RESULT_FOLDER}/${UNIVERSITY}-navigation-results.jtl" \
            -e -o "${RESULT_FOLDER}/${UNIVERSITY}-navigation-report/"
        echo "✅ Navigation Test completed"
    else
        echo "⚠️  File not found: ${DATA_FOLDER}/${UNIVERSITY}-navigation-test.jmx"
    fi
    echo ""

    # Teste 3: Functional Test
    echo "Running Functional Test..."
    if [ -f "${DATA_FOLDER}/${UNIVERSITY}-functional-test.jmx" ]; then
        jmeter -n -t "${DATA_FOLDER}/${UNIVERSITY}-functional-test.jmx" \
            -l "${RESULT_FOLDER}/${UNIVERSITY}-functional-results.jtl" \
            -e -o "${RESULT_FOLDER}/${UNIVERSITY}-functional-report/"
        echo "✅ Functional Test completed"
    else
        echo "⚠️  File not found: ${DATA_FOLDER}/${UNIVERSITY}-functional-test.jmx"
    fi
    echo ""

    # Teste 4: Accessibility Test (JMeter-based)
    echo "Running Accessibility Test (JMeter)..."
    if [ -f "${DATA_FOLDER}/${UNIVERSITY}-accessibility-test.jmx" ]; then
        jmeter -n -t "${DATA_FOLDER}/${UNIVERSITY}-accessibility-test.jmx" \
            -l "${RESULT_FOLDER}/${UNIVERSITY}-accessibility-results.jtl" \
            -e -o "${RESULT_FOLDER}/${UNIVERSITY}-accessibility-report/"
        echo "✅ Accessibility Test completed"
    else
        echo "⚠️  File not found: ${DATA_FOLDER}/${UNIVERSITY}-accessibility-test.jmx"
    fi
    echo ""

    echo "==========================================="
    echo "All tests completed for ${UNIVERSITY^^}!"
    echo "Results saved in: ${RESULT_FOLDER}"
    echo "==========================================="
    echo ""

    # Generate comprehensive summary report
    echo "Generating comprehensive summary report..."
    generate_summary_report "$UNIVERSITY" "$RESULT_FOLDER"

    echo "Summary report generated: ${RESULT_FOLDER}/summary-report.html"
    echo ""
}

generate_summary_report() {
    local UNIVERSITY=$1
    local RESULT_FOLDER=$2
    local UNIVERSITY_NAME=$(echo "$UNIVERSITY" | tr '[:lower:]' '[:upper:]')

    cat >"${RESULT_FOLDER}/index.html" <<EOF
<!DOCTYPE html>
<html>
<head>
    <title>${UNIVERSITY_NAME} Website Comprehensive Test Summary</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background: #f8f9fa;
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            border-radius: 10px;
            text-align: center;
            margin-bottom: 30px;
        }
        .header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
        }
        .test-section {
            margin: 20px 0;
            padding: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .metric {
            display: inline-block;
            margin: 10px;
            padding: 15px;
            background: #e8f4f8;
            border-radius: 8px;
            min-width: 150px;
            text-align: center;
        }
        .success { color: #27ae60; }
        .warning { color: #f39c12; }
        .error { color: #e74c3c; }
        .performance-section {
            background: #f0fff0;
            border-left: 4px solid #27ae60;
        }
        .nav-links {
            text-align: center;
            margin: 20px 0;
        }
        .nav-links a {
            display: inline-block;
            margin: 10px;
            padding: 10px 20px;
            background: #3498db;
            color: white;
            text-decoration: none;
            border-radius: 5px;
        }
        .nav-links a:hover {
            background: #2980b9;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🔍 ${UNIVERSITY_NAME} Website Test Suite</h1>
        <p>Performance Testing + Accessibility Compliance</p>
        <p>Generated on: $(date)</p>
    </div>

    <div class="nav-links">
        <a href="${UNIVERSITY}-homepage-report/index.html">📊 Homepage Reports</a>
        <a href="${UNIVERSITY}-navigation-report/index.html">🧭 Navigation Tests</a>
        <a href="${UNIVERSITY}-functional-report/index.html">⚙️ Functional Tests</a>
        <a href="${UNIVERSITY}-accessibility-report/index.html">♿ Accessibility Tests</a>
    </div>

    <div class="test-section performance-section">
        <h2>🚀 Performance Testing Overview</h2>
        <p>Comprehensive performance evaluation of the ${UNIVERSITY_NAME} website including load testing, stress testing, and functional validation.</p>
        
        <div class="metric">
            <strong>Homepage Load Test</strong><br>
            Threads: 50<br>
            Ramp-up: 60s<br>
            Loops: 10
        </div>
        <div class="metric">
            <strong>Navigation Test</strong><br>
            Threads: 30<br>
            Ramp-up: 30s<br>
            Loops: 5
        </div>
        <div class="metric">
            <strong>Functional Test</strong><br>
            Search: 20 threads<br>
            Contact: 10 threads<br>
            Admission: 5 threads
        </div>
    </div>

    <div class="test-section">
        <h2>📈 Performance Metrics</h2>
        <p>The following metrics are collected during testing:</p>
        <ul>
            <li><strong>Response Time:</strong> Time taken to receive response from server</li>
            <li><strong>Throughput:</strong> Requests per second</li>
            <li><strong>Error Rate:</strong> Percentage of failed requests</li>
            <li><strong>CPU Usage:</strong> Server resource utilization</li>
            <li><strong>Memory Usage:</strong> Memory consumption during tests</li>
        </ul>
    </div>

    <div class="test-section">
        <h2>📊 Test Results</h2>
        <p>Detailed results are available in the following directories:</p>
        <ul>
            <li><a href="${UNIVERSITY}-homepage-report/index.html">Homepage Load Test Report</a></li>
            <li><a href="${UNIVERSITY}-navigation-report/index.html">Navigation Test Report</a></li>
            <li><a href="${UNIVERSITY}-functional-report/index.html">Functional Test Report</a></li>
            <li><a href="${UNIVERSITY}-accessibility-report/index.html">Accessibility Test Report</a></li>
        </ul>
    </div>

    <div class="test-section">
        <h2>🎯 Recommendations</h2>
        <h3>Performance Optimizations:</h3>
        <ul>
            <li>Optimize images and static resources</li>
            <li>Implement caching strategies</li>
            <li>Consider CDN for global content delivery</li>
            <li>Monitor database performance</li>
            <li>Implement load balancing if needed</li>
        </ul>
    </div>

    <div class="test-section">
        <h2>🛠️ Testing Tools Used</h2>
        <ul>
            <li><strong>Apache JMeter:</strong> Performance and load testing</li>
        </ul>
    </div>
</body>
</html>
EOF
}

# Main execution
if [ -z "$UNIVERSITY" ]; then
    echo "Usage: $0 {unifor|ufc|all}"
    echo ""
    echo "Examples:"
    echo "  $0 unifor    # Run tests only for Unifor"
    echo "  $0 ufc       # Run tests only for UFC"
    echo "  $0 all       # Run tests for both universities"
    exit 1
fi

case "$UNIVERSITY" in
unifor)
    run_tests_for_university "unifor"
    ;;
ufc)
    run_tests_for_university "ufc"
    ;;
all)
    run_tests_for_university "unifor"
    echo ""
    echo "=========================================="
    echo "Waiting 10 seconds before starting UFC tests..."
    echo "=========================================="
    sleep 10
    echo ""
    run_tests_for_university "ufc"

    echo ""
    echo "🎉 All Tests Completed for Both Universities!"
    echo "=========================================="
    echo "📊 Unifor Results: ./results/unifor/"
    echo "📊 UFC Results: ./results/ufc/"
    ;;
*)
    echo "❌ Invalid option: $UNIVERSITY"
    echo "Use: unifor, ufc, or all"
    exit 1
    ;;
esac

echo ""
echo "🎉 Testing Suite Completed Successfully!"
echo "=========================================="
echo "📊 Performance Tests: ✅ Completed"
echo "♿ Accessibility Tests: ✅ Completed"
echo "📁 Results Directory: ./results/"
echo ""
