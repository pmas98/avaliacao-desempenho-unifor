#!/usr/bin/env node

/**
 * Script to regenerate HTML accessibility report from JSON results
 */

const fs = require('fs-extra');
const path = require('path');
const moment = require('moment');

const JSON_FILE = path.join(__dirname, 'ufc-accessibility-results', 'accessibility-results.json');
const OUTPUT_FILE = path.join(__dirname, 'ufc-accessibility-results', 'accessibility-report.html');

async function generateReportFromJSON() {
  try {
    console.log('📖 Reading JSON results file...');
    const jsonData = await fs.readJson(JSON_FILE);
    
    if (!jsonData.results || !Array.isArray(jsonData.results)) {
      throw new Error('Invalid JSON structure: results array not found');
    }

    const results = jsonData.results;
    const totalViolations = results.reduce((sum, result) => sum + (result.summary?.violations || 0), 0);
    const totalPasses = results.reduce((sum, result) => sum + (result.summary?.passes || 0), 0);
    const totalIncomplete = results.reduce((sum, result) => sum + (result.summary?.incomplete || 0), 0);

    console.log(`📊 Found ${results.length} pages with ${totalViolations} total violations`);

    const reportHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UFC Website Accessibility Report</title>
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
            <p>UFC Website - WCAG 2.1 AA Compliance</p>
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
                <div class="number">${results.length}</div>
            </div>
        </div>

        <div class="page-results">
            ${results.map(result => {
              const violations = result.violations || [];
              const violationCount = result.summary?.violations || violations.length || 0;
              const passCount = result.summary?.passes || 0;
              const screenshotBasename = result.screenshot ? path.basename(result.screenshot) : null;
              
              return `
                <div class="page-card">
                    <div class="page-header">
                        <h3>${result.page || 'Unknown Page'}</h3>
                        <div class="page-url">${result.url || ''}</div>
                        <div style="margin-top: 10px;">
                            <span class="impact impact-${violationCount === 0 ? 'minor' : 'serious'}">
                                ${violationCount === 0 ? 'PASS' : 'FAIL'}
                            </span>
                            <span style="margin-left: 10px;">
                                ${violationCount} violations, ${passCount} passed
                            </span>
                        </div>
                    </div>
                    <div style="padding: 20px;">
                        ${result.error ? `
                            <div style="color: #e74c3c; padding: 15px; background: #fdf2f2; border-radius: 5px;">
                                <strong>Error:</strong> ${result.error}
                            </div>
                        ` : violationCount === 0 ? `
                            <div class="no-violations">
                                ✅ No accessibility violations found!
                            </div>
                        ` : violations.length > 0 ? violations.map(violation => {
                          // Escape HTML in strings to prevent injection
                          const escapeHtml = (str) => {
                            if (!str) return '';
                            return String(str)
                              .replace(/&/g, '&amp;')
                              .replace(/</g, '&lt;')
                              .replace(/>/g, '&gt;')
                              .replace(/"/g, '&quot;')
                              .replace(/'/g, '&#039;');
                          };
                          
                          const description = escapeHtml(violation.description || 'Unknown violation');
                          const help = escapeHtml(violation.help || '');
                          const helpUrl = escapeHtml(violation.helpUrl || '#');
                          const impact = escapeHtml(violation.impact || 'unknown');
                          const nodes = violation.nodes || [];
                          
                          return `
                            <div class="violation">
                                <h4>${description}</h4>
                                <p><strong>Impact:</strong> 
                                    <span class="impact impact-${impact}">${impact}</span>
                                </p>
                                <p><strong>Help:</strong> ${help}</p>
                                <p><strong>Help URL:</strong> <a href="${helpUrl}" target="_blank">${helpUrl}</a></p>
                                ${nodes.length > 0 ? `
                                <div class="nodes">
                                    ${nodes.map(node => {
                                      const target = (node.target || []).join(', ');
                                      const failureSummary = escapeHtml(node.failureSummary || '');
                                      return `
                                        <div class="node">
                                            <div class="node-selector">${escapeHtml(target)}</div>
                                            ${failureSummary ? `<div style="margin-top: 5px;">${failureSummary.replace(/\n/g, '<br>')}</div>` : ''}
                                        </div>
                                      `;
                                    }).join('')}
                                </div>
                                ` : ''}
                            </div>
                          `;
                        }).join('') : `
                            <div style="color: #e74c3c; padding: 15px; background: #fdf2f2; border-radius: 5px;">
                                ⚠️ Violations count indicates ${violationCount} issue(s), but violation details are missing from the data.
                            </div>
                        `}
                        
                        ${screenshotBasename ? `
                            <div style="margin-top: 20px;">
                                <h4>Screenshot:</h4>
                                <img src="${screenshotBasename}" alt="Screenshot of ${result.page || 'page'}" class="screenshot">
                            </div>
                        ` : ''}
                    </div>
                </div>
              `;
            }).join('')}
        </div>

        <div class="timestamp">
            Report generated on ${moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
    </div>
</body>
</html>`;

    await fs.writeFile(OUTPUT_FILE, reportHtml);
    console.log(`✅ Report generated successfully: ${OUTPUT_FILE}`);
    console.log(`   - ${results.length} pages processed`);
    console.log(`   - ${totalViolations} total violations`);
    console.log(`   - ${totalPasses} total passes`);
    
  } catch (error) {
    console.error('❌ Error generating report:', error.message);
    if (error.code === 'ENOENT') {
      console.error(`   Make sure the file exists: ${JSON_FILE}`);
    }
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  generateReportFromJSON();
}

module.exports = generateReportFromJSON;
