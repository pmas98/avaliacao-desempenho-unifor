/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 0.0, "KoPercent": 100.0};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.0, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.0, 500, 1500, "Search Request - UFC"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 100, 100, 100.0, 20605.06, 7681, 25851, 23810.5, 25001.0, 25504.399999999998, 25850.76, 0.6821794268328455, 23.611002744066745, 0.22916965120165905], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["Search Request - UFC", 100, 100, 100.0, 20605.06, 7681, 25851, 23810.5, 25001.0, 25504.399999999998, 25850.76, 0.6821794268328455, 23.611002744066745, 0.22916965120165905], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["The operation lasted too long: It took 15,967 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,242 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 23,233 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 7,916 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 18,727 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 23,977 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 23,994 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 16,747 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,077 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 13,148 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,420 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,248 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,086 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 23,179 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 7,839 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,043 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 11,798 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 21,781 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,218 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 7,728 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 23,997 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 18,580 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,006 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 15,347 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 17,466 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,265 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 14,521 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,419 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 20,508 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,969 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,171 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,439 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 17,045 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,116 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,345 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 23,897 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,446 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 8,299 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 7,709 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,665 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 21,160 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,992 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,819 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,316 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 23,688 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 23,912 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 21,209 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,586 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 22,423 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 13,676 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 23,818 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,181 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,851 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,373 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 23,800 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 9,788 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 22,677 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 23,575 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,507 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,827 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,646 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,165 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 23,803 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,226 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,274 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 7,774 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 12,552 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 23,797 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 19,991 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 19,448 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 15,195 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 15,441 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 7,854 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 23,409 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,418 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 23,659 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 23,662 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,017 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,575 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 20,049 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,480 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,002 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 11,097 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,212 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 16,936 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 7,681 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 18,206 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 13,264 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 23,935 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,025 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 23,913 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 18,574 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,455 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 10,805 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 9,113 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 23,617 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,181 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,526 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,616 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,157 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 100, 100, "The operation lasted too long: It took 15,967 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, "The operation lasted too long: It took 24,242 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, "The operation lasted too long: It took 23,233 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, "The operation lasted too long: It took 7,916 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, "The operation lasted too long: It took 18,727 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["Search Request - UFC", 100, 100, "The operation lasted too long: It took 15,967 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, "The operation lasted too long: It took 24,242 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, "The operation lasted too long: It took 23,233 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, "The operation lasted too long: It took 7,916 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, "The operation lasted too long: It took 18,727 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
