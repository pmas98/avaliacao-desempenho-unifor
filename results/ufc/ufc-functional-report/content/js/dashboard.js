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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 100, 100, 100.0, 20846.660000000003, 8298, 26464, 24238.5, 25991.5, 26118.0, 26462.079999999998, 0.6772865192891201, 23.444061213155614, 0.2275259400736888], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["Search Request - UFC", 100, 100, 100.0, 20846.660000000003, 8298, 26464, 24238.5, 25991.5, 26118.0, 26462.079999999998, 0.6772865192891201, 23.444061213155614, 0.2275259400736888], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["The operation lasted too long: It took 20,860 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,463 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,945 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,201 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 22,116 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,353 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 16,824 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 16,862 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,346 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 18,570 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 20,191 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 12,060 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,312 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,794 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 10,321 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 18,707 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,992 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,230 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,120 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,978 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,184 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 23,309 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,214 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 14,177 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,065 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,291 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 9,252 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,465 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,847 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 2, 2.0, 2.0], "isController": false}, {"data": ["The operation lasted too long: It took 26,099 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 26,464 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 13,909 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,987 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,448 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,208 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 15,646 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,887 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,245 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 22,858 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 15,367 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 19,032 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 23,453 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,663 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,931 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,224 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 21,714 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 15,097 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 8,580 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 15,391 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 9,316 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 26,059 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 8,519 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 19,967 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,149 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 10,996 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,646 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,451 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,283 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 26,237 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,387 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,403 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 26,119 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 17,845 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,508 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,037 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 26,094 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 17,902 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 26,203 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 8,715 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,141 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 12,684 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 26,272 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,040 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,945 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 9,844 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 11,499 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,253 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 23,735 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 22,885 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,731 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,282 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 9,137 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 9,093 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 8,981 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,782 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,914 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,272 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 16,717 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,424 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 14,268 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 12,979 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 23,353 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,997 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 13,504 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 8,298 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 16,745 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,382 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 21,280 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 17,294 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 100, 100, "The operation lasted too long: It took 25,847 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 2, "The operation lasted too long: It took 20,860 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, "The operation lasted too long: It took 25,463 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, "The operation lasted too long: It took 24,945 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, "The operation lasted too long: It took 24,201 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["Search Request - UFC", 100, 100, "The operation lasted too long: It took 25,847 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 2, "The operation lasted too long: It took 20,860 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, "The operation lasted too long: It took 25,463 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, "The operation lasted too long: It took 24,945 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, "The operation lasted too long: It took 24,201 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
