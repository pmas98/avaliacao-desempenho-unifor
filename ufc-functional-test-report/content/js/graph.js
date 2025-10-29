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
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 812.0, "minX": 0.0, "maxY": 1614.0, "series": [{"data": [[0.0, 812.0], [0.1, 812.0], [0.2, 812.0], [0.3, 812.0], [0.4, 812.0], [0.5, 812.0], [0.6, 812.0], [0.7, 812.0], [0.8, 812.0], [0.9, 812.0], [1.0, 852.0], [1.1, 852.0], [1.2, 852.0], [1.3, 852.0], [1.4, 852.0], [1.5, 852.0], [1.6, 852.0], [1.7, 852.0], [1.8, 852.0], [1.9, 852.0], [2.0, 867.0], [2.1, 867.0], [2.2, 867.0], [2.3, 867.0], [2.4, 867.0], [2.5, 867.0], [2.6, 867.0], [2.7, 867.0], [2.8, 867.0], [2.9, 867.0], [3.0, 874.0], [3.1, 874.0], [3.2, 874.0], [3.3, 874.0], [3.4, 874.0], [3.5, 874.0], [3.6, 874.0], [3.7, 874.0], [3.8, 874.0], [3.9, 874.0], [4.0, 879.0], [4.1, 879.0], [4.2, 879.0], [4.3, 879.0], [4.4, 879.0], [4.5, 879.0], [4.6, 879.0], [4.7, 879.0], [4.8, 879.0], [4.9, 879.0], [5.0, 888.0], [5.1, 888.0], [5.2, 888.0], [5.3, 888.0], [5.4, 888.0], [5.5, 888.0], [5.6, 888.0], [5.7, 888.0], [5.8, 888.0], [5.9, 888.0], [6.0, 890.0], [6.1, 890.0], [6.2, 890.0], [6.3, 890.0], [6.4, 890.0], [6.5, 890.0], [6.6, 890.0], [6.7, 890.0], [6.8, 890.0], [6.9, 890.0], [7.0, 892.0], [7.1, 892.0], [7.2, 892.0], [7.3, 892.0], [7.4, 892.0], [7.5, 892.0], [7.6, 892.0], [7.7, 892.0], [7.8, 892.0], [7.9, 892.0], [8.0, 904.0], [8.1, 904.0], [8.2, 904.0], [8.3, 904.0], [8.4, 904.0], [8.5, 904.0], [8.6, 904.0], [8.7, 904.0], [8.8, 904.0], [8.9, 904.0], [9.0, 906.0], [9.1, 906.0], [9.2, 906.0], [9.3, 906.0], [9.4, 906.0], [9.5, 906.0], [9.6, 906.0], [9.7, 906.0], [9.8, 906.0], [9.9, 906.0], [10.0, 911.0], [10.1, 911.0], [10.2, 911.0], [10.3, 911.0], [10.4, 911.0], [10.5, 911.0], [10.6, 911.0], [10.7, 911.0], [10.8, 911.0], [10.9, 911.0], [11.0, 913.0], [11.1, 913.0], [11.2, 913.0], [11.3, 913.0], [11.4, 913.0], [11.5, 913.0], [11.6, 913.0], [11.7, 913.0], [11.8, 913.0], [11.9, 913.0], [12.0, 918.0], [12.1, 918.0], [12.2, 918.0], [12.3, 918.0], [12.4, 918.0], [12.5, 918.0], [12.6, 918.0], [12.7, 918.0], [12.8, 918.0], [12.9, 918.0], [13.0, 919.0], [13.1, 919.0], [13.2, 919.0], [13.3, 919.0], [13.4, 919.0], [13.5, 919.0], [13.6, 919.0], [13.7, 919.0], [13.8, 919.0], [13.9, 919.0], [14.0, 934.0], [14.1, 934.0], [14.2, 934.0], [14.3, 934.0], [14.4, 934.0], [14.5, 934.0], [14.6, 934.0], [14.7, 934.0], [14.8, 934.0], [14.9, 934.0], [15.0, 936.0], [15.1, 936.0], [15.2, 936.0], [15.3, 936.0], [15.4, 936.0], [15.5, 936.0], [15.6, 936.0], [15.7, 936.0], [15.8, 936.0], [15.9, 936.0], [16.0, 937.0], [16.1, 937.0], [16.2, 937.0], [16.3, 937.0], [16.4, 937.0], [16.5, 937.0], [16.6, 937.0], [16.7, 937.0], [16.8, 937.0], [16.9, 937.0], [17.0, 937.0], [17.1, 937.0], [17.2, 937.0], [17.3, 937.0], [17.4, 937.0], [17.5, 937.0], [17.6, 937.0], [17.7, 937.0], [17.8, 937.0], [17.9, 937.0], [18.0, 938.0], [18.1, 938.0], [18.2, 938.0], [18.3, 938.0], [18.4, 938.0], [18.5, 938.0], [18.6, 938.0], [18.7, 938.0], [18.8, 938.0], [18.9, 938.0], [19.0, 940.0], [19.1, 940.0], [19.2, 940.0], [19.3, 940.0], [19.4, 940.0], [19.5, 940.0], [19.6, 940.0], [19.7, 940.0], [19.8, 940.0], [19.9, 940.0], [20.0, 942.0], [20.1, 942.0], [20.2, 942.0], [20.3, 942.0], [20.4, 942.0], [20.5, 942.0], [20.6, 942.0], [20.7, 942.0], [20.8, 942.0], [20.9, 942.0], [21.0, 944.0], [21.1, 944.0], [21.2, 944.0], [21.3, 944.0], [21.4, 944.0], [21.5, 944.0], [21.6, 944.0], [21.7, 944.0], [21.8, 944.0], [21.9, 944.0], [22.0, 944.0], [22.1, 944.0], [22.2, 944.0], [22.3, 944.0], [22.4, 944.0], [22.5, 944.0], [22.6, 944.0], [22.7, 944.0], [22.8, 944.0], [22.9, 944.0], [23.0, 949.0], [23.1, 949.0], [23.2, 949.0], [23.3, 949.0], [23.4, 949.0], [23.5, 949.0], [23.6, 949.0], [23.7, 949.0], [23.8, 949.0], [23.9, 949.0], [24.0, 949.0], [24.1, 949.0], [24.2, 949.0], [24.3, 949.0], [24.4, 949.0], [24.5, 949.0], [24.6, 949.0], [24.7, 949.0], [24.8, 949.0], [24.9, 949.0], [25.0, 951.0], [25.1, 951.0], [25.2, 951.0], [25.3, 951.0], [25.4, 951.0], [25.5, 951.0], [25.6, 951.0], [25.7, 951.0], [25.8, 951.0], [25.9, 951.0], [26.0, 953.0], [26.1, 953.0], [26.2, 953.0], [26.3, 953.0], [26.4, 953.0], [26.5, 953.0], [26.6, 953.0], [26.7, 953.0], [26.8, 953.0], [26.9, 953.0], [27.0, 957.0], [27.1, 957.0], [27.2, 957.0], [27.3, 957.0], [27.4, 957.0], [27.5, 957.0], [27.6, 957.0], [27.7, 957.0], [27.8, 957.0], [27.9, 957.0], [28.0, 958.0], [28.1, 958.0], [28.2, 958.0], [28.3, 958.0], [28.4, 958.0], [28.5, 958.0], [28.6, 958.0], [28.7, 958.0], [28.8, 958.0], [28.9, 958.0], [29.0, 958.0], [29.1, 958.0], [29.2, 958.0], [29.3, 958.0], [29.4, 958.0], [29.5, 958.0], [29.6, 958.0], [29.7, 958.0], [29.8, 958.0], [29.9, 958.0], [30.0, 962.0], [30.1, 962.0], [30.2, 962.0], [30.3, 962.0], [30.4, 962.0], [30.5, 962.0], [30.6, 962.0], [30.7, 962.0], [30.8, 962.0], [30.9, 962.0], [31.0, 964.0], [31.1, 964.0], [31.2, 964.0], [31.3, 964.0], [31.4, 964.0], [31.5, 964.0], [31.6, 964.0], [31.7, 964.0], [31.8, 964.0], [31.9, 964.0], [32.0, 967.0], [32.1, 967.0], [32.2, 967.0], [32.3, 967.0], [32.4, 967.0], [32.5, 967.0], [32.6, 967.0], [32.7, 967.0], [32.8, 967.0], [32.9, 967.0], [33.0, 971.0], [33.1, 971.0], [33.2, 971.0], [33.3, 971.0], [33.4, 971.0], [33.5, 971.0], [33.6, 971.0], [33.7, 971.0], [33.8, 971.0], [33.9, 971.0], [34.0, 979.0], [34.1, 979.0], [34.2, 979.0], [34.3, 979.0], [34.4, 979.0], [34.5, 979.0], [34.6, 979.0], [34.7, 979.0], [34.8, 979.0], [34.9, 979.0], [35.0, 980.0], [35.1, 980.0], [35.2, 980.0], [35.3, 980.0], [35.4, 980.0], [35.5, 980.0], [35.6, 980.0], [35.7, 980.0], [35.8, 980.0], [35.9, 980.0], [36.0, 983.0], [36.1, 983.0], [36.2, 983.0], [36.3, 983.0], [36.4, 983.0], [36.5, 983.0], [36.6, 983.0], [36.7, 983.0], [36.8, 983.0], [36.9, 983.0], [37.0, 984.0], [37.1, 984.0], [37.2, 984.0], [37.3, 984.0], [37.4, 984.0], [37.5, 984.0], [37.6, 984.0], [37.7, 984.0], [37.8, 984.0], [37.9, 984.0], [38.0, 990.0], [38.1, 990.0], [38.2, 990.0], [38.3, 990.0], [38.4, 990.0], [38.5, 990.0], [38.6, 990.0], [38.7, 990.0], [38.8, 990.0], [38.9, 990.0], [39.0, 992.0], [39.1, 992.0], [39.2, 992.0], [39.3, 992.0], [39.4, 992.0], [39.5, 992.0], [39.6, 992.0], [39.7, 992.0], [39.8, 992.0], [39.9, 992.0], [40.0, 998.0], [40.1, 998.0], [40.2, 998.0], [40.3, 998.0], [40.4, 998.0], [40.5, 998.0], [40.6, 998.0], [40.7, 998.0], [40.8, 998.0], [40.9, 998.0], [41.0, 1000.0], [41.1, 1000.0], [41.2, 1000.0], [41.3, 1000.0], [41.4, 1000.0], [41.5, 1000.0], [41.6, 1000.0], [41.7, 1000.0], [41.8, 1000.0], [41.9, 1000.0], [42.0, 1001.0], [42.1, 1001.0], [42.2, 1001.0], [42.3, 1001.0], [42.4, 1001.0], [42.5, 1001.0], [42.6, 1001.0], [42.7, 1001.0], [42.8, 1001.0], [42.9, 1001.0], [43.0, 1001.0], [43.1, 1001.0], [43.2, 1001.0], [43.3, 1001.0], [43.4, 1001.0], [43.5, 1001.0], [43.6, 1001.0], [43.7, 1001.0], [43.8, 1001.0], [43.9, 1001.0], [44.0, 1008.0], [44.1, 1008.0], [44.2, 1008.0], [44.3, 1008.0], [44.4, 1008.0], [44.5, 1008.0], [44.6, 1008.0], [44.7, 1008.0], [44.8, 1008.0], [44.9, 1008.0], [45.0, 1008.0], [45.1, 1008.0], [45.2, 1008.0], [45.3, 1008.0], [45.4, 1008.0], [45.5, 1008.0], [45.6, 1008.0], [45.7, 1008.0], [45.8, 1008.0], [45.9, 1008.0], [46.0, 1011.0], [46.1, 1011.0], [46.2, 1011.0], [46.3, 1011.0], [46.4, 1011.0], [46.5, 1011.0], [46.6, 1011.0], [46.7, 1011.0], [46.8, 1011.0], [46.9, 1011.0], [47.0, 1013.0], [47.1, 1013.0], [47.2, 1013.0], [47.3, 1013.0], [47.4, 1013.0], [47.5, 1013.0], [47.6, 1013.0], [47.7, 1013.0], [47.8, 1013.0], [47.9, 1013.0], [48.0, 1020.0], [48.1, 1020.0], [48.2, 1020.0], [48.3, 1020.0], [48.4, 1020.0], [48.5, 1020.0], [48.6, 1020.0], [48.7, 1020.0], [48.8, 1020.0], [48.9, 1020.0], [49.0, 1026.0], [49.1, 1026.0], [49.2, 1026.0], [49.3, 1026.0], [49.4, 1026.0], [49.5, 1026.0], [49.6, 1026.0], [49.7, 1026.0], [49.8, 1026.0], [49.9, 1026.0], [50.0, 1026.0], [50.1, 1026.0], [50.2, 1026.0], [50.3, 1026.0], [50.4, 1026.0], [50.5, 1026.0], [50.6, 1026.0], [50.7, 1026.0], [50.8, 1026.0], [50.9, 1026.0], [51.0, 1027.0], [51.1, 1027.0], [51.2, 1027.0], [51.3, 1027.0], [51.4, 1027.0], [51.5, 1027.0], [51.6, 1027.0], [51.7, 1027.0], [51.8, 1027.0], [51.9, 1027.0], [52.0, 1032.0], [52.1, 1032.0], [52.2, 1032.0], [52.3, 1032.0], [52.4, 1032.0], [52.5, 1032.0], [52.6, 1032.0], [52.7, 1032.0], [52.8, 1032.0], [52.9, 1032.0], [53.0, 1037.0], [53.1, 1037.0], [53.2, 1037.0], [53.3, 1037.0], [53.4, 1037.0], [53.5, 1037.0], [53.6, 1037.0], [53.7, 1037.0], [53.8, 1037.0], [53.9, 1037.0], [54.0, 1052.0], [54.1, 1052.0], [54.2, 1052.0], [54.3, 1052.0], [54.4, 1052.0], [54.5, 1052.0], [54.6, 1052.0], [54.7, 1052.0], [54.8, 1052.0], [54.9, 1052.0], [55.0, 1053.0], [55.1, 1053.0], [55.2, 1053.0], [55.3, 1053.0], [55.4, 1053.0], [55.5, 1053.0], [55.6, 1053.0], [55.7, 1053.0], [55.8, 1053.0], [55.9, 1053.0], [56.0, 1060.0], [56.1, 1060.0], [56.2, 1060.0], [56.3, 1060.0], [56.4, 1060.0], [56.5, 1060.0], [56.6, 1060.0], [56.7, 1060.0], [56.8, 1060.0], [56.9, 1060.0], [57.0, 1066.0], [57.1, 1066.0], [57.2, 1066.0], [57.3, 1066.0], [57.4, 1066.0], [57.5, 1066.0], [57.6, 1066.0], [57.7, 1066.0], [57.8, 1066.0], [57.9, 1066.0], [58.0, 1067.0], [58.1, 1067.0], [58.2, 1067.0], [58.3, 1067.0], [58.4, 1067.0], [58.5, 1067.0], [58.6, 1067.0], [58.7, 1067.0], [58.8, 1067.0], [58.9, 1067.0], [59.0, 1073.0], [59.1, 1073.0], [59.2, 1073.0], [59.3, 1073.0], [59.4, 1073.0], [59.5, 1073.0], [59.6, 1073.0], [59.7, 1073.0], [59.8, 1073.0], [59.9, 1073.0], [60.0, 1073.0], [60.1, 1073.0], [60.2, 1073.0], [60.3, 1073.0], [60.4, 1073.0], [60.5, 1073.0], [60.6, 1073.0], [60.7, 1073.0], [60.8, 1073.0], [60.9, 1073.0], [61.0, 1074.0], [61.1, 1074.0], [61.2, 1074.0], [61.3, 1074.0], [61.4, 1074.0], [61.5, 1074.0], [61.6, 1074.0], [61.7, 1074.0], [61.8, 1074.0], [61.9, 1074.0], [62.0, 1075.0], [62.1, 1075.0], [62.2, 1075.0], [62.3, 1075.0], [62.4, 1075.0], [62.5, 1075.0], [62.6, 1075.0], [62.7, 1075.0], [62.8, 1075.0], [62.9, 1075.0], [63.0, 1076.0], [63.1, 1076.0], [63.2, 1076.0], [63.3, 1076.0], [63.4, 1076.0], [63.5, 1076.0], [63.6, 1076.0], [63.7, 1076.0], [63.8, 1076.0], [63.9, 1076.0], [64.0, 1079.0], [64.1, 1079.0], [64.2, 1079.0], [64.3, 1079.0], [64.4, 1079.0], [64.5, 1079.0], [64.6, 1079.0], [64.7, 1079.0], [64.8, 1079.0], [64.9, 1079.0], [65.0, 1086.0], [65.1, 1086.0], [65.2, 1086.0], [65.3, 1086.0], [65.4, 1086.0], [65.5, 1086.0], [65.6, 1086.0], [65.7, 1086.0], [65.8, 1086.0], [65.9, 1086.0], [66.0, 1098.0], [66.1, 1098.0], [66.2, 1098.0], [66.3, 1098.0], [66.4, 1098.0], [66.5, 1098.0], [66.6, 1098.0], [66.7, 1098.0], [66.8, 1098.0], [66.9, 1098.0], [67.0, 1100.0], [67.1, 1100.0], [67.2, 1100.0], [67.3, 1100.0], [67.4, 1100.0], [67.5, 1100.0], [67.6, 1100.0], [67.7, 1100.0], [67.8, 1100.0], [67.9, 1100.0], [68.0, 1101.0], [68.1, 1101.0], [68.2, 1101.0], [68.3, 1101.0], [68.4, 1101.0], [68.5, 1101.0], [68.6, 1101.0], [68.7, 1101.0], [68.8, 1101.0], [68.9, 1101.0], [69.0, 1116.0], [69.1, 1116.0], [69.2, 1116.0], [69.3, 1116.0], [69.4, 1116.0], [69.5, 1116.0], [69.6, 1116.0], [69.7, 1116.0], [69.8, 1116.0], [69.9, 1116.0], [70.0, 1118.0], [70.1, 1118.0], [70.2, 1118.0], [70.3, 1118.0], [70.4, 1118.0], [70.5, 1118.0], [70.6, 1118.0], [70.7, 1118.0], [70.8, 1118.0], [70.9, 1118.0], [71.0, 1131.0], [71.1, 1131.0], [71.2, 1131.0], [71.3, 1131.0], [71.4, 1131.0], [71.5, 1131.0], [71.6, 1131.0], [71.7, 1131.0], [71.8, 1131.0], [71.9, 1131.0], [72.0, 1135.0], [72.1, 1135.0], [72.2, 1135.0], [72.3, 1135.0], [72.4, 1135.0], [72.5, 1135.0], [72.6, 1135.0], [72.7, 1135.0], [72.8, 1135.0], [72.9, 1135.0], [73.0, 1141.0], [73.1, 1141.0], [73.2, 1141.0], [73.3, 1141.0], [73.4, 1141.0], [73.5, 1141.0], [73.6, 1141.0], [73.7, 1141.0], [73.8, 1141.0], [73.9, 1141.0], [74.0, 1146.0], [74.1, 1146.0], [74.2, 1146.0], [74.3, 1146.0], [74.4, 1146.0], [74.5, 1146.0], [74.6, 1146.0], [74.7, 1146.0], [74.8, 1146.0], [74.9, 1146.0], [75.0, 1150.0], [75.1, 1150.0], [75.2, 1150.0], [75.3, 1150.0], [75.4, 1150.0], [75.5, 1150.0], [75.6, 1150.0], [75.7, 1150.0], [75.8, 1150.0], [75.9, 1150.0], [76.0, 1152.0], [76.1, 1152.0], [76.2, 1152.0], [76.3, 1152.0], [76.4, 1152.0], [76.5, 1152.0], [76.6, 1152.0], [76.7, 1152.0], [76.8, 1152.0], [76.9, 1152.0], [77.0, 1176.0], [77.1, 1176.0], [77.2, 1176.0], [77.3, 1176.0], [77.4, 1176.0], [77.5, 1176.0], [77.6, 1176.0], [77.7, 1176.0], [77.8, 1176.0], [77.9, 1176.0], [78.0, 1184.0], [78.1, 1184.0], [78.2, 1184.0], [78.3, 1184.0], [78.4, 1184.0], [78.5, 1184.0], [78.6, 1184.0], [78.7, 1184.0], [78.8, 1184.0], [78.9, 1184.0], [79.0, 1191.0], [79.1, 1191.0], [79.2, 1191.0], [79.3, 1191.0], [79.4, 1191.0], [79.5, 1191.0], [79.6, 1191.0], [79.7, 1191.0], [79.8, 1191.0], [79.9, 1191.0], [80.0, 1208.0], [80.1, 1208.0], [80.2, 1208.0], [80.3, 1208.0], [80.4, 1208.0], [80.5, 1208.0], [80.6, 1208.0], [80.7, 1208.0], [80.8, 1208.0], [80.9, 1208.0], [81.0, 1214.0], [81.1, 1214.0], [81.2, 1214.0], [81.3, 1214.0], [81.4, 1214.0], [81.5, 1214.0], [81.6, 1214.0], [81.7, 1214.0], [81.8, 1214.0], [81.9, 1214.0], [82.0, 1241.0], [82.1, 1241.0], [82.2, 1241.0], [82.3, 1241.0], [82.4, 1241.0], [82.5, 1241.0], [82.6, 1241.0], [82.7, 1241.0], [82.8, 1241.0], [82.9, 1241.0], [83.0, 1242.0], [83.1, 1242.0], [83.2, 1242.0], [83.3, 1242.0], [83.4, 1242.0], [83.5, 1242.0], [83.6, 1242.0], [83.7, 1242.0], [83.8, 1242.0], [83.9, 1242.0], [84.0, 1243.0], [84.1, 1243.0], [84.2, 1243.0], [84.3, 1243.0], [84.4, 1243.0], [84.5, 1243.0], [84.6, 1243.0], [84.7, 1243.0], [84.8, 1243.0], [84.9, 1243.0], [85.0, 1246.0], [85.1, 1246.0], [85.2, 1246.0], [85.3, 1246.0], [85.4, 1246.0], [85.5, 1246.0], [85.6, 1246.0], [85.7, 1246.0], [85.8, 1246.0], [85.9, 1246.0], [86.0, 1281.0], [86.1, 1281.0], [86.2, 1281.0], [86.3, 1281.0], [86.4, 1281.0], [86.5, 1281.0], [86.6, 1281.0], [86.7, 1281.0], [86.8, 1281.0], [86.9, 1281.0], [87.0, 1288.0], [87.1, 1288.0], [87.2, 1288.0], [87.3, 1288.0], [87.4, 1288.0], [87.5, 1288.0], [87.6, 1288.0], [87.7, 1288.0], [87.8, 1288.0], [87.9, 1288.0], [88.0, 1328.0], [88.1, 1328.0], [88.2, 1328.0], [88.3, 1328.0], [88.4, 1328.0], [88.5, 1328.0], [88.6, 1328.0], [88.7, 1328.0], [88.8, 1328.0], [88.9, 1328.0], [89.0, 1334.0], [89.1, 1334.0], [89.2, 1334.0], [89.3, 1334.0], [89.4, 1334.0], [89.5, 1334.0], [89.6, 1334.0], [89.7, 1334.0], [89.8, 1334.0], [89.9, 1334.0], [90.0, 1363.0], [90.1, 1363.0], [90.2, 1363.0], [90.3, 1363.0], [90.4, 1363.0], [90.5, 1363.0], [90.6, 1363.0], [90.7, 1363.0], [90.8, 1363.0], [90.9, 1363.0], [91.0, 1367.0], [91.1, 1367.0], [91.2, 1367.0], [91.3, 1367.0], [91.4, 1367.0], [91.5, 1367.0], [91.6, 1367.0], [91.7, 1367.0], [91.8, 1367.0], [91.9, 1367.0], [92.0, 1368.0], [92.1, 1368.0], [92.2, 1368.0], [92.3, 1368.0], [92.4, 1368.0], [92.5, 1368.0], [92.6, 1368.0], [92.7, 1368.0], [92.8, 1368.0], [92.9, 1368.0], [93.0, 1376.0], [93.1, 1376.0], [93.2, 1376.0], [93.3, 1376.0], [93.4, 1376.0], [93.5, 1376.0], [93.6, 1376.0], [93.7, 1376.0], [93.8, 1376.0], [93.9, 1376.0], [94.0, 1422.0], [94.1, 1422.0], [94.2, 1422.0], [94.3, 1422.0], [94.4, 1422.0], [94.5, 1422.0], [94.6, 1422.0], [94.7, 1422.0], [94.8, 1422.0], [94.9, 1422.0], [95.0, 1452.0], [95.1, 1452.0], [95.2, 1452.0], [95.3, 1452.0], [95.4, 1452.0], [95.5, 1452.0], [95.6, 1452.0], [95.7, 1452.0], [95.8, 1452.0], [95.9, 1452.0], [96.0, 1469.0], [96.1, 1469.0], [96.2, 1469.0], [96.3, 1469.0], [96.4, 1469.0], [96.5, 1469.0], [96.6, 1469.0], [96.7, 1469.0], [96.8, 1469.0], [96.9, 1469.0], [97.0, 1521.0], [97.1, 1521.0], [97.2, 1521.0], [97.3, 1521.0], [97.4, 1521.0], [97.5, 1521.0], [97.6, 1521.0], [97.7, 1521.0], [97.8, 1521.0], [97.9, 1521.0], [98.0, 1532.0], [98.1, 1532.0], [98.2, 1532.0], [98.3, 1532.0], [98.4, 1532.0], [98.5, 1532.0], [98.6, 1532.0], [98.7, 1532.0], [98.8, 1532.0], [98.9, 1532.0], [99.0, 1614.0], [99.1, 1614.0], [99.2, 1614.0], [99.3, 1614.0], [99.4, 1614.0], [99.5, 1614.0], [99.6, 1614.0], [99.7, 1614.0], [99.8, 1614.0], [99.9, 1614.0]], "isOverall": false, "label": "Search Request - UFC", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 800.0, "maxY": 66.0, "series": [{"data": [[1100.0, 26.0], [1200.0, 16.0], [1300.0, 12.0], [1400.0, 6.0], [1500.0, 4.0], [800.0, 16.0], [1600.0, 2.0], [900.0, 66.0], [1000.0, 52.0]], "isOverall": false, "label": "Search Request - UFC", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1600.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 6.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 194.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 194.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 6.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 8.820000000000002, "minX": 1.76174496E12, "maxY": 8.820000000000002, "series": [{"data": [[1.76174496E12, 8.820000000000002]], "isOverall": false, "label": "Search Functionality Test - UFC", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76174496E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 879.0, "minX": 1.0, "maxY": 1206.8333333333333, "series": [{"data": [[4.0, 1011.5], [8.0, 1206.8333333333333], [2.0, 879.0], [1.0, 1032.0], [9.0, 1130.375], [5.0, 1046.75], [10.0, 1084.7142857142858], [11.0, 1065.972972972973], [3.0, 1074.3333333333335], [6.0, 1056.75], [7.0, 1012.7142857142857]], "isOverall": false, "label": "Search Request - UFC", "isController": false}, {"data": [[8.820000000000002, 1074.1399999999994]], "isOverall": false, "label": "Search Request - UFC-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 11.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1043.3333333333333, "minX": 1.76174496E12, "maxY": 185189.5, "series": [{"data": [[1.76174496E12, 185189.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76174496E12, 1043.3333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76174496E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1074.1399999999994, "minX": 1.76174496E12, "maxY": 1074.1399999999994, "series": [{"data": [[1.76174496E12, 1074.1399999999994]], "isOverall": false, "label": "Search Request - UFC", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76174496E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 867.1400000000001, "minX": 1.76174496E12, "maxY": 867.1400000000001, "series": [{"data": [[1.76174496E12, 867.1400000000001]], "isOverall": false, "label": "Search Request - UFC", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76174496E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 65.25000000000001, "minX": 1.76174496E12, "maxY": 65.25000000000001, "series": [{"data": [[1.76174496E12, 65.25000000000001]], "isOverall": false, "label": "Search Request - UFC", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76174496E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 812.0, "minX": 1.76174496E12, "maxY": 1614.0, "series": [{"data": [[1.76174496E12, 1614.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76174496E12, 1360.1000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76174496E12, 1613.1800000000007]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76174496E12, 1450.4999999999995]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.76174496E12, 812.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76174496E12, 1026.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76174496E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 954.0, "minX": 2.0, "maxY": 1074.0, "series": [{"data": [[2.0, 1016.5], [4.0, 954.0], [8.0, 1039.0], [10.0, 1010.5], [6.0, 1074.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 10.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 749.5, "minX": 2.0, "maxY": 876.0, "series": [{"data": [[2.0, 822.5], [4.0, 749.5], [8.0, 844.0], [10.0, 794.5], [6.0, 876.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 10.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.76174496E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.76174496E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76174496E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.76174496E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.76174496E12, 3.3333333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76174496E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.76174496E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.76174496E12, 3.3333333333333335]], "isOverall": false, "label": "Search Request - UFC-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76174496E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.76174496E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.76174496E12, 3.3333333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76174496E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

