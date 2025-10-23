#!/usr/bin/env node

/**
 * Unifor Website Accessibility Testing Suite
 * Uses Axe-core to test WCAG compliance and accessibility standards
 */

const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const path = require('path');
const moment = require('moment');
const { Command } = require('commander');

const program = new Command();

program
  .option('-u, --url <url>', 'Base URL to test', 'https://unifor.br')
  .option('-h, --headless', 'Run in headless mode', false)
  .option('-r, --report', 'Generate detailed HTML report', false)
  .option('-o, --output <dir>', 'Output directory for results', './accessibility-results')
  .option('-t, --timeout <ms>', 'Page load timeout in milliseconds', 30000)
  .option('-v, --verbose', 'Verbose output', false);

program.parse();

const options = program.opts();

// Test configuration
const TEST_CONFIG = {
  baseUrl: options.url,
  headless: options.headless,
  generateReport: options.report,
  outputDir: options.output,
  timeout: parseInt(options.timeout),
  verbose: options.verbose,
  
  // Pages to test
  pages: [
    { name: 'Homepage', path: '/' },
    { name: 'News', path: '/noticias' },
    { name: 'Graduation', path: '/web/graduacao/home' },
    { name: 'Post-Graduation', path: '/web/pos-graduacao/home' },
    { name: 'Admissions', path: '/web/graduacao/processo-seletivo/inscricoes' },
    { name: 'Search', path: '/home' }
  ],
  
  // Axe configuration
  axeConfig: {
    rules: {
      // WCAG 2.1 AA compliance
      'color-contrast': { enabled: true },
      'keyboard-navigation': { enabled: true },
      'focus-order-semantics': { enabled: true },
      'aria-labels': { enabled: true },
      'alt-text': { enabled: true },
      'heading-order': { enabled: true },
      'landmark-unique': { enabled: true },
      'link-name': { enabled: true },
      'button-name': { enabled: true },
      'form-field-multiple-labels': { enabled: true },
      'duplicate-id': { enabled: true },
      'html-has-lang': { enabled: true },
      'html-lang-valid': { enabled: true },
      'image-alt': { enabled: true },
      'input-image-alt': { enabled: true },
      'label': { enabled: true },
      'link-in-text-block': { enabled: true },
      'list': { enabled: true },
      'listitem': { enabled: true },
      'marquee': { enabled: true },
      'meta-refresh': { enabled: true },
      'object-alt': { enabled: true },
      'role-img-alt': { enabled: true },
      'scrollable-region-focusable': { enabled: true },
      'select-name': { enabled: true },
      'server-side-image-map': { enabled: true },
      'svg-img-alt': { enabled: true },
      'td-headers-attr': { enabled: true },
      'th-has-data-cells': { enabled: true },
      'valid-lang': { enabled: true },
      'video-caption': { enabled: true },
      'video-description': { enabled: true }
    },
    tags: ['wcag2a', 'wcag2aa', 'wcag21aa', 'best-practice'],
    exclude: [
      // Exclude dynamic content that might cause false positives
      '[data-testid="dynamic-content"]',
      '.lazy-loaded',
      '[aria-hidden="true"]'
    ]
  }
};

class AccessibilityTester {
  constructor(config) {
    this.config = config;
    this.results = [];
    this.browser = null;
    this.startTime = moment();
  }

  async initialize() {
    console.log('🚀 Initializing Accessibility Testing Suite...');
    console.log(`📊 Testing URL: ${this.config.baseUrl}`);
    console.log(`📁 Output Directory: ${this.config.outputDir}`);
    
    // Create output directory
    await fs.ensureDir(this.config.outputDir);
    
    // Launch browser
    this.browser = await puppeteer.launch({
      headless: this.config.headless ? 'new' : false,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--disable-gpu'
      ]
    });

    console.log('✅ Browser initialized successfully');
  }

  async testPage(pageConfig) {
    const page = await this.browser.newPage();
    const url = `${this.config.baseUrl}${pageConfig.path}`;
    
    try {
      console.log(`🔍 Testing: ${pageConfig.name} (${url})`);
      
      // Set viewport
      await page.setViewport({ width: 1280, height: 720 });
      
      // Navigate to page
      await page.goto(url, { 
        waitUntil: 'networkidle2',
        timeout: this.config.timeout 
      });

      // Wait for page to be fully loaded
      await page.waitForTimeout(2000);

      // Inject Axe script
      await page.addScriptTag({
        url: 'https://unpkg.com/axe-core@4.8.2/axe.min.js'
      });

      // Run Axe accessibility tests
      const axeResults = await page.evaluate((config) => {
        return new Promise((resolve) => {
          axe.run(config, (err, results) => {
            if (err) {
              resolve({ error: err.message });
            } else {
              resolve(results);
            }
          });
        });
      }, this.config.axeConfig);

      // Capture page screenshot for reference
      const screenshotPath = path.join(
        this.config.outputDir, 
        `screenshot-${pageConfig.name.toLowerCase().replace(/\s+/g, '-')}.png`
      );
      await page.screenshot({ 
        path: screenshotPath, 
        fullPage: true 
      });

      // Process results
      const result = {
        page: pageConfig.name,
        url: url,
        timestamp: moment().format(),
        screenshot: screenshotPath,
        violations: axeResults.violations || [],
        passes: axeResults.passes || [],
        incomplete: axeResults.incomplete || [],
        inapplicable: axeResults.inapplicable || [],
        summary: {
          violations: axeResults.violations ? axeResults.violations.length : 0,
          passes: axeResults.passes ? axeResults.passes.length : 0,
          incomplete: axeResults.incomplete ? axeResults.incomplete.length : 0,
          inapplicable: axeResults.inapplicable ? axeResults.inapplicable.length : 0
        }
      };

      this.results.push(result);

      // Log results
      if (this.config.verbose) {
        console.log(`  ✅ Passed: ${result.summary.passes}`);
        console.log(`  ❌ Violations: ${result.summary.violations}`);
        console.log(`  ⚠️  Incomplete: ${result.summary.incomplete}`);
        console.log(`  ℹ️  Not applicable: ${result.summary.inapplicable}`);
      } else {
        const status = result.summary.violations === 0 ? '✅ PASS' : '❌ FAIL';
        console.log(`  ${status} - ${result.summary.violations} violations found`);
      }

      return result;

    } catch (error) {
      console.error(`❌ Error testing ${pageConfig.name}: ${error.message}`);
      const errorResult = {
        page: pageConfig.name,
        url: url,
        timestamp: moment().format(),
        error: error.message,
        summary: { violations: 0, passes: 0, incomplete: 0, inapplicable: 0 }
      };
      this.results.push(errorResult);
      return errorResult;
    } finally {
      await page.close();
    }
  }

  async runTests() {
    console.log('\n🧪 Starting accessibility tests...\n');
    
    for (const pageConfig of this.config.pages) {
      await this.testPage(pageConfig);
    }

    console.log('\n📊 Tests completed!');
  }

  async generateReport() {
    if (!this.config.generateReport) return;

    console.log('📝 Generating accessibility report...');

    const totalViolations = this.results.reduce((sum, result) => sum + result.summary.violations, 0);
    const totalPasses = this.results.reduce((sum, result) => sum + result.summary.passes, 0);
    const totalIncomplete = this.results.reduce((sum, result) => sum + result.summary.incomplete, 0);

    const reportHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unifor Website Accessibility Report</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6; 
            color: #333; 
            background: #f8f9fa;
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
        .header { 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white; 
            padding: 40px 20px; 
            text-align: center;
            border-radius: 10px;
            margin-bottom: 30px;
        }
        .header h1 { font-size: 2.5em; margin-bottom: 10px; }
        .header p { font-size: 1.2em; opacity: 0.9; }
        .summary { 
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
            gap: 20px; 
            margin-bottom: 30px; 
        }
        .summary-card { 
            background: white; 
            padding: 25px; 
            border-radius: 10px; 
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            text-align: center;
        }
        .summary-card h3 { color: #666; margin-bottom: 10px; }
        .summary-card .number { font-size: 2.5em; font-weight: bold; }
        .violations { color: #e74c3c; }
        .passes { color: #27ae60; }
        .incomplete { color: #f39c12; }
        .page-results { margin-bottom: 30px; }
        .page-card { 
            background: white; 
            margin-bottom: 20px; 
            border-radius: 10px; 
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .page-header { 
            background: #f8f9fa; 
            padding: 20px; 
            border-bottom: 1px solid #e9ecef;
        }
        .page-header h3 { margin-bottom: 5px; }
        .page-url { color: #666; font-size: 0.9em; }
        .violation { 
            padding: 15px 20px; 
            border-left: 4px solid #e74c3c; 
            background: #fdf2f2;
            margin-bottom: 10px;
        }
        .violation h4 { color: #c0392b; margin-bottom: 8px; }
        .violation p { margin-bottom: 5px; }
        .violation .impact { 
            display: inline-block; 
            padding: 2px 8px; 
            border-radius: 4px; 
            font-size: 0.8em; 
            font-weight: bold;
        }
        .impact-critical { background: #e74c3c; color: white; }
        .impact-serious { background: #e67e22; color: white; }
        .impact-moderate { background: #f39c12; color: white; }
        .impact-minor { background: #95a5a6; color: white; }
        .nodes { margin-top: 10px; }
        .node { 
            background: white; 
            padding: 10px; 
            margin: 5px 0; 
            border-radius: 5px; 
            border: 1px solid #ddd;
        }
        .node-selector { font-family: monospace; background: #f8f9fa; padding: 2px 5px; }
        .no-violations { 
            text-align: center; 
            padding: 40px; 
            color: #27ae60; 
            font-size: 1.2em;
        }
        .timestamp { 
            text-align: center; 
            color: #666; 
            margin-top: 30px; 
            font-size: 0.9em;
        }
        .screenshot { 
            max-width: 100%; 
            height: auto; 
            border-radius: 5px; 
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🔍 Accessibility Test Report</h1>
            <p>Unifor Website - WCAG 2.1 AA Compliance</p>
        </div>

        <div class="summary">
            <div class="summary-card">
                <h3>Total Violations</h3>
                <div class="number violations">${totalViolations}</div>
            </div>
            <div class="summary-card">
                <h3>Tests Passed</h3>
                <div class="number passes">${totalPasses}</div>
            </div>
            <div class="summary-card">
                <h3>Incomplete Tests</h3>
                <div class="number incomplete">${totalIncomplete}</div>
            </div>
            <div class="summary-card">
                <h3>Pages Tested</h3>
                <div class="number">${this.results.length}</div>
            </div>
        </div>

        <div class="page-results">
            ${this.results.map(result => `
                <div class="page-card">
                    <div class="page-header">
                        <h3>${result.page}</h3>
                        <div class="page-url">${result.url}</div>
                        <div style="margin-top: 10px;">
                            <span class="impact impact-${result.summary.violations === 0 ? 'minor' : 'serious'}">
                                ${result.summary.violations === 0 ? 'PASS' : 'FAIL'}
                            </span>
                            <span style="margin-left: 10px;">
                                ${result.summary.violations} violations, ${result.summary.passes} passed
                            </span>
                        </div>
                    </div>
                    <div style="padding: 20px;">
                        ${result.error ? `
                            <div style="color: #e74c3c; padding: 15px; background: #fdf2f2; border-radius: 5px;">
                                <strong>Error:</strong> ${result.error}
                            </div>
                        ` : result.summary.violations === 0 ? `
                            <div class="no-violations">
                                ✅ No accessibility violations found!
                            </div>
                        ` : result.violations.map(violation => `
                            <div class="violation">
                                <h4>${violation.description}</h4>
                                <p><strong>Impact:</strong> 
                                    <span class="impact impact-${violation.impact}">${violation.impact}</span>
                                </p>
                                <p><strong>Help:</strong> ${violation.help}</p>
                                <p><strong>Help URL:</strong> <a href="${violation.helpUrl}" target="_blank">${violation.helpUrl}</a></p>
                                <div class="nodes">
                                    ${violation.nodes.map(node => `
                                        <div class="node">
                                            <div class="node-selector">${node.target.join(', ')}</div>
                                            <div style="margin-top: 5px;">${node.failureSummary}</div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                        
                        ${result.screenshot ? `
                            <div style="margin-top: 20px;">
                                <h4>Screenshot:</h4>
                                <img src="${path.basename(result.screenshot)}" alt="Screenshot of ${result.page}" class="screenshot">
                            </div>
                        ` : ''}
                    </div>
                </div>
            `).join('')}
        </div>

        <div class="timestamp">
            Report generated on ${moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
    </div>
</body>
</html>`;

    const reportPath = path.join(this.config.outputDir, 'accessibility-report.html');
    await fs.writeFile(reportPath, reportHtml);
    
    console.log(`📄 Report generated: ${reportPath}`);
  }

  async saveResults() {
    const resultsPath = path.join(this.config.outputDir, 'accessibility-results.json');
    await fs.writeJson(resultsPath, {
      timestamp: this.startTime.format(),
      config: this.config,
      results: this.results,
      summary: {
        totalPages: this.results.length,
        totalViolations: this.results.reduce((sum, result) => sum + result.summary.violations, 0),
        totalPasses: this.results.reduce((sum, result) => sum + result.summary.passes, 0),
        totalIncomplete: this.results.reduce((sum, result) => sum + result.summary.incomplete, 0),
        pagesWithViolations: this.results.filter(result => result.summary.violations > 0).length
      }
    }, { spaces: 2 });

    console.log(`💾 Results saved: ${resultsPath}`);
  }

  async cleanup() {
    if (this.browser) {
      await this.browser.close();
      console.log('🧹 Browser closed');
    }
  }

  async run() {
    try {
      await this.initialize();
      await this.runTests();
      await this.generateReport();
      await this.saveResults();
      
      const totalViolations = this.results.reduce((sum, result) => sum + result.summary.violations, 0);
      const pagesWithViolations = this.results.filter(result => result.summary.violations > 0).length;
      
      console.log('\n📈 Final Summary:');
      console.log(`   Pages tested: ${this.results.length}`);
      console.log(`   Total violations: ${totalViolations}`);
      console.log(`   Pages with violations: ${pagesWithViolations}`);
      console.log(`   Compliance rate: ${Math.round(((this.results.length - pagesWithViolations) / this.results.length) * 100)}%`);
      
      if (totalViolations === 0) {
        console.log('\n🎉 Congratulations! No accessibility violations found.');
      } else {
        console.log('\n⚠️  Accessibility violations detected. Please review the report.');
      }
      
    } catch (error) {
      console.error('❌ Test execution failed:', error.message);
      process.exit(1);
    } finally {
      await this.cleanup();
    }
  }
}

// Run the tests
if (require.main === module) {
  const tester = new AccessibilityTester(TEST_CONFIG);
  tester.run().catch(console.error);
}

module.exports = AccessibilityTester;
