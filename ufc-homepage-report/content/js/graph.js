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
        data: {"result": {"minY": 698.0, "minX": 0.0, "maxY": 1547.0, "series": [{"data": [[0.0, 698.0], [0.1, 698.0], [0.2, 704.0], [0.3, 704.0], [0.4, 711.0], [0.5, 711.0], [0.6, 711.0], [0.7, 721.0], [0.8, 726.0], [0.9, 726.0], [1.0, 734.0], [1.1, 734.0], [1.2, 736.0], [1.3, 736.0], [1.4, 737.0], [1.5, 737.0], [1.6, 737.0], [1.7, 737.0], [1.8, 737.0], [1.9, 737.0], [2.0, 740.0], [2.1, 740.0], [2.2, 740.0], [2.3, 740.0], [2.4, 741.0], [2.5, 741.0], [2.6, 742.0], [2.7, 742.0], [2.8, 742.0], [2.9, 745.0], [3.0, 745.0], [3.1, 747.0], [3.2, 747.0], [3.3, 747.0], [3.4, 747.0], [3.5, 748.0], [3.6, 748.0], [3.7, 750.0], [3.8, 750.0], [3.9, 751.0], [4.0, 751.0], [4.1, 754.0], [4.2, 754.0], [4.3, 755.0], [4.4, 755.0], [4.5, 757.0], [4.6, 757.0], [4.7, 757.0], [4.8, 757.0], [4.9, 762.0], [5.0, 762.0], [5.1, 762.0], [5.2, 762.0], [5.3, 763.0], [5.4, 763.0], [5.5, 763.0], [5.6, 763.0], [5.7, 764.0], [5.8, 764.0], [5.9, 765.0], [6.0, 765.0], [6.1, 766.0], [6.2, 766.0], [6.3, 767.0], [6.4, 767.0], [6.5, 768.0], [6.6, 768.0], [6.7, 768.0], [6.8, 768.0], [6.9, 769.0], [7.0, 769.0], [7.1, 769.0], [7.2, 769.0], [7.3, 769.0], [7.4, 769.0], [7.5, 769.0], [7.6, 769.0], [7.7, 770.0], [7.8, 770.0], [7.9, 770.0], [8.0, 770.0], [8.1, 770.0], [8.2, 770.0], [8.3, 770.0], [8.4, 770.0], [8.5, 771.0], [8.6, 771.0], [8.7, 771.0], [8.8, 771.0], [8.9, 771.0], [9.0, 771.0], [9.1, 771.0], [9.2, 771.0], [9.3, 772.0], [9.4, 772.0], [9.5, 772.0], [9.6, 772.0], [9.7, 773.0], [9.8, 773.0], [9.9, 773.0], [10.0, 773.0], [10.1, 774.0], [10.2, 774.0], [10.3, 777.0], [10.4, 777.0], [10.5, 777.0], [10.6, 777.0], [10.7, 777.0], [10.8, 777.0], [10.9, 778.0], [11.0, 778.0], [11.1, 778.0], [11.2, 778.0], [11.3, 778.0], [11.4, 778.0], [11.5, 778.0], [11.6, 778.0], [11.7, 780.0], [11.8, 780.0], [11.9, 780.0], [12.0, 780.0], [12.1, 783.0], [12.2, 783.0], [12.3, 783.0], [12.4, 783.0], [12.5, 783.0], [12.6, 783.0], [12.7, 783.0], [12.8, 783.0], [12.9, 783.0], [13.0, 783.0], [13.1, 784.0], [13.2, 784.0], [13.3, 785.0], [13.4, 785.0], [13.5, 786.0], [13.6, 786.0], [13.7, 787.0], [13.8, 787.0], [13.9, 787.0], [14.0, 787.0], [14.1, 788.0], [14.2, 788.0], [14.3, 788.0], [14.4, 788.0], [14.5, 788.0], [14.6, 788.0], [14.7, 788.0], [14.8, 788.0], [14.9, 789.0], [15.0, 789.0], [15.1, 790.0], [15.2, 790.0], [15.3, 791.0], [15.4, 791.0], [15.5, 791.0], [15.6, 791.0], [15.7, 791.0], [15.8, 791.0], [15.9, 792.0], [16.0, 792.0], [16.1, 792.0], [16.2, 792.0], [16.3, 793.0], [16.4, 793.0], [16.5, 793.0], [16.6, 793.0], [16.7, 793.0], [16.8, 793.0], [16.9, 794.0], [17.0, 794.0], [17.1, 794.0], [17.2, 794.0], [17.3, 795.0], [17.4, 795.0], [17.5, 796.0], [17.6, 797.0], [17.7, 797.0], [17.8, 798.0], [17.9, 798.0], [18.0, 798.0], [18.1, 798.0], [18.2, 798.0], [18.3, 798.0], [18.4, 798.0], [18.5, 799.0], [18.6, 799.0], [18.7, 799.0], [18.8, 799.0], [18.9, 799.0], [19.0, 799.0], [19.1, 800.0], [19.2, 800.0], [19.3, 800.0], [19.4, 800.0], [19.5, 800.0], [19.6, 800.0], [19.7, 802.0], [19.8, 802.0], [19.9, 803.0], [20.0, 803.0], [20.1, 804.0], [20.2, 804.0], [20.3, 805.0], [20.4, 805.0], [20.5, 805.0], [20.6, 805.0], [20.7, 805.0], [20.8, 805.0], [20.9, 806.0], [21.0, 806.0], [21.1, 806.0], [21.2, 806.0], [21.3, 806.0], [21.4, 806.0], [21.5, 806.0], [21.6, 806.0], [21.7, 807.0], [21.8, 807.0], [21.9, 807.0], [22.0, 807.0], [22.1, 807.0], [22.2, 807.0], [22.3, 807.0], [22.4, 807.0], [22.5, 807.0], [22.6, 807.0], [22.7, 808.0], [22.8, 808.0], [22.9, 808.0], [23.0, 808.0], [23.1, 808.0], [23.2, 808.0], [23.3, 809.0], [23.4, 809.0], [23.5, 809.0], [23.6, 809.0], [23.7, 809.0], [23.8, 809.0], [23.9, 809.0], [24.0, 809.0], [24.1, 810.0], [24.2, 810.0], [24.3, 810.0], [24.4, 810.0], [24.5, 811.0], [24.6, 811.0], [24.7, 811.0], [24.8, 811.0], [24.9, 811.0], [25.0, 811.0], [25.1, 812.0], [25.2, 812.0], [25.3, 812.0], [25.4, 812.0], [25.5, 813.0], [25.6, 813.0], [25.7, 813.0], [25.8, 813.0], [25.9, 813.0], [26.0, 813.0], [26.1, 814.0], [26.2, 814.0], [26.3, 814.0], [26.4, 814.0], [26.5, 815.0], [26.6, 815.0], [26.7, 815.0], [26.8, 815.0], [26.9, 816.0], [27.0, 816.0], [27.1, 816.0], [27.2, 816.0], [27.3, 816.0], [27.4, 816.0], [27.5, 816.0], [27.6, 816.0], [27.7, 816.0], [27.8, 816.0], [27.9, 818.0], [28.0, 818.0], [28.1, 818.0], [28.2, 818.0], [28.3, 819.0], [28.4, 819.0], [28.5, 820.0], [28.6, 821.0], [28.7, 821.0], [28.8, 821.0], [28.9, 821.0], [29.0, 821.0], [29.1, 821.0], [29.2, 821.0], [29.3, 822.0], [29.4, 822.0], [29.5, 822.0], [29.6, 823.0], [29.7, 823.0], [29.8, 823.0], [29.9, 823.0], [30.0, 823.0], [30.1, 823.0], [30.2, 823.0], [30.3, 824.0], [30.4, 824.0], [30.5, 824.0], [30.6, 824.0], [30.7, 824.0], [30.8, 824.0], [30.9, 824.0], [31.0, 824.0], [31.1, 824.0], [31.2, 824.0], [31.3, 824.0], [31.4, 824.0], [31.5, 825.0], [31.6, 825.0], [31.7, 825.0], [31.8, 825.0], [31.9, 825.0], [32.0, 827.0], [32.1, 827.0], [32.2, 828.0], [32.3, 828.0], [32.4, 828.0], [32.5, 828.0], [32.6, 828.0], [32.7, 828.0], [32.8, 828.0], [32.9, 829.0], [33.0, 829.0], [33.1, 830.0], [33.2, 830.0], [33.3, 830.0], [33.4, 830.0], [33.5, 831.0], [33.6, 831.0], [33.7, 831.0], [33.8, 831.0], [33.9, 831.0], [34.0, 831.0], [34.1, 831.0], [34.2, 832.0], [34.3, 832.0], [34.4, 832.0], [34.5, 832.0], [34.6, 832.0], [34.7, 832.0], [34.8, 832.0], [34.9, 833.0], [35.0, 833.0], [35.1, 834.0], [35.2, 834.0], [35.3, 834.0], [35.4, 834.0], [35.5, 834.0], [35.6, 834.0], [35.7, 835.0], [35.8, 835.0], [35.9, 836.0], [36.0, 836.0], [36.1, 836.0], [36.2, 836.0], [36.3, 836.0], [36.4, 836.0], [36.5, 837.0], [36.6, 837.0], [36.7, 837.0], [36.8, 837.0], [36.9, 837.0], [37.0, 837.0], [37.1, 837.0], [37.2, 837.0], [37.3, 837.0], [37.4, 837.0], [37.5, 838.0], [37.6, 838.0], [37.7, 838.0], [37.8, 838.0], [37.9, 839.0], [38.0, 839.0], [38.1, 839.0], [38.2, 839.0], [38.3, 840.0], [38.4, 840.0], [38.5, 840.0], [38.6, 840.0], [38.7, 841.0], [38.8, 841.0], [38.9, 841.0], [39.0, 841.0], [39.1, 842.0], [39.2, 842.0], [39.3, 843.0], [39.4, 843.0], [39.5, 843.0], [39.6, 843.0], [39.7, 843.0], [39.8, 843.0], [39.9, 843.0], [40.0, 843.0], [40.1, 844.0], [40.2, 844.0], [40.3, 845.0], [40.4, 845.0], [40.5, 845.0], [40.6, 845.0], [40.7, 846.0], [40.8, 846.0], [40.9, 847.0], [41.0, 847.0], [41.1, 847.0], [41.2, 847.0], [41.3, 848.0], [41.4, 848.0], [41.5, 849.0], [41.6, 849.0], [41.7, 849.0], [41.8, 849.0], [41.9, 849.0], [42.0, 849.0], [42.1, 849.0], [42.2, 849.0], [42.3, 849.0], [42.4, 849.0], [42.5, 850.0], [42.6, 850.0], [42.7, 851.0], [42.8, 851.0], [42.9, 852.0], [43.0, 852.0], [43.1, 852.0], [43.2, 852.0], [43.3, 853.0], [43.4, 853.0], [43.5, 853.0], [43.6, 853.0], [43.7, 855.0], [43.8, 855.0], [43.9, 855.0], [44.0, 855.0], [44.1, 855.0], [44.2, 855.0], [44.3, 856.0], [44.4, 856.0], [44.5, 856.0], [44.6, 856.0], [44.7, 857.0], [44.8, 857.0], [44.9, 857.0], [45.0, 857.0], [45.1, 857.0], [45.2, 857.0], [45.3, 858.0], [45.4, 858.0], [45.5, 858.0], [45.6, 858.0], [45.7, 860.0], [45.8, 860.0], [45.9, 861.0], [46.0, 861.0], [46.1, 861.0], [46.2, 861.0], [46.3, 862.0], [46.4, 862.0], [46.5, 863.0], [46.6, 863.0], [46.7, 863.0], [46.8, 863.0], [46.9, 864.0], [47.0, 864.0], [47.1, 864.0], [47.2, 864.0], [47.3, 864.0], [47.4, 864.0], [47.5, 865.0], [47.6, 865.0], [47.7, 865.0], [47.8, 865.0], [47.9, 866.0], [48.0, 866.0], [48.1, 866.0], [48.2, 866.0], [48.3, 867.0], [48.4, 867.0], [48.5, 869.0], [48.6, 869.0], [48.7, 869.0], [48.8, 869.0], [48.9, 869.0], [49.0, 869.0], [49.1, 870.0], [49.2, 870.0], [49.3, 871.0], [49.4, 871.0], [49.5, 871.0], [49.6, 871.0], [49.7, 871.0], [49.8, 871.0], [49.9, 872.0], [50.0, 872.0], [50.1, 872.0], [50.2, 872.0], [50.3, 872.0], [50.4, 872.0], [50.5, 873.0], [50.6, 873.0], [50.7, 874.0], [50.8, 874.0], [50.9, 875.0], [51.0, 875.0], [51.1, 876.0], [51.2, 876.0], [51.3, 876.0], [51.4, 876.0], [51.5, 876.0], [51.6, 876.0], [51.7, 876.0], [51.8, 876.0], [51.9, 877.0], [52.0, 877.0], [52.1, 877.0], [52.2, 877.0], [52.3, 878.0], [52.4, 878.0], [52.5, 878.0], [52.6, 878.0], [52.7, 879.0], [52.8, 879.0], [52.9, 879.0], [53.0, 879.0], [53.1, 879.0], [53.2, 879.0], [53.3, 880.0], [53.4, 880.0], [53.5, 881.0], [53.6, 881.0], [53.7, 881.0], [53.8, 881.0], [53.9, 881.0], [54.0, 881.0], [54.1, 881.0], [54.2, 881.0], [54.3, 882.0], [54.4, 882.0], [54.5, 883.0], [54.6, 883.0], [54.7, 888.0], [54.8, 888.0], [54.9, 889.0], [55.0, 889.0], [55.1, 889.0], [55.2, 889.0], [55.3, 890.0], [55.4, 890.0], [55.5, 890.0], [55.6, 890.0], [55.7, 891.0], [55.8, 891.0], [55.9, 891.0], [56.0, 891.0], [56.1, 891.0], [56.2, 891.0], [56.3, 892.0], [56.4, 892.0], [56.5, 893.0], [56.6, 893.0], [56.7, 893.0], [56.8, 893.0], [56.9, 893.0], [57.0, 893.0], [57.1, 893.0], [57.2, 893.0], [57.3, 893.0], [57.4, 893.0], [57.5, 894.0], [57.6, 894.0], [57.7, 894.0], [57.8, 894.0], [57.9, 895.0], [58.0, 895.0], [58.1, 896.0], [58.2, 896.0], [58.3, 896.0], [58.4, 896.0], [58.5, 897.0], [58.6, 897.0], [58.7, 899.0], [58.8, 899.0], [58.9, 899.0], [59.0, 899.0], [59.1, 899.0], [59.2, 899.0], [59.3, 901.0], [59.4, 901.0], [59.5, 902.0], [59.6, 902.0], [59.7, 902.0], [59.8, 902.0], [59.9, 902.0], [60.0, 902.0], [60.1, 903.0], [60.2, 903.0], [60.3, 903.0], [60.4, 903.0], [60.5, 903.0], [60.6, 903.0], [60.7, 903.0], [60.8, 903.0], [60.9, 904.0], [61.0, 904.0], [61.1, 905.0], [61.2, 905.0], [61.3, 905.0], [61.4, 905.0], [61.5, 906.0], [61.6, 906.0], [61.7, 906.0], [61.8, 906.0], [61.9, 907.0], [62.0, 907.0], [62.1, 907.0], [62.2, 907.0], [62.3, 907.0], [62.4, 907.0], [62.5, 909.0], [62.6, 909.0], [62.7, 910.0], [62.8, 910.0], [62.9, 910.0], [63.0, 910.0], [63.1, 910.0], [63.2, 910.0], [63.3, 910.0], [63.4, 910.0], [63.5, 911.0], [63.6, 911.0], [63.7, 912.0], [63.8, 912.0], [63.9, 912.0], [64.0, 912.0], [64.1, 912.0], [64.2, 912.0], [64.3, 913.0], [64.4, 913.0], [64.5, 915.0], [64.6, 915.0], [64.7, 915.0], [64.8, 915.0], [64.9, 915.0], [65.0, 915.0], [65.1, 918.0], [65.2, 918.0], [65.3, 918.0], [65.4, 918.0], [65.5, 918.0], [65.6, 918.0], [65.7, 918.0], [65.8, 918.0], [65.9, 918.0], [66.0, 918.0], [66.1, 919.0], [66.2, 919.0], [66.3, 919.0], [66.4, 919.0], [66.5, 919.0], [66.6, 919.0], [66.7, 919.0], [66.8, 919.0], [66.9, 919.0], [67.0, 919.0], [67.1, 920.0], [67.2, 920.0], [67.3, 920.0], [67.4, 920.0], [67.5, 920.0], [67.6, 920.0], [67.7, 920.0], [67.8, 920.0], [67.9, 921.0], [68.0, 921.0], [68.1, 921.0], [68.2, 921.0], [68.3, 922.0], [68.4, 922.0], [68.5, 922.0], [68.6, 922.0], [68.7, 922.0], [68.8, 922.0], [68.9, 923.0], [69.0, 923.0], [69.1, 924.0], [69.2, 924.0], [69.3, 925.0], [69.4, 925.0], [69.5, 926.0], [69.6, 926.0], [69.7, 926.0], [69.8, 926.0], [69.9, 927.0], [70.0, 927.0], [70.1, 927.0], [70.2, 927.0], [70.3, 928.0], [70.4, 928.0], [70.5, 929.0], [70.6, 929.0], [70.7, 931.0], [70.8, 931.0], [70.9, 932.0], [71.0, 932.0], [71.1, 933.0], [71.2, 933.0], [71.3, 934.0], [71.4, 934.0], [71.5, 934.0], [71.6, 934.0], [71.7, 935.0], [71.8, 935.0], [71.9, 936.0], [72.0, 936.0], [72.1, 936.0], [72.2, 936.0], [72.3, 936.0], [72.4, 936.0], [72.5, 936.0], [72.6, 936.0], [72.7, 938.0], [72.8, 938.0], [72.9, 938.0], [73.0, 938.0], [73.1, 939.0], [73.2, 939.0], [73.3, 941.0], [73.4, 941.0], [73.5, 941.0], [73.6, 941.0], [73.7, 941.0], [73.8, 941.0], [73.9, 941.0], [74.0, 941.0], [74.1, 942.0], [74.2, 942.0], [74.3, 943.0], [74.4, 943.0], [74.5, 949.0], [74.6, 949.0], [74.7, 949.0], [74.8, 949.0], [74.9, 950.0], [75.0, 950.0], [75.1, 951.0], [75.2, 951.0], [75.3, 951.0], [75.4, 951.0], [75.5, 952.0], [75.6, 952.0], [75.7, 952.0], [75.8, 952.0], [75.9, 954.0], [76.0, 954.0], [76.1, 954.0], [76.2, 954.0], [76.3, 955.0], [76.4, 955.0], [76.5, 957.0], [76.6, 957.0], [76.7, 957.0], [76.8, 957.0], [76.9, 957.0], [77.0, 957.0], [77.1, 959.0], [77.2, 959.0], [77.3, 959.0], [77.4, 959.0], [77.5, 959.0], [77.6, 959.0], [77.7, 959.0], [77.8, 959.0], [77.9, 962.0], [78.0, 962.0], [78.1, 962.0], [78.2, 962.0], [78.3, 963.0], [78.4, 963.0], [78.5, 964.0], [78.6, 964.0], [78.7, 965.0], [78.8, 965.0], [78.9, 965.0], [79.0, 965.0], [79.1, 966.0], [79.2, 966.0], [79.3, 966.0], [79.4, 966.0], [79.5, 966.0], [79.6, 966.0], [79.7, 971.0], [79.8, 971.0], [79.9, 972.0], [80.0, 972.0], [80.1, 972.0], [80.2, 972.0], [80.3, 972.0], [80.4, 972.0], [80.5, 979.0], [80.6, 979.0], [80.7, 981.0], [80.8, 981.0], [80.9, 983.0], [81.0, 983.0], [81.1, 987.0], [81.2, 987.0], [81.3, 994.0], [81.4, 994.0], [81.5, 994.0], [81.6, 994.0], [81.7, 996.0], [81.8, 996.0], [81.9, 1001.0], [82.0, 1001.0], [82.1, 1001.0], [82.2, 1001.0], [82.3, 1002.0], [82.4, 1002.0], [82.5, 1004.0], [82.6, 1004.0], [82.7, 1007.0], [82.8, 1007.0], [82.9, 1008.0], [83.0, 1008.0], [83.1, 1011.0], [83.2, 1011.0], [83.3, 1011.0], [83.4, 1011.0], [83.5, 1013.0], [83.6, 1013.0], [83.7, 1013.0], [83.8, 1013.0], [83.9, 1014.0], [84.0, 1014.0], [84.1, 1017.0], [84.2, 1017.0], [84.3, 1018.0], [84.4, 1018.0], [84.5, 1022.0], [84.6, 1022.0], [84.7, 1025.0], [84.8, 1025.0], [84.9, 1026.0], [85.0, 1026.0], [85.1, 1028.0], [85.2, 1028.0], [85.3, 1028.0], [85.4, 1028.0], [85.5, 1032.0], [85.6, 1032.0], [85.7, 1035.0], [85.8, 1035.0], [85.9, 1039.0], [86.0, 1039.0], [86.1, 1041.0], [86.2, 1041.0], [86.3, 1042.0], [86.4, 1042.0], [86.5, 1043.0], [86.6, 1043.0], [86.7, 1046.0], [86.8, 1046.0], [86.9, 1048.0], [87.0, 1048.0], [87.1, 1051.0], [87.2, 1051.0], [87.3, 1052.0], [87.4, 1052.0], [87.5, 1052.0], [87.6, 1052.0], [87.7, 1065.0], [87.8, 1065.0], [87.9, 1067.0], [88.0, 1067.0], [88.1, 1078.0], [88.2, 1078.0], [88.3, 1079.0], [88.4, 1079.0], [88.5, 1081.0], [88.6, 1081.0], [88.7, 1081.0], [88.8, 1081.0], [88.9, 1084.0], [89.0, 1084.0], [89.1, 1089.0], [89.2, 1089.0], [89.3, 1094.0], [89.4, 1094.0], [89.5, 1099.0], [89.6, 1099.0], [89.7, 1103.0], [89.8, 1103.0], [89.9, 1103.0], [90.0, 1103.0], [90.1, 1108.0], [90.2, 1108.0], [90.3, 1111.0], [90.4, 1111.0], [90.5, 1113.0], [90.6, 1113.0], [90.7, 1120.0], [90.8, 1120.0], [90.9, 1120.0], [91.0, 1120.0], [91.1, 1121.0], [91.2, 1121.0], [91.3, 1124.0], [91.4, 1124.0], [91.5, 1125.0], [91.6, 1125.0], [91.7, 1125.0], [91.8, 1125.0], [91.9, 1132.0], [92.0, 1132.0], [92.1, 1132.0], [92.2, 1132.0], [92.3, 1136.0], [92.4, 1136.0], [92.5, 1137.0], [92.6, 1137.0], [92.7, 1137.0], [92.8, 1137.0], [92.9, 1140.0], [93.0, 1140.0], [93.1, 1146.0], [93.2, 1146.0], [93.3, 1148.0], [93.4, 1148.0], [93.5, 1148.0], [93.6, 1148.0], [93.7, 1149.0], [93.8, 1149.0], [93.9, 1163.0], [94.0, 1163.0], [94.1, 1164.0], [94.2, 1164.0], [94.3, 1170.0], [94.4, 1170.0], [94.5, 1170.0], [94.6, 1170.0], [94.7, 1174.0], [94.8, 1174.0], [94.9, 1177.0], [95.0, 1177.0], [95.1, 1178.0], [95.2, 1178.0], [95.3, 1183.0], [95.4, 1183.0], [95.5, 1189.0], [95.6, 1189.0], [95.7, 1192.0], [95.8, 1192.0], [95.9, 1194.0], [96.0, 1194.0], [96.1, 1210.0], [96.2, 1210.0], [96.3, 1216.0], [96.4, 1216.0], [96.5, 1217.0], [96.6, 1217.0], [96.7, 1222.0], [96.8, 1222.0], [96.9, 1260.0], [97.0, 1260.0], [97.1, 1261.0], [97.2, 1261.0], [97.3, 1261.0], [97.4, 1261.0], [97.5, 1264.0], [97.6, 1264.0], [97.7, 1267.0], [97.8, 1267.0], [97.9, 1269.0], [98.0, 1269.0], [98.1, 1276.0], [98.2, 1276.0], [98.3, 1283.0], [98.4, 1283.0], [98.5, 1289.0], [98.6, 1289.0], [98.7, 1315.0], [98.8, 1315.0], [98.9, 1321.0], [99.0, 1321.0], [99.1, 1356.0], [99.2, 1356.0], [99.3, 1360.0], [99.4, 1360.0], [99.5, 1366.0], [99.6, 1366.0], [99.7, 1446.0], [99.8, 1446.0], [99.9, 1547.0], [100.0, 1547.0]], "isOverall": false, "label": "Homepage Load - UFC", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 201.0, "series": [{"data": [[1100.0, 32.0], [1200.0, 13.0], [600.0, 1.0], [1300.0, 5.0], [700.0, 94.0], [1400.0, 1.0], [1500.0, 1.0], [800.0, 201.0], [900.0, 113.0], [1000.0, 39.0]], "isOverall": false, "label": "Homepage Load - UFC", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 19.743961352657003, "minX": 1.7617506E12, "maxY": 20.225255972696246, "series": [{"data": [[1.7617506E12, 19.743961352657003], [1.76175066E12, 20.225255972696246]], "isOverall": false, "label": "Homepage Load Test Group - UFC", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76175066E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 804.0, "minX": 1.0, "maxY": 1112.75, "series": [{"data": [[2.0, 1004.0], [3.0, 1112.75], [4.0, 804.0], [5.0, 855.5], [6.0, 972.0], [7.0, 889.8333333333334], [8.0, 957.0], [9.0, 905.7777777777778], [10.0, 906.1333333333333], [11.0, 847.8333333333333], [12.0, 851.4999999999999], [13.0, 808.0], [14.0, 873.3333333333334], [15.0, 858.1818181818181], [16.0, 922.2222222222223], [1.0, 840.0], [17.0, 937.1666666666666], [18.0, 849.75], [19.0, 844.925925925926], [20.0, 864.6249999999999], [21.0, 830.5555555555555], [22.0, 875.3333333333334], [23.0, 917.0080645161289], [24.0, 900.6701030927835], [25.0, 943.5238095238096], [26.0, 1043.0]], "isOverall": false, "label": "Homepage Load - UFC", "isController": false}, {"data": [[20.02599999999999, 903.756]], "isOverall": false, "label": "Homepage Load - UFC-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 26.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1259.25, "minX": 1.7617506E12, "maxY": 69891.41666666667, "series": [{"data": [[1.7617506E12, 49377.583333333336], [1.76175066E12, 69891.41666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7617506E12, 1259.25], [1.76175066E12, 1782.4166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76175066E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 894.0386473429954, "minX": 1.7617506E12, "maxY": 910.621160409557, "series": [{"data": [[1.7617506E12, 894.0386473429954], [1.76175066E12, 910.621160409557]], "isOverall": false, "label": "Homepage Load - UFC", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175066E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 798.7826086956521, "minX": 1.7617506E12, "maxY": 816.5426621160409, "series": [{"data": [[1.7617506E12, 798.7826086956521], [1.76175066E12, 816.5426621160409]], "isOverall": false, "label": "Homepage Load - UFC", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175066E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 18.15017064846416, "minX": 1.7617506E12, "maxY": 47.88405797101454, "series": [{"data": [[1.7617506E12, 47.88405797101454], [1.76175066E12, 18.15017064846416]], "isOverall": false, "label": "Homepage Load - UFC", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175066E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 698.0, "minX": 1.7617506E12, "maxY": 1547.0, "series": [{"data": [[1.7617506E12, 1547.0], [1.76175066E12, 1446.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7617506E12, 711.0], [1.76175066E12, 698.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7617506E12, 1127.2000000000003], [1.76175066E12, 1082.8000000000002]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7617506E12, 1356.3999999999994], [1.76175066E12, 1356.6]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7617506E12, 849.0], [1.76175066E12, 881.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7617506E12, 1203.6], [1.76175066E12, 1171.2]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76175066E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 810.5, "minX": 1.0, "maxY": 1053.5, "series": [{"data": [[2.0, 857.0], [8.0, 869.0], [9.0, 903.0], [10.0, 870.5], [11.0, 864.5], [3.0, 881.0], [12.0, 892.0], [13.0, 1053.5], [14.0, 975.5], [1.0, 840.0], [4.0, 810.5], [5.0, 911.0], [6.0, 850.5], [7.0, 832.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 717.0, "minX": 1.0, "maxY": 955.0, "series": [{"data": [[2.0, 762.5], [8.0, 773.0], [9.0, 807.0], [10.0, 778.5], [11.0, 772.5], [3.0, 779.0], [12.0, 796.0], [13.0, 955.0], [14.0, 880.0], [1.0, 747.0], [4.0, 717.0], [5.0, 813.0], [6.0, 758.0], [7.0, 734.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.6333333333333333, "minX": 1.7617506E12, "maxY": 4.7, "series": [{"data": [[1.7617506E12, 3.6333333333333333], [1.76175066E12, 4.7]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76175066E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.45, "minX": 1.7617506E12, "maxY": 4.883333333333334, "series": [{"data": [[1.7617506E12, 3.45], [1.76175066E12, 4.883333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76175066E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.45, "minX": 1.7617506E12, "maxY": 4.883333333333334, "series": [{"data": [[1.7617506E12, 3.45], [1.76175066E12, 4.883333333333334]], "isOverall": false, "label": "Homepage Load - UFC-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175066E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.45, "minX": 1.7617506E12, "maxY": 4.883333333333334, "series": [{"data": [[1.7617506E12, 3.45], [1.76175066E12, 4.883333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175066E12, "title": "Total Transactions Per Second"}},
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

