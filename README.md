# Unifor Website Testing Suite

## Overview

This comprehensive testing suite evaluates both **performance** and **accessibility** of the Unifor website (https://unifor.br). It combines Apache JMeter for performance testing with Axe-core for accessibility compliance testing.

## Features

### 🚀 Performance Testing
- **Load Testing**: Homepage performance under various load conditions
- **Navigation Testing**: Multi-page navigation performance
- **Functional Testing**: Search functionality and form interactions
- **Stress Testing**: System behavior under high load

### ♿ Accessibility Testing
- **WCAG 2.1 AA Compliance**: Comprehensive accessibility standards testing
- **Axe-core Integration**: Industry-standard accessibility testing engine
- **Multi-page Coverage**: Tests all major website sections
- **Detailed Reporting**: Visual reports with violation details and recommendations

## Prerequisites

### Required Software
- **Apache JMeter** (5.6.3 or later)
- **Java** (JDK 8 or later)

### Optional Software (for Advanced Accessibility Testing)
- **Node.js** (14.x or later)
- **npm** (comes with Node.js)

## Installation

1. **Clone or download** this testing suite
2. **Install JMeter** following the [official installation guide](https://jmeter.apache.org/usermanual/get-started.html)
3. **For accessibility testing**, install Node.js dependencies:
   ```bash
   npm install
   ```

## Usage

### Quick Start - Run All Tests
```bash
chmod +x run-tests.sh
./run-tests.sh
```

This will run:
- Performance tests (JMeter)
- Basic accessibility tests (JMeter)
- Advanced accessibility tests (Axe-core) - if Node.js is available

### Individual Test Execution

#### Performance Tests Only
```bash
# Homepage Load Test
jmeter -n -t unifor-homepage-test-corrected.jmx -l homepage-results.jtl -e -o homepage-report/

# Navigation Test
jmeter -n -t unifor-navigation-test-corrected.jmx -l navigation-results.jtl -e -o navigation-report/

# Functional Test
jmeter -n -t unifor-functional-test-corrected.jmx -l functional-results.jtl -e -o functional-report/
```

#### Accessibility Tests Only
```bash
# Basic accessibility test (JMeter)
jmeter -n -t unifor-accessibility-test.jmx -l accessibility-results.jtl -e -o accessibility-report/

# Advanced accessibility test (Axe-core)
node axe-accessibility-test.js --report
```

### Accessibility Test Options

The Axe accessibility test supports several command-line options:

```bash
# Basic test
node axe-accessibility-test.js

# Test with detailed HTML report
node axe-accessibility-test.js --report

# Test specific URL
node axe-accessibility-test.js --url https://unifor.br/noticias

# Run in headless mode
node axe-accessibility-test.js --headless

# Custom output directory
node axe-accessibility-test.js --output ./my-results

# Verbose output
node axe-accessibility-test.js --verbose

# Custom timeout
node axe-accessibility-test.js --timeout 60000
```

## Test Coverage

### Performance Testing
- **Homepage Load Test**: 50 threads, 60s ramp-up, 10 loops
- **Navigation Test**: 30 threads, 30s ramp-up, 5 loops
- **Functional Test**: 20 threads for search, 10 for contact, 5 for admissions

### Accessibility Testing
Tests the following pages for WCAG 2.1 AA compliance:
- Homepage (/)
- News (/noticias)
- Graduation (/web/graduacao/home)
- Post-Graduation (/web/pos-graduacao/home)
- Admissions (/web/graduacao/processo-seletivo/inscricoes)
- Search (/home)

### Accessibility Test Coverage
- **Color Contrast**: Text and background color ratios
- **Keyboard Navigation**: Tab order and focus management
- **Screen Reader Support**: ARIA labels and semantic HTML
- **Image Accessibility**: Alt text and descriptions
- **Form Accessibility**: Labels and error handling
- **Heading Structure**: Proper heading hierarchy
- **Link Accessibility**: Descriptive link text
- **Language Declaration**: HTML lang attribute

## Results and Reports

### Output Structure
```
results/
├── summary-report.html              # Main comprehensive report
├── homepage-report/                 # Homepage performance results
├── navigation-report/               # Navigation performance results
├── functional-report/               # Functional test results
├── accessibility-report/             # Basic accessibility results (JMeter)
└── accessibility-results/          # Advanced accessibility results (Axe)
    ├── accessibility-report.html    # Detailed Axe report
    ├── accessibility-results.json   # Raw test data
    └── *.png                        # Page screenshots
```

### Report Types
1. **Summary Report**: Overview of all tests with navigation links
2. **Performance Reports**: JMeter-generated HTML reports with charts and metrics
3. **Accessibility Reports**: Detailed WCAG compliance analysis with violation details

## Understanding Results

### Performance Metrics
- **Response Time**: Average time to receive server response
- **Throughput**: Requests processed per second
- **Error Rate**: Percentage of failed requests
- **Resource Usage**: CPU and memory utilization

### Accessibility Metrics
- **Violations**: Number of WCAG compliance issues found
- **Passes**: Number of accessibility checks that passed
- **Incomplete**: Tests that couldn't be completed automatically
- **Impact Levels**: Critical, Serious, Moderate, Minor

### Accessibility Violation Types
- **Critical**: Blocks users from accessing content
- **Serious**: Significantly impacts user experience
- **Moderate**: Some impact on accessibility
- **Minor**: Minor accessibility improvements needed

## Troubleshooting

### Common Issues

#### JMeter Not Found
```bash
# Install JMeter and ensure it's in PATH
export PATH=$PATH:/path/to/jmeter/bin
```

#### Node.js Not Found
```bash
# Install Node.js from https://nodejs.org/
# Then install dependencies
npm install
```

#### Permission Denied
```bash
# Make scripts executable
chmod +x run-tests.sh
```

#### Browser Issues (Accessibility Tests)
```bash
# Install additional dependencies for Puppeteer
npm install puppeteer --unsafe-perm=true --allow-root
```

### Performance Issues
- **High Response Times**: Check server resources and network connectivity
- **High Error Rates**: Verify server stability and capacity
- **Memory Issues**: Adjust JMeter heap size: `export HEAP="-Xms1g -Xmx4g"`

### Accessibility Issues
- **False Positives**: Some dynamic content may trigger false accessibility violations
- **Timeout Errors**: Increase timeout value for slow-loading pages
- **Browser Crashes**: Run in headless mode for stability

## Customization

### Adding New Test Pages
Edit `axe-accessibility-test.js` and add new pages to the `pages` array:

```javascript
pages: [
  { name: 'New Page', path: '/new-page' },
  // ... existing pages
]
```

### Modifying Accessibility Rules
Edit the `axeConfig` object in `axe-accessibility-test.js`:

```javascript
axeConfig: {
  rules: {
    'color-contrast': { enabled: true },
    'keyboard-navigation': { enabled: true },
    // Add or modify rules as needed
  }
}
```

### Adjusting Performance Test Parameters
Modify the JMeter test plans (.jmx files) to adjust:
- Thread counts
- Ramp-up times
- Loop counts
- Think times

## Best Practices

### Running Tests
1. **Run tests during off-peak hours** to avoid impacting real users
2. **Start with small load tests** and gradually increase
3. **Monitor server resources** during testing
4. **Review accessibility reports** regularly for compliance

### Interpreting Results
1. **Focus on critical and serious violations** first
2. **Consider user impact** when prioritizing fixes
3. **Test with real assistive technologies** for validation
4. **Document accessibility improvements** for future reference

## Contributing

To contribute to this testing suite:

1. **Fork the repository**
2. **Create a feature branch**
3. **Add your improvements**
4. **Test thoroughly**
5. **Submit a pull request**

## Support

For issues or questions:
1. **Check the troubleshooting section** above
2. **Review JMeter documentation** for performance testing issues
3. **Check Axe-core documentation** for accessibility testing issues
4. **Create an issue** with detailed error information

## License

This testing suite is provided for educational and evaluation purposes. Please ensure you have permission to test the target website before running these tests.

---

**Note**: This testing suite is designed for the Unifor website evaluation project. Modify URLs and test parameters as needed for other websites.