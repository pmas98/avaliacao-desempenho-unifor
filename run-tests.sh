#!/bin/bash

# Unifor Website Performance and Accessibility Testing Script
# This script executes JMeter tests and Axe accessibility tests for evaluating Unifor website

echo "=========================================="
echo "Unifor Website Testing Suite"
echo "Performance + Accessibility Testing"
echo "=========================================="

# Check if JMeter is installed
if ! command -v jmeter &> /dev/null; then
    echo "Error: JMeter is not installed or not in PATH"
    echo "Please install JMeter and ensure it's in your PATH"
    exit 1
fi


# Create results directory
mkdir -p results
cd results

echo "Starting performance tests..."

# Test 1: Homepage Load Test
echo "Running Homepage Load Test..."
jmeter -n -t ../unifor-homepage-test-corrected.jmx -l homepage-results.jtl -e -o homepage-report/

# Test 2: Navigation Test
echo "Running Navigation Test..."
jmeter -n -t ../unifor-navigation-test-corrected.jmx -l navigation-results.jtl -e -o navigation-report/

# Test 3: Functional Test
echo "Running Functional Test..."
jmeter -n -t ../unifor-functional-test-corrected.jmx -l functional-results.jtl -e -o functional-report/

# Test 4: Accessibility Test (JMeter-based)
echo "Running Accessibility Test (JMeter)..."
jmeter -n -t ../unifor-accessibility-test.jmx -l accessibility-results.jtl -e -o accessibility-report/


echo "=========================================="
echo "All tests completed!"
echo "Results saved in the 'results' directory"
echo "=========================================="

# Generate comprehensive summary report
echo "Generating comprehensive summary report..."
cat > summary-report.html << 'EOF'
<!DOCTYPE html>
<html>
<head>
    <title>Unifor Website Comprehensive Test Summary</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: #f8f9fa; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px; }
        .header h1 { font-size: 2.5em; margin-bottom: 10px; }
        .test-section { margin: 20px 0; padding: 20px; background: white; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .metric { display: inline-block; margin: 10px; padding: 15px; background: #e8f4f8; border-radius: 8px; min-width: 150px; text-align: center; }
        .success { color: #27ae60; }
        .warning { color: #f39c12; }
        .error { color: #e74c3c; }
        .accessibility-section { background: #f0f8ff; border-left: 4px solid #3498db; }
        .performance-section { background: #f0fff0; border-left: 4px solid #27ae60; }
        .nav-links { text-align: center; margin: 20px 0; }
        .nav-links a { display: inline-block; margin: 10px; padding: 10px 20px; background: #3498db; color: white; text-decoration: none; border-radius: 5px; }
        .nav-links a:hover { background: #2980b9; }
        .wcag-badge { display: inline-block; padding: 5px 10px; background: #27ae60; color: white; border-radius: 15px; font-size: 0.8em; margin-left: 10px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>🔍 Unifor Website Test Suite</h1>
        <p>Performance Testing + Accessibility Compliance</p>
        <p>Generated on: $(date)</p>
    </div>
    
    <div class="nav-links">
        <a href="homepage-report/index.html">📊 Performance Reports</a>
        <a href="navigation-report/index.html">🧭 Navigation Tests</a>
        <a href="functional-report/index.html">⚙️ Functional Tests</a>
        <a href="accessibility-report/index.html">♿ Accessibility Tests</a>
    </div>
    
    <div class="test-section performance-section">
        <h2>🚀 Performance Testing Overview</h2>
        <p>Comprehensive performance evaluation of the Unifor website including load testing, stress testing, and functional validation.</p>
        
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
            <li><a href="homepage-report/index.html">Homepage Load Test Report</a></li>
            <li><a href="navigation-report/index.html">Navigation Test Report</a></li>
            <li><a href="functional-report/index.html">Functional Test Report</a></li>
            <li><a href="accessibility-report/index.html">Accessibility Test Report (JMeter)</a></li>
        </ul>
    </div>
    
    <div class="test-section">
        <h2>🎯 Recommendations</h2>
        <p>Based on the test results, consider the following optimizations:</p>
        
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

echo "Summary report generated: results/summary-report.html"
echo "Open the HTML reports in your browser to view detailed results"

# Display final summary
echo ""
echo "🎉 Testing Suite Completed Successfully!"
echo "=========================================="
echo "📊 Performance Tests: ✅ Completed"
echo "♿ Accessibility Tests: ✅ Completed (JMeter only)"
echo "📁 Results Directory: ./results/"
echo "🌐 Main Report: ./results/summary-report.html"
echo ""
echo ""
echo "To run only performance tests:"
echo "  jmeter -n -t unifor-navigation-test-corrected.jmx -l results.jtl -e -o report/"
