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
        data: {"result": {"minY": 708.0, "minX": 0.0, "maxY": 1621.0, "series": [{"data": [[0.0, 708.0], [0.1, 708.0], [0.2, 716.0], [0.3, 716.0], [0.4, 737.0], [0.5, 737.0], [0.6, 737.0], [0.7, 745.0], [0.8, 747.0], [0.9, 747.0], [1.0, 755.0], [1.1, 755.0], [1.2, 758.0], [1.3, 758.0], [1.4, 763.0], [1.5, 763.0], [1.6, 764.0], [1.7, 764.0], [1.8, 765.0], [1.9, 765.0], [2.0, 767.0], [2.1, 767.0], [2.2, 774.0], [2.3, 774.0], [2.4, 774.0], [2.5, 774.0], [2.6, 784.0], [2.7, 784.0], [2.8, 784.0], [2.9, 784.0], [3.0, 786.0], [3.1, 786.0], [3.2, 787.0], [3.3, 787.0], [3.4, 788.0], [3.5, 788.0], [3.6, 789.0], [3.7, 789.0], [3.8, 789.0], [3.9, 795.0], [4.0, 796.0], [4.1, 796.0], [4.2, 797.0], [4.3, 797.0], [4.4, 799.0], [4.5, 799.0], [4.6, 799.0], [4.7, 800.0], [4.8, 800.0], [4.9, 801.0], [5.0, 801.0], [5.1, 801.0], [5.2, 801.0], [5.3, 803.0], [5.4, 803.0], [5.5, 803.0], [5.6, 803.0], [5.7, 804.0], [5.8, 804.0], [5.9, 804.0], [6.0, 804.0], [6.1, 805.0], [6.2, 805.0], [6.3, 805.0], [6.4, 805.0], [6.5, 806.0], [6.6, 806.0], [6.7, 809.0], [6.8, 809.0], [6.9, 809.0], [7.0, 809.0], [7.1, 810.0], [7.2, 810.0], [7.3, 810.0], [7.4, 810.0], [7.5, 811.0], [7.6, 811.0], [7.7, 812.0], [7.8, 812.0], [7.9, 813.0], [8.0, 813.0], [8.1, 814.0], [8.2, 814.0], [8.3, 815.0], [8.4, 815.0], [8.5, 815.0], [8.6, 815.0], [8.7, 815.0], [8.8, 815.0], [8.9, 815.0], [9.0, 815.0], [9.1, 815.0], [9.2, 815.0], [9.3, 816.0], [9.4, 816.0], [9.5, 816.0], [9.6, 816.0], [9.7, 816.0], [9.8, 816.0], [9.9, 817.0], [10.0, 817.0], [10.1, 817.0], [10.2, 817.0], [10.3, 818.0], [10.4, 818.0], [10.5, 818.0], [10.6, 818.0], [10.7, 819.0], [10.8, 819.0], [10.9, 820.0], [11.0, 820.0], [11.1, 821.0], [11.2, 821.0], [11.3, 821.0], [11.4, 821.0], [11.5, 822.0], [11.6, 822.0], [11.7, 823.0], [11.8, 823.0], [11.9, 823.0], [12.0, 823.0], [12.1, 823.0], [12.2, 823.0], [12.3, 824.0], [12.4, 824.0], [12.5, 824.0], [12.6, 824.0], [12.7, 825.0], [12.8, 827.0], [12.9, 827.0], [13.0, 830.0], [13.1, 830.0], [13.2, 830.0], [13.3, 830.0], [13.4, 830.0], [13.5, 830.0], [13.6, 831.0], [13.7, 831.0], [13.8, 832.0], [13.9, 832.0], [14.0, 832.0], [14.1, 832.0], [14.2, 832.0], [14.3, 832.0], [14.4, 832.0], [14.5, 832.0], [14.6, 833.0], [14.7, 833.0], [14.8, 834.0], [14.9, 834.0], [15.0, 834.0], [15.1, 834.0], [15.2, 836.0], [15.3, 836.0], [15.4, 836.0], [15.5, 836.0], [15.6, 836.0], [15.7, 836.0], [15.8, 837.0], [15.9, 837.0], [16.0, 838.0], [16.1, 838.0], [16.2, 838.0], [16.3, 838.0], [16.4, 840.0], [16.5, 840.0], [16.6, 840.0], [16.7, 840.0], [16.8, 841.0], [16.9, 841.0], [17.0, 842.0], [17.1, 842.0], [17.2, 843.0], [17.3, 843.0], [17.4, 843.0], [17.5, 843.0], [17.6, 844.0], [17.7, 844.0], [17.8, 844.0], [17.9, 844.0], [18.0, 844.0], [18.1, 844.0], [18.2, 844.0], [18.3, 844.0], [18.4, 845.0], [18.5, 845.0], [18.6, 845.0], [18.7, 845.0], [18.8, 846.0], [18.9, 846.0], [19.0, 848.0], [19.1, 848.0], [19.2, 848.0], [19.3, 848.0], [19.4, 849.0], [19.5, 849.0], [19.6, 850.0], [19.7, 850.0], [19.8, 850.0], [19.9, 850.0], [20.0, 850.0], [20.1, 850.0], [20.2, 851.0], [20.3, 851.0], [20.4, 851.0], [20.5, 851.0], [20.6, 853.0], [20.7, 853.0], [20.8, 853.0], [20.9, 853.0], [21.0, 854.0], [21.1, 854.0], [21.2, 854.0], [21.3, 854.0], [21.4, 854.0], [21.5, 854.0], [21.6, 856.0], [21.7, 856.0], [21.8, 856.0], [21.9, 856.0], [22.0, 856.0], [22.1, 856.0], [22.2, 856.0], [22.3, 856.0], [22.4, 857.0], [22.5, 857.0], [22.6, 857.0], [22.7, 857.0], [22.8, 857.0], [22.9, 857.0], [23.0, 858.0], [23.1, 858.0], [23.2, 858.0], [23.3, 858.0], [23.4, 858.0], [23.5, 858.0], [23.6, 858.0], [23.7, 858.0], [23.8, 860.0], [23.9, 860.0], [24.0, 860.0], [24.1, 860.0], [24.2, 861.0], [24.3, 861.0], [24.4, 862.0], [24.5, 862.0], [24.6, 864.0], [24.7, 864.0], [24.8, 864.0], [24.9, 864.0], [25.0, 864.0], [25.1, 864.0], [25.2, 865.0], [25.3, 865.0], [25.4, 865.0], [25.5, 865.0], [25.6, 866.0], [25.7, 866.0], [25.8, 868.0], [25.9, 868.0], [26.0, 868.0], [26.1, 868.0], [26.2, 868.0], [26.3, 868.0], [26.4, 869.0], [26.5, 869.0], [26.6, 869.0], [26.7, 869.0], [26.8, 870.0], [26.9, 870.0], [27.0, 870.0], [27.1, 870.0], [27.2, 870.0], [27.3, 870.0], [27.4, 870.0], [27.5, 870.0], [27.6, 871.0], [27.7, 871.0], [27.8, 871.0], [27.9, 871.0], [28.0, 871.0], [28.1, 871.0], [28.2, 871.0], [28.3, 871.0], [28.4, 872.0], [28.5, 872.0], [28.6, 873.0], [28.7, 873.0], [28.8, 874.0], [28.9, 874.0], [29.0, 874.0], [29.1, 874.0], [29.2, 874.0], [29.3, 874.0], [29.4, 875.0], [29.5, 875.0], [29.6, 876.0], [29.7, 876.0], [29.8, 877.0], [29.9, 877.0], [30.0, 878.0], [30.1, 878.0], [30.2, 878.0], [30.3, 878.0], [30.4, 879.0], [30.5, 879.0], [30.6, 879.0], [30.7, 879.0], [30.8, 882.0], [30.9, 882.0], [31.0, 882.0], [31.1, 882.0], [31.2, 882.0], [31.3, 882.0], [31.4, 883.0], [31.5, 883.0], [31.6, 883.0], [31.7, 883.0], [31.8, 883.0], [31.9, 883.0], [32.0, 883.0], [32.1, 883.0], [32.2, 884.0], [32.3, 884.0], [32.4, 884.0], [32.5, 884.0], [32.6, 885.0], [32.7, 885.0], [32.8, 886.0], [32.9, 886.0], [33.0, 887.0], [33.1, 887.0], [33.2, 887.0], [33.3, 887.0], [33.4, 887.0], [33.5, 887.0], [33.6, 887.0], [33.7, 887.0], [33.8, 888.0], [33.9, 888.0], [34.0, 888.0], [34.1, 888.0], [34.2, 888.0], [34.3, 888.0], [34.4, 888.0], [34.5, 888.0], [34.6, 888.0], [34.7, 888.0], [34.8, 889.0], [34.9, 889.0], [35.0, 889.0], [35.1, 889.0], [35.2, 890.0], [35.3, 890.0], [35.4, 890.0], [35.5, 890.0], [35.6, 891.0], [35.7, 891.0], [35.8, 891.0], [35.9, 891.0], [36.0, 892.0], [36.1, 892.0], [36.2, 892.0], [36.3, 892.0], [36.4, 893.0], [36.5, 893.0], [36.6, 893.0], [36.7, 893.0], [36.8, 895.0], [36.9, 895.0], [37.0, 895.0], [37.1, 895.0], [37.2, 895.0], [37.3, 895.0], [37.4, 895.0], [37.5, 895.0], [37.6, 895.0], [37.7, 895.0], [37.8, 897.0], [37.9, 897.0], [38.0, 898.0], [38.1, 898.0], [38.2, 899.0], [38.3, 899.0], [38.4, 900.0], [38.5, 900.0], [38.6, 900.0], [38.7, 900.0], [38.8, 900.0], [38.9, 900.0], [39.0, 901.0], [39.1, 901.0], [39.2, 901.0], [39.3, 901.0], [39.4, 901.0], [39.5, 901.0], [39.6, 901.0], [39.7, 901.0], [39.8, 904.0], [39.9, 904.0], [40.0, 904.0], [40.1, 904.0], [40.2, 904.0], [40.3, 904.0], [40.4, 905.0], [40.5, 905.0], [40.6, 905.0], [40.7, 905.0], [40.8, 905.0], [40.9, 905.0], [41.0, 905.0], [41.1, 905.0], [41.2, 906.0], [41.3, 906.0], [41.4, 906.0], [41.5, 906.0], [41.6, 907.0], [41.7, 907.0], [41.8, 907.0], [41.9, 907.0], [42.0, 908.0], [42.1, 908.0], [42.2, 909.0], [42.3, 909.0], [42.4, 910.0], [42.5, 910.0], [42.6, 910.0], [42.7, 910.0], [42.8, 910.0], [42.9, 910.0], [43.0, 911.0], [43.1, 911.0], [43.2, 912.0], [43.3, 912.0], [43.4, 912.0], [43.5, 912.0], [43.6, 913.0], [43.7, 913.0], [43.8, 914.0], [43.9, 914.0], [44.0, 915.0], [44.1, 915.0], [44.2, 917.0], [44.3, 917.0], [44.4, 917.0], [44.5, 919.0], [44.6, 919.0], [44.7, 919.0], [44.8, 919.0], [44.9, 920.0], [45.0, 920.0], [45.1, 920.0], [45.2, 920.0], [45.3, 920.0], [45.4, 920.0], [45.5, 921.0], [45.6, 921.0], [45.7, 922.0], [45.8, 922.0], [45.9, 922.0], [46.0, 922.0], [46.1, 923.0], [46.2, 923.0], [46.3, 924.0], [46.4, 924.0], [46.5, 924.0], [46.6, 924.0], [46.7, 926.0], [46.8, 926.0], [46.9, 927.0], [47.0, 927.0], [47.1, 927.0], [47.2, 927.0], [47.3, 929.0], [47.4, 929.0], [47.5, 929.0], [47.6, 929.0], [47.7, 930.0], [47.8, 930.0], [47.9, 931.0], [48.0, 931.0], [48.1, 931.0], [48.2, 931.0], [48.3, 932.0], [48.4, 932.0], [48.5, 932.0], [48.6, 932.0], [48.7, 933.0], [48.8, 933.0], [48.9, 933.0], [49.0, 933.0], [49.1, 934.0], [49.2, 934.0], [49.3, 935.0], [49.4, 935.0], [49.5, 935.0], [49.6, 935.0], [49.7, 935.0], [49.8, 935.0], [49.9, 936.0], [50.0, 936.0], [50.1, 936.0], [50.2, 936.0], [50.3, 936.0], [50.4, 936.0], [50.5, 937.0], [50.6, 937.0], [50.7, 937.0], [50.8, 937.0], [50.9, 937.0], [51.0, 937.0], [51.1, 938.0], [51.2, 938.0], [51.3, 938.0], [51.4, 938.0], [51.5, 938.0], [51.6, 938.0], [51.7, 939.0], [51.8, 939.0], [51.9, 940.0], [52.0, 940.0], [52.1, 941.0], [52.2, 941.0], [52.3, 941.0], [52.4, 941.0], [52.5, 942.0], [52.6, 942.0], [52.7, 942.0], [52.8, 942.0], [52.9, 942.0], [53.0, 942.0], [53.1, 943.0], [53.2, 943.0], [53.3, 946.0], [53.4, 946.0], [53.5, 946.0], [53.6, 946.0], [53.7, 946.0], [53.8, 946.0], [53.9, 947.0], [54.0, 947.0], [54.1, 948.0], [54.2, 948.0], [54.3, 948.0], [54.4, 948.0], [54.5, 950.0], [54.6, 950.0], [54.7, 950.0], [54.8, 950.0], [54.9, 951.0], [55.0, 951.0], [55.1, 953.0], [55.2, 953.0], [55.3, 954.0], [55.4, 954.0], [55.5, 955.0], [55.6, 955.0], [55.7, 955.0], [55.8, 955.0], [55.9, 957.0], [56.0, 957.0], [56.1, 958.0], [56.2, 958.0], [56.3, 963.0], [56.4, 963.0], [56.5, 964.0], [56.6, 964.0], [56.7, 965.0], [56.8, 965.0], [56.9, 967.0], [57.0, 967.0], [57.1, 967.0], [57.2, 967.0], [57.3, 968.0], [57.4, 968.0], [57.5, 969.0], [57.6, 969.0], [57.7, 969.0], [57.8, 969.0], [57.9, 970.0], [58.0, 970.0], [58.1, 970.0], [58.2, 970.0], [58.3, 970.0], [58.4, 970.0], [58.5, 970.0], [58.6, 970.0], [58.7, 971.0], [58.8, 971.0], [58.9, 972.0], [59.0, 972.0], [59.1, 972.0], [59.2, 972.0], [59.3, 973.0], [59.4, 973.0], [59.5, 975.0], [59.6, 975.0], [59.7, 978.0], [59.8, 978.0], [59.9, 978.0], [60.0, 978.0], [60.1, 980.0], [60.2, 980.0], [60.3, 981.0], [60.4, 981.0], [60.5, 981.0], [60.6, 981.0], [60.7, 982.0], [60.8, 982.0], [60.9, 984.0], [61.0, 984.0], [61.1, 984.0], [61.2, 984.0], [61.3, 986.0], [61.4, 986.0], [61.5, 986.0], [61.6, 986.0], [61.7, 987.0], [61.8, 987.0], [61.9, 987.0], [62.0, 987.0], [62.1, 988.0], [62.2, 988.0], [62.3, 988.0], [62.4, 988.0], [62.5, 988.0], [62.6, 988.0], [62.7, 988.0], [62.8, 988.0], [62.9, 993.0], [63.0, 993.0], [63.1, 993.0], [63.2, 993.0], [63.3, 995.0], [63.4, 995.0], [63.5, 998.0], [63.6, 998.0], [63.7, 998.0], [63.8, 998.0], [63.9, 1000.0], [64.0, 1000.0], [64.1, 1001.0], [64.2, 1001.0], [64.3, 1001.0], [64.4, 1001.0], [64.5, 1005.0], [64.6, 1005.0], [64.7, 1006.0], [64.8, 1006.0], [64.9, 1008.0], [65.0, 1008.0], [65.1, 1010.0], [65.2, 1010.0], [65.3, 1010.0], [65.4, 1010.0], [65.5, 1011.0], [65.6, 1011.0], [65.7, 1011.0], [65.8, 1011.0], [65.9, 1013.0], [66.0, 1013.0], [66.1, 1015.0], [66.2, 1015.0], [66.3, 1016.0], [66.4, 1016.0], [66.5, 1016.0], [66.6, 1016.0], [66.7, 1018.0], [66.8, 1018.0], [66.9, 1019.0], [67.0, 1019.0], [67.1, 1021.0], [67.2, 1021.0], [67.3, 1021.0], [67.4, 1021.0], [67.5, 1021.0], [67.6, 1021.0], [67.7, 1023.0], [67.8, 1023.0], [67.9, 1024.0], [68.0, 1024.0], [68.1, 1025.0], [68.2, 1025.0], [68.3, 1026.0], [68.4, 1026.0], [68.5, 1028.0], [68.6, 1028.0], [68.7, 1028.0], [68.8, 1028.0], [68.9, 1031.0], [69.0, 1031.0], [69.1, 1032.0], [69.2, 1032.0], [69.3, 1034.0], [69.4, 1034.0], [69.5, 1034.0], [69.6, 1034.0], [69.7, 1034.0], [69.8, 1034.0], [69.9, 1037.0], [70.0, 1037.0], [70.1, 1038.0], [70.2, 1038.0], [70.3, 1039.0], [70.4, 1039.0], [70.5, 1040.0], [70.6, 1040.0], [70.7, 1041.0], [70.8, 1041.0], [70.9, 1044.0], [71.0, 1044.0], [71.1, 1044.0], [71.2, 1044.0], [71.3, 1045.0], [71.4, 1045.0], [71.5, 1045.0], [71.6, 1045.0], [71.7, 1045.0], [71.8, 1045.0], [71.9, 1046.0], [72.0, 1046.0], [72.1, 1047.0], [72.2, 1047.0], [72.3, 1047.0], [72.4, 1047.0], [72.5, 1049.0], [72.6, 1049.0], [72.7, 1051.0], [72.8, 1051.0], [72.9, 1052.0], [73.0, 1052.0], [73.1, 1053.0], [73.2, 1053.0], [73.3, 1054.0], [73.4, 1054.0], [73.5, 1055.0], [73.6, 1055.0], [73.7, 1055.0], [73.8, 1055.0], [73.9, 1058.0], [74.0, 1058.0], [74.1, 1062.0], [74.2, 1062.0], [74.3, 1062.0], [74.4, 1062.0], [74.5, 1062.0], [74.6, 1062.0], [74.7, 1065.0], [74.8, 1065.0], [74.9, 1068.0], [75.0, 1068.0], [75.1, 1070.0], [75.2, 1070.0], [75.3, 1070.0], [75.4, 1070.0], [75.5, 1071.0], [75.6, 1071.0], [75.7, 1073.0], [75.8, 1073.0], [75.9, 1074.0], [76.0, 1074.0], [76.1, 1076.0], [76.2, 1076.0], [76.3, 1077.0], [76.4, 1077.0], [76.5, 1077.0], [76.6, 1077.0], [76.7, 1078.0], [76.8, 1078.0], [76.9, 1080.0], [77.0, 1080.0], [77.1, 1083.0], [77.2, 1083.0], [77.3, 1084.0], [77.4, 1084.0], [77.5, 1086.0], [77.6, 1086.0], [77.7, 1089.0], [77.8, 1089.0], [77.9, 1090.0], [78.0, 1090.0], [78.1, 1090.0], [78.2, 1090.0], [78.3, 1091.0], [78.4, 1091.0], [78.5, 1091.0], [78.6, 1091.0], [78.7, 1093.0], [78.8, 1093.0], [78.9, 1095.0], [79.0, 1095.0], [79.1, 1095.0], [79.2, 1095.0], [79.3, 1096.0], [79.4, 1096.0], [79.5, 1098.0], [79.6, 1098.0], [79.7, 1102.0], [79.8, 1102.0], [79.9, 1104.0], [80.0, 1104.0], [80.1, 1106.0], [80.2, 1106.0], [80.3, 1111.0], [80.4, 1111.0], [80.5, 1111.0], [80.6, 1111.0], [80.7, 1114.0], [80.8, 1114.0], [80.9, 1114.0], [81.0, 1114.0], [81.1, 1116.0], [81.2, 1116.0], [81.3, 1117.0], [81.4, 1117.0], [81.5, 1117.0], [81.6, 1117.0], [81.7, 1117.0], [81.8, 1117.0], [81.9, 1121.0], [82.0, 1121.0], [82.1, 1122.0], [82.2, 1122.0], [82.3, 1123.0], [82.4, 1123.0], [82.5, 1124.0], [82.6, 1124.0], [82.7, 1128.0], [82.8, 1128.0], [82.9, 1130.0], [83.0, 1130.0], [83.1, 1132.0], [83.2, 1132.0], [83.3, 1133.0], [83.4, 1133.0], [83.5, 1133.0], [83.6, 1133.0], [83.7, 1135.0], [83.8, 1135.0], [83.9, 1135.0], [84.0, 1135.0], [84.1, 1135.0], [84.2, 1135.0], [84.3, 1136.0], [84.4, 1136.0], [84.5, 1136.0], [84.6, 1136.0], [84.7, 1143.0], [84.8, 1143.0], [84.9, 1145.0], [85.0, 1145.0], [85.1, 1148.0], [85.2, 1148.0], [85.3, 1149.0], [85.4, 1149.0], [85.5, 1150.0], [85.6, 1150.0], [85.7, 1150.0], [85.8, 1150.0], [85.9, 1151.0], [86.0, 1151.0], [86.1, 1152.0], [86.2, 1152.0], [86.3, 1153.0], [86.4, 1153.0], [86.5, 1155.0], [86.6, 1155.0], [86.7, 1156.0], [86.8, 1156.0], [86.9, 1158.0], [87.0, 1158.0], [87.1, 1158.0], [87.2, 1158.0], [87.3, 1159.0], [87.4, 1159.0], [87.5, 1159.0], [87.6, 1159.0], [87.7, 1164.0], [87.8, 1164.0], [87.9, 1173.0], [88.0, 1173.0], [88.1, 1173.0], [88.2, 1173.0], [88.3, 1175.0], [88.4, 1175.0], [88.5, 1181.0], [88.6, 1181.0], [88.7, 1182.0], [88.8, 1182.0], [88.9, 1182.0], [89.0, 1182.0], [89.1, 1184.0], [89.2, 1184.0], [89.3, 1185.0], [89.4, 1185.0], [89.5, 1188.0], [89.6, 1188.0], [89.7, 1197.0], [89.8, 1197.0], [89.9, 1201.0], [90.0, 1201.0], [90.1, 1202.0], [90.2, 1202.0], [90.3, 1204.0], [90.4, 1204.0], [90.5, 1205.0], [90.6, 1205.0], [90.7, 1207.0], [90.8, 1207.0], [90.9, 1209.0], [91.0, 1209.0], [91.1, 1210.0], [91.2, 1210.0], [91.3, 1214.0], [91.4, 1214.0], [91.5, 1214.0], [91.6, 1214.0], [91.7, 1215.0], [91.8, 1215.0], [91.9, 1225.0], [92.0, 1225.0], [92.1, 1227.0], [92.2, 1227.0], [92.3, 1233.0], [92.4, 1233.0], [92.5, 1239.0], [92.6, 1239.0], [92.7, 1240.0], [92.8, 1240.0], [92.9, 1248.0], [93.0, 1248.0], [93.1, 1260.0], [93.2, 1260.0], [93.3, 1260.0], [93.4, 1260.0], [93.5, 1266.0], [93.6, 1266.0], [93.7, 1269.0], [93.8, 1269.0], [93.9, 1281.0], [94.0, 1281.0], [94.1, 1284.0], [94.2, 1284.0], [94.3, 1287.0], [94.4, 1287.0], [94.5, 1293.0], [94.6, 1293.0], [94.7, 1296.0], [94.8, 1296.0], [94.9, 1318.0], [95.0, 1318.0], [95.1, 1322.0], [95.2, 1322.0], [95.3, 1337.0], [95.4, 1337.0], [95.5, 1340.0], [95.6, 1340.0], [95.7, 1340.0], [95.8, 1340.0], [95.9, 1342.0], [96.0, 1342.0], [96.1, 1352.0], [96.2, 1352.0], [96.3, 1360.0], [96.4, 1360.0], [96.5, 1389.0], [96.6, 1389.0], [96.7, 1391.0], [96.8, 1391.0], [96.9, 1396.0], [97.0, 1396.0], [97.1, 1405.0], [97.2, 1405.0], [97.3, 1417.0], [97.4, 1417.0], [97.5, 1425.0], [97.6, 1425.0], [97.7, 1444.0], [97.8, 1444.0], [97.9, 1452.0], [98.0, 1452.0], [98.1, 1468.0], [98.2, 1468.0], [98.3, 1468.0], [98.4, 1468.0], [98.5, 1484.0], [98.6, 1484.0], [98.7, 1501.0], [98.8, 1501.0], [98.9, 1522.0], [99.0, 1522.0], [99.1, 1552.0], [99.2, 1552.0], [99.3, 1554.0], [99.4, 1554.0], [99.5, 1558.0], [99.6, 1558.0], [99.7, 1612.0], [99.8, 1612.0], [99.9, 1621.0], [100.0, 1621.0]], "isOverall": false, "label": "Homepage Load - UFC", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 700.0, "maxY": 169.0, "series": [{"data": [[1100.0, 51.0], [1200.0, 25.0], [1300.0, 11.0], [1400.0, 8.0], [700.0, 23.0], [1500.0, 5.0], [800.0, 169.0], [1600.0, 2.0], [900.0, 127.0], [1000.0, 79.0]], "isOverall": false, "label": "Homepage Load - UFC", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 7.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 493.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 493.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 7.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 19.83168316831683, "minX": 1.76174454E12, "maxY": 20.899328859060418, "series": [{"data": [[1.7617446E12, 20.899328859060418], [1.76174454E12, 19.83168316831683]], "isOverall": false, "label": "Homepage Load Test Group - UFC", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7617446E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 809.0, "minX": 1.0, "maxY": 1078.7333333333333, "series": [{"data": [[2.0, 864.0], [3.0, 1041.3333333333333], [4.0, 908.0], [5.0, 934.6666666666666], [6.0, 909.3333333333334], [7.0, 898.6], [8.0, 969.5], [9.0, 939.4444444444445], [10.0, 995.25], [11.0, 843.4736842105264], [12.0, 935.8], [13.0, 915.3333333333333], [14.0, 923.7368421052632], [15.0, 926.1250000000002], [16.0, 978.6470588235294], [1.0, 809.0], [17.0, 971.8333333333334], [18.0, 888.0833333333334], [19.0, 946.5555555555555], [20.0, 1039.0], [21.0, 1037.5555555555557], [22.0, 1078.7333333333333], [23.0, 1016.0312499999998], [24.0, 980.5607476635519], [25.0, 1027.6184210526314], [26.0, 956.8666666666666]], "isOverall": false, "label": "Homepage Load - UFC", "isController": false}, {"data": [[20.468000000000018, 981.6640000000001]], "isOverall": false, "label": "Homepage Load - UFC-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 26.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1228.8333333333333, "minX": 1.76174454E12, "maxY": 71085.48333333334, "series": [{"data": [[1.7617446E12, 71085.48333333334], [1.76174454E12, 48185.05]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7617446E12, 1812.8333333333333], [1.76174454E12, 1228.8333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7617446E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 967.9801980198022, "minX": 1.76174454E12, "maxY": 990.9395973154361, "series": [{"data": [[1.7617446E12, 990.9395973154361], [1.76174454E12, 967.9801980198022]], "isOverall": false, "label": "Homepage Load - UFC", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7617446E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 870.7128712871285, "minX": 1.76174454E12, "maxY": 894.7248322147651, "series": [{"data": [[1.7617446E12, 894.7248322147651], [1.76174454E12, 870.7128712871285]], "isOverall": false, "label": "Homepage Load - UFC", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7617446E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 19.30536912751677, "minX": 1.76174454E12, "maxY": 49.782178217821816, "series": [{"data": [[1.7617446E12, 19.30536912751677], [1.76174454E12, 49.782178217821816]], "isOverall": false, "label": "Homepage Load - UFC", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7617446E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 708.0, "minX": 1.76174454E12, "maxY": 1621.0, "series": [{"data": [[1.7617446E12, 1621.0], [1.76174454E12, 1612.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7617446E12, 1214.1], [1.76174454E12, 1187.1000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7617446E12, 1554.04], [1.76174454E12, 1481.6299999999999]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7617446E12, 1361.4500000000003], [1.76174454E12, 1256.85]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7617446E12, 737.0], [1.76174454E12, 708.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7617446E12, 942.5], [1.76174454E12, 931.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7617446E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 819.0, "minX": 1.0, "maxY": 1115.0, "series": [{"data": [[2.0, 862.0], [8.0, 936.5], [9.0, 932.5], [10.0, 1031.0], [11.0, 908.0], [3.0, 853.5], [12.0, 1115.0], [13.0, 940.0], [1.0, 819.0], [4.0, 898.5], [5.0, 901.0], [6.0, 923.0], [7.0, 984.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 13.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 724.0, "minX": 1.0, "maxY": 1016.5, "series": [{"data": [[2.0, 766.5], [8.0, 842.5], [9.0, 836.0], [10.0, 939.0], [11.0, 810.0], [3.0, 759.5], [12.0, 1016.5], [13.0, 848.0], [1.0, 724.0], [4.0, 806.5], [5.0, 801.0], [6.0, 834.5], [7.0, 884.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 13.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.45, "minX": 1.76174454E12, "maxY": 4.883333333333334, "series": [{"data": [[1.7617446E12, 4.883333333333334], [1.76174454E12, 3.45]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7617446E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.3666666666666667, "minX": 1.76174454E12, "maxY": 4.966666666666667, "series": [{"data": [[1.7617446E12, 4.966666666666667], [1.76174454E12, 3.3666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7617446E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.3666666666666667, "minX": 1.76174454E12, "maxY": 4.966666666666667, "series": [{"data": [[1.7617446E12, 4.966666666666667], [1.76174454E12, 3.3666666666666667]], "isOverall": false, "label": "Homepage Load - UFC-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7617446E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.3666666666666667, "minX": 1.76174454E12, "maxY": 4.966666666666667, "series": [{"data": [[1.7617446E12, 4.966666666666667], [1.76174454E12, 3.3666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7617446E12, "title": "Total Transactions Per Second"}},
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

