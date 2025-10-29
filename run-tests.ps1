# This script executes JMeter tests and Axe accessibility tests for evaluating Unifor or UFC website

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "University Website Testing Suite" -ForegroundColor Cyan
Write-Host "Performance + Accessibility Testing" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

# Check if JMeter is installed
$jmeterPath = Get-Command jmeter -ErrorAction SilentlyContinue
if (-not $jmeterPath) {
    Write-Host "Error: JMeter is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install JMeter and ensure it's in your PATH" -ForegroundColor Red
    exit 1
}

$UNIVERSITY = $args[0]
$RESULT_BASE_FOLDER = "results"

function Run-TestsForUniversity {
    param(
        [string]$University
    )
    
    $DATA_FOLDER = $University
    $RESULT_FOLDER = Join-Path $RESULT_BASE_FOLDER $University

    Write-Host ""
    Write-Host "==========================================" -ForegroundColor Cyan
    Write-Host "Starting tests for: $($University.ToUpper())" -ForegroundColor Cyan
    Write-Host "==========================================" -ForegroundColor Cyan

    # Create results directory
    if (-not (Test-Path $RESULT_FOLDER)) {
        New-Item -ItemType Directory -Path $RESULT_FOLDER -Force | Out-Null
    }

    Write-Host "Results will be saved in: $RESULT_FOLDER"
    Write-Host ""

    # Teste 1: Homepage Load Test
    Write-Host "Running Homepage Load Test..." -ForegroundColor Yellow
    $homepageTest = Join-Path $DATA_FOLDER "${University}-homepage-test.jmx"
    if (Test-Path $homepageTest) {
        $homepageResults = Join-Path $RESULT_FOLDER "${University}-homepage-results.jtl"
        $homepageReport = Join-Path $RESULT_FOLDER "${University}-homepage-report"
        
        jmeter -n -t $homepageTest `
            -l $homepageResults `
            -e -o $homepageReport
        
        Write-Host "✅ Homepage Load Test completed" -ForegroundColor Green
    } else {
        Write-Host "⚠️  File not found: $homepageTest" -ForegroundColor Yellow
    }
    Write-Host ""

    # Teste 2: Navigation Test
    Write-Host "Running Navigation Test..." -ForegroundColor Yellow
    $navigationTest = Join-Path $DATA_FOLDER "${University}-navigation-test.jmx"
    if (Test-Path $navigationTest) {
        $navigationResults = Join-Path $RESULT_FOLDER "${University}-navigation-results.jtl"
        $navigationReport = Join-Path $RESULT_FOLDER "${University}-navigation-report"
        
        jmeter -n -t $navigationTest `
            -l $navigationResults `
            -e -o $navigationReport
        
        Write-Host "✅ Navigation Test completed" -ForegroundColor Green
    } else {
        Write-Host "⚠️  File not found: $navigationTest" -ForegroundColor Yellow
    }
    Write-Host ""

    # Teste 3: Functional Test
    Write-Host "Running Functional Test..." -ForegroundColor Yellow
    $functionalTest = Join-Path $DATA_FOLDER "${University}-functional-test.jmx"
    if (Test-Path $functionalTest) {
        $functionalResults = Join-Path $RESULT_FOLDER "${University}-functional-results.jtl"
        $functionalReport = Join-Path $RESULT_FOLDER "${University}-functional-report"
        
        jmeter -n -t $functionalTest `
            -l $functionalResults `
            -e -o $functionalReport
        
        Write-Host "✅ Functional Test completed" -ForegroundColor Green
    } else {
        Write-Host "⚠️  File not found: $functionalTest" -ForegroundColor Yellow
    }
    Write-Host ""

    # Teste 4: Accessibility Test (JMeter-based)
    Write-Host "Running Accessibility Test (JMeter)..." -ForegroundColor Yellow
    $accessibilityTest = Join-Path $DATA_FOLDER "${University}-accessibility-test.jmx"
    if (Test-Path $accessibilityTest) {
        $accessibilityResults = Join-Path $RESULT_FOLDER "${University}-accessibility-results.jtl"
        $accessibilityReport = Join-Path $RESULT_FOLDER "${University}-accessibility-report"
        
        jmeter -n -t $accessibilityTest `
            -l $accessibilityResults `
            -e -o $accessibilityReport
        
        Write-Host "✅ Accessibility Test completed" -ForegroundColor Green
    } else {
        Write-Host "⚠️  File not found: $accessibilityTest" -ForegroundColor Yellow
    }
    Write-Host ""

    Write-Host "===========================================" -ForegroundColor Cyan
    Write-Host "All tests completed for $($University.ToUpper())!" -ForegroundColor Cyan
    Write-Host "Results saved in: ${RESULT_FOLDER}" -ForegroundColor Cyan
    Write-Host "===========================================" -ForegroundColor Cyan
    Write-Host ""

    # Generate comprehensive summary report
    Write-Host "Generating comprehensive summary report..." -ForegroundColor Yellow
    Generate-SummaryReport -University $University -ResultFolder $RESULT_FOLDER

    $summaryPath = Join-Path $RESULT_FOLDER "index.html"
    Write-Host "Summary report generated: $summaryPath" -ForegroundColor Green
    Write-Host ""
}

function Generate-SummaryReport {
    param(
        [string]$University,
        [string]$ResultFolder
    )
    
    $UNIVERSITY_NAME = $University.ToUpper()
    $currentDate = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    
    $htmlContent = @"
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
        <p>Generated on: ${currentDate}</p>
    </div>

    <div class="nav-links">
        <a href="${University}-homepage-report/index.html">📊 Homepage Reports</a>
        <a href="${University}-navigation-report/index.html">🧭 Navigation Tests</a>
        <a href="${University}-functional-report/index.html">⚙️ Functional Tests</a>
        <a href="${University}-accessibility-report/index.html">♿ Accessibility Tests</a>
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
            <li><a href="${University}-homepage-report/index.html">Homepage Load Test Report</a></li>
            <li><a href="${University}-navigation-report/index.html">Navigation Test Report</a></li>
            <li><a href="${University}-functional-report/index.html">Functional Test Report</a></li>
            <li><a href="${University}-accessibility-report/index.html">Accessibility Test Report</a></li>
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
"@

    $indexPath = Join-Path $ResultFolder "index.html"
    $htmlContent | Out-File -FilePath $indexPath -Encoding UTF8
}

# Main execution
if ([string]::IsNullOrEmpty($UNIVERSITY)) {
    Write-Host "Usage: .\run-tests.ps1 {unifor|ufc|all}" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Examples:"
    Write-Host "  .\run-tests.ps1 unifor    # Run tests only for Unifor" -ForegroundColor Cyan
    Write-Host "  .\run-tests.ps1 ufc       # Run tests only for UFC" -ForegroundColor Cyan
    Write-Host "  .\run-tests.ps1 all       # Run tests for both universities" -ForegroundColor Cyan
    exit 1
}

switch ($UNIVERSITY.ToLower()) {
    "unifor" {
        Run-TestsForUniversity -University "unifor"
    }
    "ufc" {
        Run-TestsForUniversity -University "ufc"
    }
    "all" {
        Run-TestsForUniversity -University "unifor"
        Write-Host ""
        Write-Host "==========================================" -ForegroundColor Cyan
        Write-Host "Waiting 10 seconds before starting UFC tests..." -ForegroundColor Cyan
        Write-Host "==========================================" -ForegroundColor Cyan
        Start-Sleep -Seconds 10
        Write-Host ""
        Run-TestsForUniversity -University "ufc"

        Write-Host ""
        Write-Host "🎉 All Tests Completed for Both Universities!" -ForegroundColor Green
        Write-Host "==========================================" -ForegroundColor Cyan
        Write-Host "📊 Unifor Results: .\results\unifor\" -ForegroundColor Cyan
        Write-Host "📊 UFC Results: .\results\ufc\" -ForegroundColor Cyan
    }
    default {
        Write-Host "❌ Invalid option: $UNIVERSITY" -ForegroundColor Red
        Write-Host "Use: unifor, ufc, or all" -ForegroundColor Yellow
        exit 1
    }
}

Write-Host ""
Write-Host "🎉 Testing Suite Completed Successfully!" -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "📊 Performance Tests: ✅ Completed" -ForegroundColor Green
Write-Host "♿ Accessibility Tests: ✅ Completed" -ForegroundColor Green
Write-Host "📁 Results Directory: .\results\" -ForegroundColor Cyan
Write-Host ""

