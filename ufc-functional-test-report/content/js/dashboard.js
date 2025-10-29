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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 100, 100, 100.0, 23684.120000000006, 8267, 29810, 27975.0, 29085.4, 29464.8, 29807.89, 0.6167775838354931, 21.349430810661616, 0.20719871956973596], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["Search Request - UFC", 100, 100, 100.0, 23684.120000000006, 8267, 29810, 27975.0, 29085.4, 29464.8, 29807.89, 0.6167775838354931, 21.349430810661616, 0.20719871956973596], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["The operation lasted too long: It took 29,548 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,415 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 27,898 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,362 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 17,018 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,869 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,489 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 2, 2.0, 2.0], "isController": false}, {"data": ["The operation lasted too long: It took 12,295 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 29,599 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 10,411 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,981 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 18,731 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 18,956 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 19,604 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,789 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 20,769 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,042 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 29,810 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 23,378 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,321 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 18,870 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,782 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,819 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,131 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,881 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 29,347 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,513 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 27,061 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,427 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,899 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 29,097 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 15,275 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 29,503 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 8,743 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 19,884 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 25,544 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,396 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 29,229 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 8,308 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 13,781 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,249 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 10,903 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 12,354 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 14,012 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,530 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,247 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 8,912 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,820 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 8,408 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,810 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 27,664 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 2, 2.0, 2.0], "isController": false}, {"data": ["The operation lasted too long: It took 21,701 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,743 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 29,257 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,248 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,370 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,625 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,349 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 26,658 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,693 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,232 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 17,132 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 29,115 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 8,267 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 19,630 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 15,686 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 27,021 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,446 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,966 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 14,992 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 16,743 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 20,167 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,189 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 15,256 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 9,045 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 22,587 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,891 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,722 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 26,252 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,687 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 21,157 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 19,088 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,314 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 8,788 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,384 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 26,601 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,764 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,749 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,648 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,626 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 24,991 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 16,866 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 8,968 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,246 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,112 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 27,908 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 28,224 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 29,471 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 1.0, 1.0], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 100, 100, "The operation lasted too long: It took 28,489 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 2, "The operation lasted too long: It took 27,664 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 2, "The operation lasted too long: It took 29,548 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, "The operation lasted too long: It took 25,415 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, "The operation lasted too long: It took 27,898 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["Search Request - UFC", 100, 100, "The operation lasted too long: It took 28,489 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 2, "The operation lasted too long: It took 27,664 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 2, "The operation lasted too long: It took 29,548 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, "The operation lasted too long: It took 25,415 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, "The operation lasted too long: It took 27,898 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
