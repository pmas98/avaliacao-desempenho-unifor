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
        data: {"result": {"minY": 733.0, "minX": 0.0, "maxY": 1568.0, "series": [{"data": [[0.0, 733.0], [0.1, 733.0], [0.2, 734.0], [0.3, 734.0], [0.4, 738.0], [0.5, 738.0], [0.6, 738.0], [0.7, 742.0], [0.8, 745.0], [0.9, 745.0], [1.0, 746.0], [1.1, 746.0], [1.2, 746.0], [1.3, 746.0], [1.4, 746.0], [1.5, 746.0], [1.6, 749.0], [1.7, 749.0], [1.8, 750.0], [1.9, 750.0], [2.0, 754.0], [2.1, 754.0], [2.2, 755.0], [2.3, 755.0], [2.4, 755.0], [2.5, 755.0], [2.6, 755.0], [2.7, 755.0], [2.8, 755.0], [2.9, 757.0], [3.0, 757.0], [3.1, 758.0], [3.2, 758.0], [3.3, 762.0], [3.4, 762.0], [3.5, 762.0], [3.6, 762.0], [3.7, 762.0], [3.8, 762.0], [3.9, 763.0], [4.0, 763.0], [4.1, 763.0], [4.2, 763.0], [4.3, 764.0], [4.4, 764.0], [4.5, 764.0], [4.6, 764.0], [4.7, 764.0], [4.8, 764.0], [4.9, 765.0], [5.0, 765.0], [5.1, 766.0], [5.2, 766.0], [5.3, 769.0], [5.4, 769.0], [5.5, 770.0], [5.6, 770.0], [5.7, 773.0], [5.8, 773.0], [5.9, 774.0], [6.0, 774.0], [6.1, 775.0], [6.2, 775.0], [6.3, 775.0], [6.4, 775.0], [6.5, 775.0], [6.6, 775.0], [6.7, 776.0], [6.8, 776.0], [6.9, 776.0], [7.0, 776.0], [7.1, 776.0], [7.2, 776.0], [7.3, 776.0], [7.4, 776.0], [7.5, 776.0], [7.6, 776.0], [7.7, 777.0], [7.8, 777.0], [7.9, 779.0], [8.0, 779.0], [8.1, 779.0], [8.2, 779.0], [8.3, 779.0], [8.4, 779.0], [8.5, 781.0], [8.6, 781.0], [8.7, 781.0], [8.8, 781.0], [8.9, 781.0], [9.0, 781.0], [9.1, 781.0], [9.2, 781.0], [9.3, 782.0], [9.4, 782.0], [9.5, 782.0], [9.6, 782.0], [9.7, 783.0], [9.8, 783.0], [9.9, 784.0], [10.0, 784.0], [10.1, 785.0], [10.2, 785.0], [10.3, 787.0], [10.4, 788.0], [10.5, 788.0], [10.6, 788.0], [10.7, 788.0], [10.8, 789.0], [10.9, 789.0], [11.0, 789.0], [11.1, 789.0], [11.2, 789.0], [11.3, 789.0], [11.4, 791.0], [11.5, 791.0], [11.6, 791.0], [11.7, 791.0], [11.8, 791.0], [11.9, 791.0], [12.0, 791.0], [12.1, 791.0], [12.2, 791.0], [12.3, 792.0], [12.4, 792.0], [12.5, 792.0], [12.6, 792.0], [12.7, 793.0], [12.8, 794.0], [12.9, 794.0], [13.0, 794.0], [13.1, 794.0], [13.2, 794.0], [13.3, 795.0], [13.4, 797.0], [13.5, 797.0], [13.6, 797.0], [13.7, 797.0], [13.8, 798.0], [13.9, 798.0], [14.0, 798.0], [14.1, 798.0], [14.2, 798.0], [14.3, 799.0], [14.4, 799.0], [14.5, 799.0], [14.6, 799.0], [14.7, 800.0], [14.8, 801.0], [14.9, 801.0], [15.0, 803.0], [15.1, 803.0], [15.2, 803.0], [15.3, 803.0], [15.4, 804.0], [15.5, 804.0], [15.6, 805.0], [15.7, 805.0], [15.8, 805.0], [15.9, 805.0], [16.0, 806.0], [16.1, 806.0], [16.2, 806.0], [16.3, 806.0], [16.4, 807.0], [16.5, 807.0], [16.6, 807.0], [16.7, 807.0], [16.8, 808.0], [16.9, 808.0], [17.0, 808.0], [17.1, 808.0], [17.2, 809.0], [17.3, 809.0], [17.4, 809.0], [17.5, 809.0], [17.6, 809.0], [17.7, 809.0], [17.8, 809.0], [17.9, 809.0], [18.0, 809.0], [18.1, 809.0], [18.2, 810.0], [18.3, 810.0], [18.4, 810.0], [18.5, 810.0], [18.6, 810.0], [18.7, 810.0], [18.8, 810.0], [18.9, 810.0], [19.0, 810.0], [19.1, 810.0], [19.2, 811.0], [19.3, 811.0], [19.4, 811.0], [19.5, 811.0], [19.6, 811.0], [19.7, 811.0], [19.8, 812.0], [19.9, 812.0], [20.0, 812.0], [20.1, 812.0], [20.2, 813.0], [20.3, 813.0], [20.4, 813.0], [20.5, 813.0], [20.6, 814.0], [20.7, 814.0], [20.8, 816.0], [20.9, 816.0], [21.0, 817.0], [21.1, 817.0], [21.2, 817.0], [21.3, 817.0], [21.4, 817.0], [21.5, 817.0], [21.6, 817.0], [21.7, 817.0], [21.8, 818.0], [21.9, 818.0], [22.0, 818.0], [22.1, 818.0], [22.2, 818.0], [22.3, 818.0], [22.4, 819.0], [22.5, 819.0], [22.6, 819.0], [22.7, 819.0], [22.8, 820.0], [22.9, 820.0], [23.0, 820.0], [23.1, 820.0], [23.2, 821.0], [23.3, 821.0], [23.4, 822.0], [23.5, 822.0], [23.6, 823.0], [23.7, 823.0], [23.8, 823.0], [23.9, 823.0], [24.0, 824.0], [24.1, 824.0], [24.2, 824.0], [24.3, 824.0], [24.4, 825.0], [24.5, 825.0], [24.6, 826.0], [24.7, 826.0], [24.8, 826.0], [24.9, 826.0], [25.0, 826.0], [25.1, 826.0], [25.2, 827.0], [25.3, 827.0], [25.4, 827.0], [25.5, 827.0], [25.6, 827.0], [25.7, 827.0], [25.8, 828.0], [25.9, 828.0], [26.0, 828.0], [26.1, 828.0], [26.2, 828.0], [26.3, 828.0], [26.4, 829.0], [26.5, 829.0], [26.6, 830.0], [26.7, 830.0], [26.8, 830.0], [26.9, 830.0], [27.0, 831.0], [27.1, 831.0], [27.2, 831.0], [27.3, 831.0], [27.4, 831.0], [27.5, 831.0], [27.6, 832.0], [27.7, 832.0], [27.8, 832.0], [27.9, 832.0], [28.0, 833.0], [28.1, 833.0], [28.2, 833.0], [28.3, 833.0], [28.4, 833.0], [28.5, 833.0], [28.6, 833.0], [28.7, 833.0], [28.8, 834.0], [28.9, 834.0], [29.0, 836.0], [29.1, 836.0], [29.2, 836.0], [29.3, 836.0], [29.4, 836.0], [29.5, 836.0], [29.6, 836.0], [29.7, 836.0], [29.8, 838.0], [29.9, 838.0], [30.0, 838.0], [30.1, 838.0], [30.2, 838.0], [30.3, 838.0], [30.4, 838.0], [30.5, 838.0], [30.6, 838.0], [30.7, 838.0], [30.8, 839.0], [30.9, 839.0], [31.0, 840.0], [31.1, 840.0], [31.2, 840.0], [31.3, 840.0], [31.4, 840.0], [31.5, 840.0], [31.6, 840.0], [31.7, 840.0], [31.8, 841.0], [31.9, 841.0], [32.0, 843.0], [32.1, 843.0], [32.2, 843.0], [32.3, 843.0], [32.4, 843.0], [32.5, 843.0], [32.6, 845.0], [32.7, 845.0], [32.8, 845.0], [32.9, 845.0], [33.0, 846.0], [33.1, 846.0], [33.2, 846.0], [33.3, 846.0], [33.4, 846.0], [33.5, 846.0], [33.6, 846.0], [33.7, 846.0], [33.8, 847.0], [33.9, 847.0], [34.0, 848.0], [34.1, 848.0], [34.2, 848.0], [34.3, 848.0], [34.4, 848.0], [34.5, 848.0], [34.6, 848.0], [34.7, 848.0], [34.8, 849.0], [34.9, 849.0], [35.0, 849.0], [35.1, 849.0], [35.2, 849.0], [35.3, 849.0], [35.4, 850.0], [35.5, 850.0], [35.6, 852.0], [35.7, 852.0], [35.8, 852.0], [35.9, 852.0], [36.0, 853.0], [36.1, 853.0], [36.2, 854.0], [36.3, 854.0], [36.4, 854.0], [36.5, 854.0], [36.6, 854.0], [36.7, 854.0], [36.8, 854.0], [36.9, 854.0], [37.0, 855.0], [37.1, 855.0], [37.2, 855.0], [37.3, 855.0], [37.4, 856.0], [37.5, 856.0], [37.6, 856.0], [37.7, 856.0], [37.8, 856.0], [37.9, 856.0], [38.0, 857.0], [38.1, 857.0], [38.2, 857.0], [38.3, 857.0], [38.4, 857.0], [38.5, 857.0], [38.6, 857.0], [38.7, 857.0], [38.8, 858.0], [38.9, 858.0], [39.0, 859.0], [39.1, 859.0], [39.2, 859.0], [39.3, 859.0], [39.4, 859.0], [39.5, 859.0], [39.6, 859.0], [39.7, 859.0], [39.8, 859.0], [39.9, 859.0], [40.0, 859.0], [40.1, 859.0], [40.2, 859.0], [40.3, 859.0], [40.4, 860.0], [40.5, 860.0], [40.6, 860.0], [40.7, 860.0], [40.8, 861.0], [40.9, 861.0], [41.0, 861.0], [41.1, 861.0], [41.2, 862.0], [41.3, 862.0], [41.4, 863.0], [41.5, 863.0], [41.6, 865.0], [41.7, 865.0], [41.8, 865.0], [41.9, 865.0], [42.0, 866.0], [42.1, 866.0], [42.2, 866.0], [42.3, 866.0], [42.4, 866.0], [42.5, 866.0], [42.6, 866.0], [42.7, 866.0], [42.8, 867.0], [42.9, 867.0], [43.0, 867.0], [43.1, 867.0], [43.2, 868.0], [43.3, 868.0], [43.4, 868.0], [43.5, 868.0], [43.6, 868.0], [43.7, 868.0], [43.8, 868.0], [43.9, 868.0], [44.0, 868.0], [44.1, 868.0], [44.2, 869.0], [44.3, 869.0], [44.4, 869.0], [44.5, 869.0], [44.6, 869.0], [44.7, 869.0], [44.8, 870.0], [44.9, 870.0], [45.0, 870.0], [45.1, 870.0], [45.2, 870.0], [45.3, 870.0], [45.4, 871.0], [45.5, 871.0], [45.6, 871.0], [45.7, 871.0], [45.8, 871.0], [45.9, 871.0], [46.0, 872.0], [46.1, 872.0], [46.2, 872.0], [46.3, 872.0], [46.4, 873.0], [46.5, 873.0], [46.6, 874.0], [46.7, 874.0], [46.8, 874.0], [46.9, 874.0], [47.0, 874.0], [47.1, 874.0], [47.2, 874.0], [47.3, 874.0], [47.4, 875.0], [47.5, 875.0], [47.6, 876.0], [47.7, 876.0], [47.8, 876.0], [47.9, 876.0], [48.0, 877.0], [48.1, 877.0], [48.2, 877.0], [48.3, 877.0], [48.4, 877.0], [48.5, 877.0], [48.6, 877.0], [48.7, 877.0], [48.8, 878.0], [48.9, 878.0], [49.0, 878.0], [49.1, 878.0], [49.2, 878.0], [49.3, 878.0], [49.4, 881.0], [49.5, 881.0], [49.6, 881.0], [49.7, 881.0], [49.8, 883.0], [49.9, 883.0], [50.0, 884.0], [50.1, 884.0], [50.2, 884.0], [50.3, 884.0], [50.4, 884.0], [50.5, 884.0], [50.6, 885.0], [50.7, 885.0], [50.8, 885.0], [50.9, 885.0], [51.0, 885.0], [51.1, 885.0], [51.2, 886.0], [51.3, 886.0], [51.4, 887.0], [51.5, 887.0], [51.6, 887.0], [51.7, 887.0], [51.8, 888.0], [51.9, 888.0], [52.0, 889.0], [52.1, 889.0], [52.2, 890.0], [52.3, 890.0], [52.4, 891.0], [52.5, 891.0], [52.6, 891.0], [52.7, 891.0], [52.8, 891.0], [52.9, 891.0], [53.0, 893.0], [53.1, 893.0], [53.2, 893.0], [53.3, 893.0], [53.4, 893.0], [53.5, 893.0], [53.6, 894.0], [53.7, 894.0], [53.8, 894.0], [53.9, 894.0], [54.0, 894.0], [54.1, 894.0], [54.2, 894.0], [54.3, 894.0], [54.4, 895.0], [54.5, 895.0], [54.6, 895.0], [54.7, 895.0], [54.8, 896.0], [54.9, 896.0], [55.0, 896.0], [55.1, 896.0], [55.2, 896.0], [55.3, 896.0], [55.4, 896.0], [55.5, 896.0], [55.6, 897.0], [55.7, 897.0], [55.8, 897.0], [55.9, 897.0], [56.0, 898.0], [56.1, 898.0], [56.2, 899.0], [56.3, 899.0], [56.4, 900.0], [56.5, 900.0], [56.6, 900.0], [56.7, 900.0], [56.8, 900.0], [56.9, 900.0], [57.0, 900.0], [57.1, 900.0], [57.2, 901.0], [57.3, 901.0], [57.4, 901.0], [57.5, 901.0], [57.6, 902.0], [57.7, 902.0], [57.8, 902.0], [57.9, 902.0], [58.0, 902.0], [58.1, 902.0], [58.2, 902.0], [58.3, 902.0], [58.4, 902.0], [58.5, 902.0], [58.6, 903.0], [58.7, 903.0], [58.8, 904.0], [58.9, 904.0], [59.0, 904.0], [59.1, 904.0], [59.2, 904.0], [59.3, 904.0], [59.4, 905.0], [59.5, 905.0], [59.6, 905.0], [59.7, 905.0], [59.8, 905.0], [59.9, 905.0], [60.0, 905.0], [60.1, 905.0], [60.2, 906.0], [60.3, 906.0], [60.4, 906.0], [60.5, 906.0], [60.6, 907.0], [60.7, 907.0], [60.8, 907.0], [60.9, 907.0], [61.0, 907.0], [61.1, 907.0], [61.2, 907.0], [61.3, 907.0], [61.4, 907.0], [61.5, 907.0], [61.6, 907.0], [61.7, 907.0], [61.8, 908.0], [61.9, 908.0], [62.0, 908.0], [62.1, 908.0], [62.2, 909.0], [62.3, 909.0], [62.4, 909.0], [62.5, 909.0], [62.6, 911.0], [62.7, 911.0], [62.8, 911.0], [62.9, 911.0], [63.0, 911.0], [63.1, 911.0], [63.2, 911.0], [63.3, 911.0], [63.4, 913.0], [63.5, 913.0], [63.6, 913.0], [63.7, 913.0], [63.8, 913.0], [63.9, 913.0], [64.0, 914.0], [64.1, 914.0], [64.2, 915.0], [64.3, 915.0], [64.4, 915.0], [64.5, 915.0], [64.6, 915.0], [64.7, 915.0], [64.8, 916.0], [64.9, 916.0], [65.0, 917.0], [65.1, 917.0], [65.2, 917.0], [65.3, 917.0], [65.4, 918.0], [65.5, 918.0], [65.6, 919.0], [65.7, 919.0], [65.8, 920.0], [65.9, 920.0], [66.0, 921.0], [66.1, 921.0], [66.2, 921.0], [66.3, 921.0], [66.4, 921.0], [66.5, 921.0], [66.6, 922.0], [66.7, 922.0], [66.8, 922.0], [66.9, 922.0], [67.0, 922.0], [67.1, 922.0], [67.2, 923.0], [67.3, 923.0], [67.4, 923.0], [67.5, 923.0], [67.6, 924.0], [67.7, 924.0], [67.8, 924.0], [67.9, 924.0], [68.0, 926.0], [68.1, 926.0], [68.2, 926.0], [68.3, 926.0], [68.4, 926.0], [68.5, 926.0], [68.6, 927.0], [68.7, 927.0], [68.8, 928.0], [68.9, 928.0], [69.0, 928.0], [69.1, 928.0], [69.2, 930.0], [69.3, 930.0], [69.4, 930.0], [69.5, 930.0], [69.6, 930.0], [69.7, 932.0], [69.8, 932.0], [69.9, 932.0], [70.0, 932.0], [70.1, 933.0], [70.2, 933.0], [70.3, 933.0], [70.4, 933.0], [70.5, 934.0], [70.6, 934.0], [70.7, 934.0], [70.8, 934.0], [70.9, 935.0], [71.0, 935.0], [71.1, 936.0], [71.2, 936.0], [71.3, 936.0], [71.4, 936.0], [71.5, 936.0], [71.6, 936.0], [71.7, 937.0], [71.8, 937.0], [71.9, 937.0], [72.0, 937.0], [72.1, 939.0], [72.2, 939.0], [72.3, 940.0], [72.4, 940.0], [72.5, 942.0], [72.6, 942.0], [72.7, 942.0], [72.8, 942.0], [72.9, 942.0], [73.0, 942.0], [73.1, 943.0], [73.2, 943.0], [73.3, 943.0], [73.4, 943.0], [73.5, 944.0], [73.6, 944.0], [73.7, 946.0], [73.8, 946.0], [73.9, 948.0], [74.0, 948.0], [74.1, 949.0], [74.2, 949.0], [74.3, 949.0], [74.4, 949.0], [74.5, 950.0], [74.6, 950.0], [74.7, 953.0], [74.8, 953.0], [74.9, 954.0], [75.0, 954.0], [75.1, 954.0], [75.2, 954.0], [75.3, 954.0], [75.4, 954.0], [75.5, 955.0], [75.6, 955.0], [75.7, 956.0], [75.8, 956.0], [75.9, 957.0], [76.0, 957.0], [76.1, 958.0], [76.2, 958.0], [76.3, 958.0], [76.4, 958.0], [76.5, 958.0], [76.6, 958.0], [76.7, 958.0], [76.8, 958.0], [76.9, 960.0], [77.0, 960.0], [77.1, 960.0], [77.2, 960.0], [77.3, 960.0], [77.4, 960.0], [77.5, 962.0], [77.6, 962.0], [77.7, 962.0], [77.8, 962.0], [77.9, 962.0], [78.0, 962.0], [78.1, 962.0], [78.2, 962.0], [78.3, 963.0], [78.4, 963.0], [78.5, 964.0], [78.6, 964.0], [78.7, 964.0], [78.8, 964.0], [78.9, 964.0], [79.0, 964.0], [79.1, 965.0], [79.2, 965.0], [79.3, 967.0], [79.4, 967.0], [79.5, 967.0], [79.6, 967.0], [79.7, 970.0], [79.8, 970.0], [79.9, 971.0], [80.0, 971.0], [80.1, 972.0], [80.2, 972.0], [80.3, 972.0], [80.4, 972.0], [80.5, 973.0], [80.6, 973.0], [80.7, 973.0], [80.8, 973.0], [80.9, 973.0], [81.0, 973.0], [81.1, 974.0], [81.2, 974.0], [81.3, 982.0], [81.4, 982.0], [81.5, 982.0], [81.6, 982.0], [81.7, 983.0], [81.8, 983.0], [81.9, 983.0], [82.0, 983.0], [82.1, 986.0], [82.2, 986.0], [82.3, 987.0], [82.4, 987.0], [82.5, 988.0], [82.6, 988.0], [82.7, 990.0], [82.8, 990.0], [82.9, 990.0], [83.0, 990.0], [83.1, 990.0], [83.2, 990.0], [83.3, 992.0], [83.4, 992.0], [83.5, 995.0], [83.6, 995.0], [83.7, 995.0], [83.8, 995.0], [83.9, 996.0], [84.0, 996.0], [84.1, 997.0], [84.2, 997.0], [84.3, 998.0], [84.4, 998.0], [84.5, 998.0], [84.6, 998.0], [84.7, 998.0], [84.8, 998.0], [84.9, 1000.0], [85.0, 1000.0], [85.1, 1001.0], [85.2, 1001.0], [85.3, 1003.0], [85.4, 1003.0], [85.5, 1003.0], [85.6, 1003.0], [85.7, 1007.0], [85.8, 1007.0], [85.9, 1007.0], [86.0, 1007.0], [86.1, 1011.0], [86.2, 1011.0], [86.3, 1011.0], [86.4, 1011.0], [86.5, 1013.0], [86.6, 1013.0], [86.7, 1014.0], [86.8, 1014.0], [86.9, 1018.0], [87.0, 1018.0], [87.1, 1021.0], [87.2, 1021.0], [87.3, 1021.0], [87.4, 1021.0], [87.5, 1021.0], [87.6, 1021.0], [87.7, 1024.0], [87.8, 1024.0], [87.9, 1029.0], [88.0, 1029.0], [88.1, 1032.0], [88.2, 1032.0], [88.3, 1035.0], [88.4, 1035.0], [88.5, 1037.0], [88.6, 1037.0], [88.7, 1040.0], [88.8, 1040.0], [88.9, 1045.0], [89.0, 1045.0], [89.1, 1046.0], [89.2, 1046.0], [89.3, 1049.0], [89.4, 1049.0], [89.5, 1054.0], [89.6, 1054.0], [89.7, 1068.0], [89.8, 1068.0], [89.9, 1069.0], [90.0, 1069.0], [90.1, 1081.0], [90.2, 1081.0], [90.3, 1089.0], [90.4, 1089.0], [90.5, 1092.0], [90.6, 1092.0], [90.7, 1098.0], [90.8, 1098.0], [90.9, 1100.0], [91.0, 1100.0], [91.1, 1102.0], [91.2, 1102.0], [91.3, 1103.0], [91.4, 1103.0], [91.5, 1103.0], [91.6, 1103.0], [91.7, 1104.0], [91.8, 1104.0], [91.9, 1106.0], [92.0, 1106.0], [92.1, 1107.0], [92.2, 1107.0], [92.3, 1113.0], [92.4, 1113.0], [92.5, 1117.0], [92.6, 1117.0], [92.7, 1119.0], [92.8, 1119.0], [92.9, 1119.0], [93.0, 1119.0], [93.1, 1123.0], [93.2, 1123.0], [93.3, 1127.0], [93.4, 1127.0], [93.5, 1129.0], [93.6, 1129.0], [93.7, 1129.0], [93.8, 1129.0], [93.9, 1137.0], [94.0, 1137.0], [94.1, 1152.0], [94.2, 1152.0], [94.3, 1157.0], [94.4, 1157.0], [94.5, 1159.0], [94.6, 1159.0], [94.7, 1161.0], [94.8, 1161.0], [94.9, 1163.0], [95.0, 1163.0], [95.1, 1164.0], [95.2, 1164.0], [95.3, 1166.0], [95.4, 1166.0], [95.5, 1167.0], [95.6, 1167.0], [95.7, 1171.0], [95.8, 1171.0], [95.9, 1174.0], [96.0, 1174.0], [96.1, 1176.0], [96.2, 1176.0], [96.3, 1177.0], [96.4, 1177.0], [96.5, 1185.0], [96.6, 1185.0], [96.7, 1193.0], [96.8, 1193.0], [96.9, 1193.0], [97.0, 1193.0], [97.1, 1193.0], [97.2, 1193.0], [97.3, 1201.0], [97.4, 1201.0], [97.5, 1207.0], [97.6, 1207.0], [97.7, 1207.0], [97.8, 1207.0], [97.9, 1222.0], [98.0, 1222.0], [98.1, 1235.0], [98.2, 1235.0], [98.3, 1241.0], [98.4, 1241.0], [98.5, 1259.0], [98.6, 1259.0], [98.7, 1268.0], [98.8, 1268.0], [98.9, 1290.0], [99.0, 1290.0], [99.1, 1298.0], [99.2, 1298.0], [99.3, 1331.0], [99.4, 1331.0], [99.5, 1332.0], [99.6, 1332.0], [99.7, 1380.0], [99.8, 1380.0], [99.9, 1568.0], [100.0, 1568.0]], "isOverall": false, "label": "Homepage Load - UFC", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 700.0, "maxY": 209.0, "series": [{"data": [[1100.0, 32.0], [1200.0, 10.0], [1300.0, 3.0], [700.0, 73.0], [1500.0, 1.0], [800.0, 209.0], [900.0, 142.0], [1000.0, 30.0]], "isOverall": false, "label": "Homepage Load - UFC", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 499.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 499.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.76175432E12, "maxY": 21.94554455445545, "series": [{"data": [[1.76175444E12, 2.0], [1.76175432E12, 15.430107526881715], [1.76175438E12, 21.94554455445545]], "isOverall": false, "label": "Homepage Load Test Group - UFC", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76175444E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 832.75, "minX": 1.0, "maxY": 1012.75, "series": [{"data": [[2.0, 949.0], [3.0, 1012.75], [4.0, 971.5], [5.0, 832.75], [6.0, 938.6666666666666], [7.0, 848.25], [8.0, 836.2222222222222], [9.0, 899.4], [10.0, 858.4], [11.0, 869.6], [12.0, 862.1428571428571], [13.0, 933.9], [14.0, 994.6666666666666], [15.0, 870.8749999999999], [16.0, 929.2777777777778], [1.0, 940.0], [17.0, 890.2857142857142], [18.0, 921.7777777777777], [19.0, 909.0], [20.0, 922.2142857142858], [21.0, 891.5714285714286], [22.0, 893.6666666666669], [23.0, 921.82], [24.0, 897.0421052631576], [25.0, 908.4152542372882], [26.0, 930.578947368421]], "isOverall": false, "label": "Homepage Load - UFC", "isController": false}, {"data": [[20.614, 906.0939999999994]], "isOverall": false, "label": "Homepage Load - UFC-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 26.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 18.25, "minX": 1.76175432E12, "maxY": 96369.28333333334, "series": [{"data": [[1.76175444E12, 715.6], [1.76175432E12, 22183.933333333334], [1.76175438E12, 96369.28333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76175444E12, 18.25], [1.76175432E12, 565.75], [1.76175438E12, 2457.6666666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76175444E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 900.0915841584161, "minX": 1.76175432E12, "maxY": 932.0, "series": [{"data": [[1.76175444E12, 932.0], [1.76175432E12, 931.3333333333334], [1.76175438E12, 900.0915841584161]], "isOverall": false, "label": "Homepage Load - UFC", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175444E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 806.9900990099013, "minX": 1.76175432E12, "maxY": 841.0, "series": [{"data": [[1.76175444E12, 841.0], [1.76175432E12, 835.7634408602152], [1.76175438E12, 806.9900990099013]], "isOverall": false, "label": "Homepage Load - UFC", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175444E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.76175432E12, "maxY": 67.31182795698929, "series": [{"data": [[1.76175444E12, 0.0], [1.76175432E12, 67.31182795698929], [1.76175438E12, 21.76237623762378]], "isOverall": false, "label": "Homepage Load - UFC", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175444E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 733.0, "minX": 1.76175432E12, "maxY": 1568.0, "series": [{"data": [[1.76175444E12, 949.0], [1.76175432E12, 1568.0], [1.76175438E12, 1332.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76175444E12, 907.0], [1.76175432E12, 733.0], [1.76175438E12, 734.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76175444E12, 949.0], [1.76175432E12, 1163.6], [1.76175438E12, 1022.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76175444E12, 949.0], [1.76175432E12, 1568.0], [1.76175438E12, 1267.55]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76175444E12, 940.0], [1.76175432E12, 895.0], [1.76175438E12, 878.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.76175444E12, 949.0], [1.76175432E12, 1213.0], [1.76175438E12, 1135.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76175444E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 818.0, "minX": 1.0, "maxY": 976.5, "series": [{"data": [[2.0, 818.0], [8.0, 874.5], [9.0, 888.0], [10.0, 907.0], [11.0, 847.0], [3.0, 829.5], [12.0, 892.5], [13.0, 863.5], [14.0, 976.5], [1.0, 940.0], [4.0, 879.5], [5.0, 859.0], [6.0, 869.5], [7.0, 922.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 722.5, "minX": 1.0, "maxY": 880.5, "series": [{"data": [[2.0, 722.5], [8.0, 779.5], [9.0, 794.0], [10.0, 812.5], [11.0, 752.0], [3.0, 738.0], [12.0, 796.5], [13.0, 769.5], [14.0, 880.5], [1.0, 852.0], [4.0, 785.0], [5.0, 769.0], [6.0, 774.0], [7.0, 828.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.76175432E12, "maxY": 6.7, "series": [{"data": [[1.76175444E12, 0.016666666666666666], [1.76175432E12, 1.6166666666666667], [1.76175438E12, 6.7]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76175444E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.76175432E12, "maxY": 6.733333333333333, "series": [{"data": [[1.76175444E12, 0.05], [1.76175432E12, 1.55], [1.76175438E12, 6.733333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76175444E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.76175432E12, "maxY": 6.733333333333333, "series": [{"data": [[1.76175444E12, 0.05], [1.76175432E12, 1.55], [1.76175438E12, 6.733333333333333]], "isOverall": false, "label": "Homepage Load - UFC-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175444E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.76175432E12, "maxY": 6.733333333333333, "series": [{"data": [[1.76175444E12, 0.05], [1.76175432E12, 1.55], [1.76175438E12, 6.733333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175444E12, "title": "Total Transactions Per Second"}},
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

