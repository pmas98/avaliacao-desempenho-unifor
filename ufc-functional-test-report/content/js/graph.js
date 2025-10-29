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
        data: {"result": {"minY": 8267.0, "minX": 0.0, "maxY": 29810.0, "series": [{"data": [[0.0, 8267.0], [0.1, 8267.0], [0.2, 8267.0], [0.3, 8267.0], [0.4, 8267.0], [0.5, 8267.0], [0.6, 8267.0], [0.7, 8267.0], [0.8, 8267.0], [0.9, 8267.0], [1.0, 8308.0], [1.1, 8308.0], [1.2, 8308.0], [1.3, 8308.0], [1.4, 8308.0], [1.5, 8308.0], [1.6, 8308.0], [1.7, 8308.0], [1.8, 8308.0], [1.9, 8308.0], [2.0, 8408.0], [2.1, 8408.0], [2.2, 8408.0], [2.3, 8408.0], [2.4, 8408.0], [2.5, 8408.0], [2.6, 8408.0], [2.7, 8408.0], [2.8, 8408.0], [2.9, 8408.0], [3.0, 8743.0], [3.1, 8743.0], [3.2, 8743.0], [3.3, 8743.0], [3.4, 8743.0], [3.5, 8743.0], [3.6, 8743.0], [3.7, 8743.0], [3.8, 8743.0], [3.9, 8743.0], [4.0, 8788.0], [4.1, 8788.0], [4.2, 8788.0], [4.3, 8788.0], [4.4, 8788.0], [4.5, 8788.0], [4.6, 8788.0], [4.7, 8788.0], [4.8, 8788.0], [4.9, 8788.0], [5.0, 8912.0], [5.1, 8912.0], [5.2, 8912.0], [5.3, 8912.0], [5.4, 8912.0], [5.5, 8912.0], [5.6, 8912.0], [5.7, 8912.0], [5.8, 8912.0], [5.9, 8912.0], [6.0, 8968.0], [6.1, 8968.0], [6.2, 8968.0], [6.3, 8968.0], [6.4, 8968.0], [6.5, 8968.0], [6.6, 8968.0], [6.7, 8968.0], [6.8, 8968.0], [6.9, 8968.0], [7.0, 9045.0], [7.1, 9045.0], [7.2, 9045.0], [7.3, 9045.0], [7.4, 9045.0], [7.5, 9045.0], [7.6, 9045.0], [7.7, 9045.0], [7.8, 9045.0], [7.9, 9045.0], [8.0, 10411.0], [8.1, 10411.0], [8.2, 10411.0], [8.3, 10411.0], [8.4, 10411.0], [8.5, 10411.0], [8.6, 10411.0], [8.7, 10411.0], [8.8, 10411.0], [8.9, 10411.0], [9.0, 10903.0], [9.1, 10903.0], [9.2, 10903.0], [9.3, 10903.0], [9.4, 10903.0], [9.5, 10903.0], [9.6, 10903.0], [9.7, 10903.0], [9.8, 10903.0], [9.9, 10903.0], [10.0, 12295.0], [10.1, 12295.0], [10.2, 12295.0], [10.3, 12295.0], [10.4, 12295.0], [10.5, 12295.0], [10.6, 12295.0], [10.7, 12295.0], [10.8, 12295.0], [10.9, 12295.0], [11.0, 12354.0], [11.1, 12354.0], [11.2, 12354.0], [11.3, 12354.0], [11.4, 12354.0], [11.5, 12354.0], [11.6, 12354.0], [11.7, 12354.0], [11.8, 12354.0], [11.9, 12354.0], [12.0, 13781.0], [12.1, 13781.0], [12.2, 13781.0], [12.3, 13781.0], [12.4, 13781.0], [12.5, 13781.0], [12.6, 13781.0], [12.7, 13781.0], [12.8, 13781.0], [12.9, 13781.0], [13.0, 14012.0], [13.1, 14012.0], [13.2, 14012.0], [13.3, 14012.0], [13.4, 14012.0], [13.5, 14012.0], [13.6, 14012.0], [13.7, 14012.0], [13.8, 14012.0], [13.9, 14012.0], [14.0, 14992.0], [14.1, 14992.0], [14.2, 14992.0], [14.3, 14992.0], [14.4, 14992.0], [14.5, 14992.0], [14.6, 14992.0], [14.7, 14992.0], [14.8, 14992.0], [14.9, 14992.0], [15.0, 15256.0], [15.1, 15256.0], [15.2, 15256.0], [15.3, 15256.0], [15.4, 15256.0], [15.5, 15256.0], [15.6, 15256.0], [15.7, 15256.0], [15.8, 15256.0], [15.9, 15256.0], [16.0, 15275.0], [16.1, 15275.0], [16.2, 15275.0], [16.3, 15275.0], [16.4, 15275.0], [16.5, 15275.0], [16.6, 15275.0], [16.7, 15275.0], [16.8, 15275.0], [16.9, 15275.0], [17.0, 15686.0], [17.1, 15686.0], [17.2, 15686.0], [17.3, 15686.0], [17.4, 15686.0], [17.5, 15686.0], [17.6, 15686.0], [17.7, 15686.0], [17.8, 15686.0], [17.9, 15686.0], [18.0, 16743.0], [18.1, 16743.0], [18.2, 16743.0], [18.3, 16743.0], [18.4, 16743.0], [18.5, 16743.0], [18.6, 16743.0], [18.7, 16743.0], [18.8, 16743.0], [18.9, 16743.0], [19.0, 16866.0], [19.1, 16866.0], [19.2, 16866.0], [19.3, 16866.0], [19.4, 16866.0], [19.5, 16866.0], [19.6, 16866.0], [19.7, 16866.0], [19.8, 16866.0], [19.9, 16866.0], [20.0, 17018.0], [20.1, 17018.0], [20.2, 17018.0], [20.3, 17018.0], [20.4, 17018.0], [20.5, 17018.0], [20.6, 17018.0], [20.7, 17018.0], [20.8, 17018.0], [20.9, 17018.0], [21.0, 17132.0], [21.1, 17132.0], [21.2, 17132.0], [21.3, 17132.0], [21.4, 17132.0], [21.5, 17132.0], [21.6, 17132.0], [21.7, 17132.0], [21.8, 17132.0], [21.9, 17132.0], [22.0, 18731.0], [22.1, 18731.0], [22.2, 18731.0], [22.3, 18731.0], [22.4, 18731.0], [22.5, 18731.0], [22.6, 18731.0], [22.7, 18731.0], [22.8, 18731.0], [22.9, 18731.0], [23.0, 18870.0], [23.1, 18870.0], [23.2, 18870.0], [23.3, 18870.0], [23.4, 18870.0], [23.5, 18870.0], [23.6, 18870.0], [23.7, 18870.0], [23.8, 18870.0], [23.9, 18870.0], [24.0, 18956.0], [24.1, 18956.0], [24.2, 18956.0], [24.3, 18956.0], [24.4, 18956.0], [24.5, 18956.0], [24.6, 18956.0], [24.7, 18956.0], [24.8, 18956.0], [24.9, 18956.0], [25.0, 19088.0], [25.1, 19088.0], [25.2, 19088.0], [25.3, 19088.0], [25.4, 19088.0], [25.5, 19088.0], [25.6, 19088.0], [25.7, 19088.0], [25.8, 19088.0], [25.9, 19088.0], [26.0, 19604.0], [26.1, 19604.0], [26.2, 19604.0], [26.3, 19604.0], [26.4, 19604.0], [26.5, 19604.0], [26.6, 19604.0], [26.7, 19604.0], [26.8, 19604.0], [26.9, 19604.0], [27.0, 19630.0], [27.1, 19630.0], [27.2, 19630.0], [27.3, 19630.0], [27.4, 19630.0], [27.5, 19630.0], [27.6, 19630.0], [27.7, 19630.0], [27.8, 19630.0], [27.9, 19630.0], [28.0, 19884.0], [28.1, 19884.0], [28.2, 19884.0], [28.3, 19884.0], [28.4, 19884.0], [28.5, 19884.0], [28.6, 19884.0], [28.7, 19884.0], [28.8, 19884.0], [28.9, 19884.0], [29.0, 20167.0], [29.1, 20167.0], [29.2, 20167.0], [29.3, 20167.0], [29.4, 20167.0], [29.5, 20167.0], [29.6, 20167.0], [29.7, 20167.0], [29.8, 20167.0], [29.9, 20167.0], [30.0, 20769.0], [30.1, 20769.0], [30.2, 20769.0], [30.3, 20769.0], [30.4, 20769.0], [30.5, 20769.0], [30.6, 20769.0], [30.7, 20769.0], [30.8, 20769.0], [30.9, 20769.0], [31.0, 21157.0], [31.1, 21157.0], [31.2, 21157.0], [31.3, 21157.0], [31.4, 21157.0], [31.5, 21157.0], [31.6, 21157.0], [31.7, 21157.0], [31.8, 21157.0], [31.9, 21157.0], [32.0, 21701.0], [32.1, 21701.0], [32.2, 21701.0], [32.3, 21701.0], [32.4, 21701.0], [32.5, 21701.0], [32.6, 21701.0], [32.7, 21701.0], [32.8, 21701.0], [32.9, 21701.0], [33.0, 22587.0], [33.1, 22587.0], [33.2, 22587.0], [33.3, 22587.0], [33.4, 22587.0], [33.5, 22587.0], [33.6, 22587.0], [33.7, 22587.0], [33.8, 22587.0], [33.9, 22587.0], [34.0, 23378.0], [34.1, 23378.0], [34.2, 23378.0], [34.3, 23378.0], [34.4, 23378.0], [34.5, 23378.0], [34.6, 23378.0], [34.7, 23378.0], [34.8, 23378.0], [34.9, 23378.0], [35.0, 24131.0], [35.1, 24131.0], [35.2, 24131.0], [35.3, 24131.0], [35.4, 24131.0], [35.5, 24131.0], [35.6, 24131.0], [35.7, 24131.0], [35.8, 24131.0], [35.9, 24131.0], [36.0, 24991.0], [36.1, 24991.0], [36.2, 24991.0], [36.3, 24991.0], [36.4, 24991.0], [36.5, 24991.0], [36.6, 24991.0], [36.7, 24991.0], [36.8, 24991.0], [36.9, 24991.0], [37.0, 25362.0], [37.1, 25362.0], [37.2, 25362.0], [37.3, 25362.0], [37.4, 25362.0], [37.5, 25362.0], [37.6, 25362.0], [37.7, 25362.0], [37.8, 25362.0], [37.9, 25362.0], [38.0, 25415.0], [38.1, 25415.0], [38.2, 25415.0], [38.3, 25415.0], [38.4, 25415.0], [38.5, 25415.0], [38.6, 25415.0], [38.7, 25415.0], [38.8, 25415.0], [38.9, 25415.0], [39.0, 25544.0], [39.1, 25544.0], [39.2, 25544.0], [39.3, 25544.0], [39.4, 25544.0], [39.5, 25544.0], [39.6, 25544.0], [39.7, 25544.0], [39.8, 25544.0], [39.9, 25544.0], [40.0, 25819.0], [40.1, 25819.0], [40.2, 25819.0], [40.3, 25819.0], [40.4, 25819.0], [40.5, 25819.0], [40.6, 25819.0], [40.7, 25819.0], [40.8, 25819.0], [40.9, 25819.0], [41.0, 26252.0], [41.1, 26252.0], [41.2, 26252.0], [41.3, 26252.0], [41.4, 26252.0], [41.5, 26252.0], [41.6, 26252.0], [41.7, 26252.0], [41.8, 26252.0], [41.9, 26252.0], [42.0, 26601.0], [42.1, 26601.0], [42.2, 26601.0], [42.3, 26601.0], [42.4, 26601.0], [42.5, 26601.0], [42.6, 26601.0], [42.7, 26601.0], [42.8, 26601.0], [42.9, 26601.0], [43.0, 26658.0], [43.1, 26658.0], [43.2, 26658.0], [43.3, 26658.0], [43.4, 26658.0], [43.5, 26658.0], [43.6, 26658.0], [43.7, 26658.0], [43.8, 26658.0], [43.9, 26658.0], [44.0, 27021.0], [44.1, 27021.0], [44.2, 27021.0], [44.3, 27021.0], [44.4, 27021.0], [44.5, 27021.0], [44.6, 27021.0], [44.7, 27021.0], [44.8, 27021.0], [44.9, 27021.0], [45.0, 27061.0], [45.1, 27061.0], [45.2, 27061.0], [45.3, 27061.0], [45.4, 27061.0], [45.5, 27061.0], [45.6, 27061.0], [45.7, 27061.0], [45.8, 27061.0], [45.9, 27061.0], [46.0, 27664.0], [46.1, 27664.0], [46.2, 27664.0], [46.3, 27664.0], [46.4, 27664.0], [46.5, 27664.0], [46.6, 27664.0], [46.7, 27664.0], [46.8, 27664.0], [46.9, 27664.0], [47.0, 27664.0], [47.1, 27664.0], [47.2, 27664.0], [47.3, 27664.0], [47.4, 27664.0], [47.5, 27664.0], [47.6, 27664.0], [47.7, 27664.0], [47.8, 27664.0], [47.9, 27664.0], [48.0, 27898.0], [48.1, 27898.0], [48.2, 27898.0], [48.3, 27898.0], [48.4, 27898.0], [48.5, 27898.0], [48.6, 27898.0], [48.7, 27898.0], [48.8, 27898.0], [48.9, 27898.0], [49.0, 27908.0], [49.1, 27908.0], [49.2, 27908.0], [49.3, 27908.0], [49.4, 27908.0], [49.5, 27908.0], [49.6, 27908.0], [49.7, 27908.0], [49.8, 27908.0], [49.9, 27908.0], [50.0, 28042.0], [50.1, 28042.0], [50.2, 28042.0], [50.3, 28042.0], [50.4, 28042.0], [50.5, 28042.0], [50.6, 28042.0], [50.7, 28042.0], [50.8, 28042.0], [50.9, 28042.0], [51.0, 28112.0], [51.1, 28112.0], [51.2, 28112.0], [51.3, 28112.0], [51.4, 28112.0], [51.5, 28112.0], [51.6, 28112.0], [51.7, 28112.0], [51.8, 28112.0], [51.9, 28112.0], [52.0, 28189.0], [52.1, 28189.0], [52.2, 28189.0], [52.3, 28189.0], [52.4, 28189.0], [52.5, 28189.0], [52.6, 28189.0], [52.7, 28189.0], [52.8, 28189.0], [52.9, 28189.0], [53.0, 28224.0], [53.1, 28224.0], [53.2, 28224.0], [53.3, 28224.0], [53.4, 28224.0], [53.5, 28224.0], [53.6, 28224.0], [53.7, 28224.0], [53.8, 28224.0], [53.9, 28224.0], [54.0, 28232.0], [54.1, 28232.0], [54.2, 28232.0], [54.3, 28232.0], [54.4, 28232.0], [54.5, 28232.0], [54.6, 28232.0], [54.7, 28232.0], [54.8, 28232.0], [54.9, 28232.0], [55.0, 28246.0], [55.1, 28246.0], [55.2, 28246.0], [55.3, 28246.0], [55.4, 28246.0], [55.5, 28246.0], [55.6, 28246.0], [55.7, 28246.0], [55.8, 28246.0], [55.9, 28246.0], [56.0, 28247.0], [56.1, 28247.0], [56.2, 28247.0], [56.3, 28247.0], [56.4, 28247.0], [56.5, 28247.0], [56.6, 28247.0], [56.7, 28247.0], [56.8, 28247.0], [56.9, 28247.0], [57.0, 28248.0], [57.1, 28248.0], [57.2, 28248.0], [57.3, 28248.0], [57.4, 28248.0], [57.5, 28248.0], [57.6, 28248.0], [57.7, 28248.0], [57.8, 28248.0], [57.9, 28248.0], [58.0, 28249.0], [58.1, 28249.0], [58.2, 28249.0], [58.3, 28249.0], [58.4, 28249.0], [58.5, 28249.0], [58.6, 28249.0], [58.7, 28249.0], [58.8, 28249.0], [58.9, 28249.0], [59.0, 28314.0], [59.1, 28314.0], [59.2, 28314.0], [59.3, 28314.0], [59.4, 28314.0], [59.5, 28314.0], [59.6, 28314.0], [59.7, 28314.0], [59.8, 28314.0], [59.9, 28314.0], [60.0, 28321.0], [60.1, 28321.0], [60.2, 28321.0], [60.3, 28321.0], [60.4, 28321.0], [60.5, 28321.0], [60.6, 28321.0], [60.7, 28321.0], [60.8, 28321.0], [60.9, 28321.0], [61.0, 28349.0], [61.1, 28349.0], [61.2, 28349.0], [61.3, 28349.0], [61.4, 28349.0], [61.5, 28349.0], [61.6, 28349.0], [61.7, 28349.0], [61.8, 28349.0], [61.9, 28349.0], [62.0, 28370.0], [62.1, 28370.0], [62.2, 28370.0], [62.3, 28370.0], [62.4, 28370.0], [62.5, 28370.0], [62.6, 28370.0], [62.7, 28370.0], [62.8, 28370.0], [62.9, 28370.0], [63.0, 28384.0], [63.1, 28384.0], [63.2, 28384.0], [63.3, 28384.0], [63.4, 28384.0], [63.5, 28384.0], [63.6, 28384.0], [63.7, 28384.0], [63.8, 28384.0], [63.9, 28384.0], [64.0, 28396.0], [64.1, 28396.0], [64.2, 28396.0], [64.3, 28396.0], [64.4, 28396.0], [64.5, 28396.0], [64.6, 28396.0], [64.7, 28396.0], [64.8, 28396.0], [64.9, 28396.0], [65.0, 28427.0], [65.1, 28427.0], [65.2, 28427.0], [65.3, 28427.0], [65.4, 28427.0], [65.5, 28427.0], [65.6, 28427.0], [65.7, 28427.0], [65.8, 28427.0], [65.9, 28427.0], [66.0, 28446.0], [66.1, 28446.0], [66.2, 28446.0], [66.3, 28446.0], [66.4, 28446.0], [66.5, 28446.0], [66.6, 28446.0], [66.7, 28446.0], [66.8, 28446.0], [66.9, 28446.0], [67.0, 28489.0], [67.1, 28489.0], [67.2, 28489.0], [67.3, 28489.0], [67.4, 28489.0], [67.5, 28489.0], [67.6, 28489.0], [67.7, 28489.0], [67.8, 28489.0], [67.9, 28489.0], [68.0, 28489.0], [68.1, 28489.0], [68.2, 28489.0], [68.3, 28489.0], [68.4, 28489.0], [68.5, 28489.0], [68.6, 28489.0], [68.7, 28489.0], [68.8, 28489.0], [68.9, 28489.0], [69.0, 28513.0], [69.1, 28513.0], [69.2, 28513.0], [69.3, 28513.0], [69.4, 28513.0], [69.5, 28513.0], [69.6, 28513.0], [69.7, 28513.0], [69.8, 28513.0], [69.9, 28513.0], [70.0, 28530.0], [70.1, 28530.0], [70.2, 28530.0], [70.3, 28530.0], [70.4, 28530.0], [70.5, 28530.0], [70.6, 28530.0], [70.7, 28530.0], [70.8, 28530.0], [70.9, 28530.0], [71.0, 28625.0], [71.1, 28625.0], [71.2, 28625.0], [71.3, 28625.0], [71.4, 28625.0], [71.5, 28625.0], [71.6, 28625.0], [71.7, 28625.0], [71.8, 28625.0], [71.9, 28625.0], [72.0, 28626.0], [72.1, 28626.0], [72.2, 28626.0], [72.3, 28626.0], [72.4, 28626.0], [72.5, 28626.0], [72.6, 28626.0], [72.7, 28626.0], [72.8, 28626.0], [72.9, 28626.0], [73.0, 28648.0], [73.1, 28648.0], [73.2, 28648.0], [73.3, 28648.0], [73.4, 28648.0], [73.5, 28648.0], [73.6, 28648.0], [73.7, 28648.0], [73.8, 28648.0], [73.9, 28648.0], [74.0, 28687.0], [74.1, 28687.0], [74.2, 28687.0], [74.3, 28687.0], [74.4, 28687.0], [74.5, 28687.0], [74.6, 28687.0], [74.7, 28687.0], [74.8, 28687.0], [74.9, 28687.0], [75.0, 28693.0], [75.1, 28693.0], [75.2, 28693.0], [75.3, 28693.0], [75.4, 28693.0], [75.5, 28693.0], [75.6, 28693.0], [75.7, 28693.0], [75.8, 28693.0], [75.9, 28693.0], [76.0, 28722.0], [76.1, 28722.0], [76.2, 28722.0], [76.3, 28722.0], [76.4, 28722.0], [76.5, 28722.0], [76.6, 28722.0], [76.7, 28722.0], [76.8, 28722.0], [76.9, 28722.0], [77.0, 28743.0], [77.1, 28743.0], [77.2, 28743.0], [77.3, 28743.0], [77.4, 28743.0], [77.5, 28743.0], [77.6, 28743.0], [77.7, 28743.0], [77.8, 28743.0], [77.9, 28743.0], [78.0, 28749.0], [78.1, 28749.0], [78.2, 28749.0], [78.3, 28749.0], [78.4, 28749.0], [78.5, 28749.0], [78.6, 28749.0], [78.7, 28749.0], [78.8, 28749.0], [78.9, 28749.0], [79.0, 28764.0], [79.1, 28764.0], [79.2, 28764.0], [79.3, 28764.0], [79.4, 28764.0], [79.5, 28764.0], [79.6, 28764.0], [79.7, 28764.0], [79.8, 28764.0], [79.9, 28764.0], [80.0, 28782.0], [80.1, 28782.0], [80.2, 28782.0], [80.3, 28782.0], [80.4, 28782.0], [80.5, 28782.0], [80.6, 28782.0], [80.7, 28782.0], [80.8, 28782.0], [80.9, 28782.0], [81.0, 28789.0], [81.1, 28789.0], [81.2, 28789.0], [81.3, 28789.0], [81.4, 28789.0], [81.5, 28789.0], [81.6, 28789.0], [81.7, 28789.0], [81.8, 28789.0], [81.9, 28789.0], [82.0, 28810.0], [82.1, 28810.0], [82.2, 28810.0], [82.3, 28810.0], [82.4, 28810.0], [82.5, 28810.0], [82.6, 28810.0], [82.7, 28810.0], [82.8, 28810.0], [82.9, 28810.0], [83.0, 28820.0], [83.1, 28820.0], [83.2, 28820.0], [83.3, 28820.0], [83.4, 28820.0], [83.5, 28820.0], [83.6, 28820.0], [83.7, 28820.0], [83.8, 28820.0], [83.9, 28820.0], [84.0, 28869.0], [84.1, 28869.0], [84.2, 28869.0], [84.3, 28869.0], [84.4, 28869.0], [84.5, 28869.0], [84.6, 28869.0], [84.7, 28869.0], [84.8, 28869.0], [84.9, 28869.0], [85.0, 28881.0], [85.1, 28881.0], [85.2, 28881.0], [85.3, 28881.0], [85.4, 28881.0], [85.5, 28881.0], [85.6, 28881.0], [85.7, 28881.0], [85.8, 28881.0], [85.9, 28881.0], [86.0, 28891.0], [86.1, 28891.0], [86.2, 28891.0], [86.3, 28891.0], [86.4, 28891.0], [86.5, 28891.0], [86.6, 28891.0], [86.7, 28891.0], [86.8, 28891.0], [86.9, 28891.0], [87.0, 28899.0], [87.1, 28899.0], [87.2, 28899.0], [87.3, 28899.0], [87.4, 28899.0], [87.5, 28899.0], [87.6, 28899.0], [87.7, 28899.0], [87.8, 28899.0], [87.9, 28899.0], [88.0, 28966.0], [88.1, 28966.0], [88.2, 28966.0], [88.3, 28966.0], [88.4, 28966.0], [88.5, 28966.0], [88.6, 28966.0], [88.7, 28966.0], [88.8, 28966.0], [88.9, 28966.0], [89.0, 28981.0], [89.1, 28981.0], [89.2, 28981.0], [89.3, 28981.0], [89.4, 28981.0], [89.5, 28981.0], [89.6, 28981.0], [89.7, 28981.0], [89.8, 28981.0], [89.9, 28981.0], [90.0, 29097.0], [90.1, 29097.0], [90.2, 29097.0], [90.3, 29097.0], [90.4, 29097.0], [90.5, 29097.0], [90.6, 29097.0], [90.7, 29097.0], [90.8, 29097.0], [90.9, 29097.0], [91.0, 29115.0], [91.1, 29115.0], [91.2, 29115.0], [91.3, 29115.0], [91.4, 29115.0], [91.5, 29115.0], [91.6, 29115.0], [91.7, 29115.0], [91.8, 29115.0], [91.9, 29115.0], [92.0, 29229.0], [92.1, 29229.0], [92.2, 29229.0], [92.3, 29229.0], [92.4, 29229.0], [92.5, 29229.0], [92.6, 29229.0], [92.7, 29229.0], [92.8, 29229.0], [92.9, 29229.0], [93.0, 29257.0], [93.1, 29257.0], [93.2, 29257.0], [93.3, 29257.0], [93.4, 29257.0], [93.5, 29257.0], [93.6, 29257.0], [93.7, 29257.0], [93.8, 29257.0], [93.9, 29257.0], [94.0, 29347.0], [94.1, 29347.0], [94.2, 29347.0], [94.3, 29347.0], [94.4, 29347.0], [94.5, 29347.0], [94.6, 29347.0], [94.7, 29347.0], [94.8, 29347.0], [94.9, 29347.0], [95.0, 29471.0], [95.1, 29471.0], [95.2, 29471.0], [95.3, 29471.0], [95.4, 29471.0], [95.5, 29471.0], [95.6, 29471.0], [95.7, 29471.0], [95.8, 29471.0], [95.9, 29471.0], [96.0, 29503.0], [96.1, 29503.0], [96.2, 29503.0], [96.3, 29503.0], [96.4, 29503.0], [96.5, 29503.0], [96.6, 29503.0], [96.7, 29503.0], [96.8, 29503.0], [96.9, 29503.0], [97.0, 29548.0], [97.1, 29548.0], [97.2, 29548.0], [97.3, 29548.0], [97.4, 29548.0], [97.5, 29548.0], [97.6, 29548.0], [97.7, 29548.0], [97.8, 29548.0], [97.9, 29548.0], [98.0, 29599.0], [98.1, 29599.0], [98.2, 29599.0], [98.3, 29599.0], [98.4, 29599.0], [98.5, 29599.0], [98.6, 29599.0], [98.7, 29599.0], [98.8, 29599.0], [98.9, 29599.0], [99.0, 29810.0], [99.1, 29810.0], [99.2, 29810.0], [99.3, 29810.0], [99.4, 29810.0], [99.5, 29810.0], [99.6, 29810.0], [99.7, 29810.0], [99.8, 29810.0], [99.9, 29810.0]], "isOverall": false, "label": "Search Request - UFC", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 8200.0, "maxY": 6.0, "series": [{"data": [[8400.0, 1.0], [8200.0, 1.0], [8300.0, 1.0], [8700.0, 2.0], [8900.0, 2.0], [9000.0, 1.0], [10400.0, 1.0], [10900.0, 1.0], [12200.0, 1.0], [12300.0, 1.0], [13700.0, 1.0], [14000.0, 1.0], [14900.0, 1.0], [15200.0, 2.0], [15600.0, 1.0], [17100.0, 1.0], [16700.0, 1.0], [17000.0, 1.0], [16800.0, 1.0], [18900.0, 1.0], [18800.0, 1.0], [18700.0, 1.0], [19000.0, 1.0], [19600.0, 2.0], [20100.0, 1.0], [19800.0, 1.0], [21100.0, 1.0], [20700.0, 1.0], [21700.0, 1.0], [22500.0, 1.0], [23300.0, 1.0], [24100.0, 1.0], [24900.0, 1.0], [25500.0, 1.0], [25300.0, 1.0], [25400.0, 1.0], [26200.0, 1.0], [26600.0, 2.0], [25800.0, 1.0], [27000.0, 2.0], [27600.0, 2.0], [28600.0, 5.0], [27800.0, 1.0], [28400.0, 4.0], [28200.0, 6.0], [28000.0, 1.0], [28500.0, 2.0], [28300.0, 6.0], [28100.0, 2.0], [27900.0, 1.0], [28800.0, 6.0], [28700.0, 6.0], [28900.0, 2.0], [29200.0, 2.0], [29100.0, 1.0], [29000.0, 1.0], [29500.0, 3.0], [29400.0, 1.0], [29300.0, 1.0], [29800.0, 1.0]], "isOverall": false, "label": "Search Request - UFC", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 29800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 100.0, "minX": 3.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 100.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 100.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 6.769230769230768, "minX": 1.7617503E12, "maxY": 19.923076923076923, "series": [{"data": [[1.76175042E12, 17.342105263157897], [1.7617503E12, 12.3], [1.76175048E12, 6.769230769230768], [1.76175036E12, 19.923076923076923]], "isOverall": false, "label": "Search Functionality Test - UFC", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76175048E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 12093.0, "minX": 1.0, "maxY": 25534.07843137255, "series": [{"data": [[8.0, 12093.0], [2.0, 15275.0], [9.0, 14538.5], [10.0, 25415.0], [11.0, 21747.5], [12.0, 22477.5], [3.0, 16866.0], [13.0, 23410.75], [14.0, 24358.5], [15.0, 22633.666666666668], [16.0, 20110.5], [4.0, 17018.0], [1.0, 15686.0], [17.0, 24762.8], [18.0, 25169.2], [19.0, 25419.2], [20.0, 25534.07843137255], [5.0, 19088.0], [6.0, 18731.0], [7.0, 19884.0]], "isOverall": false, "label": "Search Request - UFC", "isController": false}, {"data": [[16.47, 23684.120000000006]], "isOverall": false, "label": "Search Request - UFC-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 57.333333333333336, "minX": 1.7617503E12, "maxY": 23039.55, "series": [{"data": [[1.76175042E12, 22448.533333333333], [1.7617503E12, 5907.45], [1.76175048E12, 7679.833333333333], [1.76175036E12, 23039.55]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76175042E12, 217.86666666666667], [1.7617503E12, 57.333333333333336], [1.76175048E12, 74.53333333333333], [1.76175036E12, 223.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76175048E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 9075.3, "minX": 1.7617503E12, "maxY": 28627.184210526313, "series": [{"data": [[1.76175042E12, 28627.184210526313], [1.7617503E12, 9075.3], [1.76175048E12, 20502.923076923078], [1.76175036E12, 23674.05128205128]], "isOverall": false, "label": "Search Request - UFC", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175048E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 8980.5, "minX": 1.7617503E12, "maxY": 28529.815789473683, "series": [{"data": [[1.76175042E12, 28529.815789473683], [1.7617503E12, 8980.5], [1.76175048E12, 20405.07692307692], [1.76175036E12, 23576.769230769223]], "isOverall": false, "label": "Search Request - UFC", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175048E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 21.846153846153847, "minX": 1.7617503E12, "maxY": 265.9, "series": [{"data": [[1.76175042E12, 149.86842105263156], [1.7617503E12, 265.9], [1.76175048E12, 21.846153846153847], [1.76175036E12, 92.43589743589743]], "isOverall": false, "label": "Search Request - UFC", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175048E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1.7976931348623157E308, "minX": 1.7976931348623157E308, "maxY": 4.9E-324, "series": [{"data": [], "isOverall": false, "label": "Max", "isController": false}, {"data": [], "isOverall": false, "label": "Min", "isController": false}, {"data": [], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "Median", "isController": false}, {"data": [], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 4.9E-324, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 27975.0, "minX": 1.0, "maxY": 27975.0, "series": [{"data": [[1.0, 27975.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 27875.0, "minX": 1.0, "maxY": 27875.0, "series": [{"data": [[1.0, 27875.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7617503E12, "maxY": 0.7166666666666667, "series": [{"data": [[1.76175042E12, 0.5], [1.7617503E12, 0.4166666666666667], [1.76175048E12, 0.03333333333333333], [1.76175036E12, 0.7166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76175048E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.7617503E12, "maxY": 0.65, "series": [{"data": [[1.76175042E12, 0.6333333333333333], [1.7617503E12, 0.16666666666666666], [1.76175048E12, 0.21666666666666667], [1.76175036E12, 0.65]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76175048E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.7617503E12, "maxY": 0.65, "series": [{"data": [[1.76175042E12, 0.6333333333333333], [1.7617503E12, 0.16666666666666666], [1.76175048E12, 0.21666666666666667], [1.76175036E12, 0.65]], "isOverall": false, "label": "Search Request - UFC-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175048E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.7617503E12, "maxY": 0.65, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76175042E12, 0.6333333333333333], [1.7617503E12, 0.16666666666666666], [1.76175048E12, 0.21666666666666667], [1.76175036E12, 0.65]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175048E12, "title": "Total Transactions Per Second"}},
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

