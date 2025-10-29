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
        data: {"result": {"minY": 7681.0, "minX": 0.0, "maxY": 25851.0, "series": [{"data": [[0.0, 7681.0], [0.1, 7681.0], [0.2, 7681.0], [0.3, 7681.0], [0.4, 7681.0], [0.5, 7681.0], [0.6, 7681.0], [0.7, 7681.0], [0.8, 7681.0], [0.9, 7681.0], [1.0, 7709.0], [1.1, 7709.0], [1.2, 7709.0], [1.3, 7709.0], [1.4, 7709.0], [1.5, 7709.0], [1.6, 7709.0], [1.7, 7709.0], [1.8, 7709.0], [1.9, 7709.0], [2.0, 7728.0], [2.1, 7728.0], [2.2, 7728.0], [2.3, 7728.0], [2.4, 7728.0], [2.5, 7728.0], [2.6, 7728.0], [2.7, 7728.0], [2.8, 7728.0], [2.9, 7728.0], [3.0, 7774.0], [3.1, 7774.0], [3.2, 7774.0], [3.3, 7774.0], [3.4, 7774.0], [3.5, 7774.0], [3.6, 7774.0], [3.7, 7774.0], [3.8, 7774.0], [3.9, 7774.0], [4.0, 7839.0], [4.1, 7839.0], [4.2, 7839.0], [4.3, 7839.0], [4.4, 7839.0], [4.5, 7839.0], [4.6, 7839.0], [4.7, 7839.0], [4.8, 7839.0], [4.9, 7839.0], [5.0, 7854.0], [5.1, 7854.0], [5.2, 7854.0], [5.3, 7854.0], [5.4, 7854.0], [5.5, 7854.0], [5.6, 7854.0], [5.7, 7854.0], [5.8, 7854.0], [5.9, 7854.0], [6.0, 7916.0], [6.1, 7916.0], [6.2, 7916.0], [6.3, 7916.0], [6.4, 7916.0], [6.5, 7916.0], [6.6, 7916.0], [6.7, 7916.0], [6.8, 7916.0], [6.9, 7916.0], [7.0, 8299.0], [7.1, 8299.0], [7.2, 8299.0], [7.3, 8299.0], [7.4, 8299.0], [7.5, 8299.0], [7.6, 8299.0], [7.7, 8299.0], [7.8, 8299.0], [7.9, 8299.0], [8.0, 9113.0], [8.1, 9113.0], [8.2, 9113.0], [8.3, 9113.0], [8.4, 9113.0], [8.5, 9113.0], [8.6, 9113.0], [8.7, 9113.0], [8.8, 9113.0], [8.9, 9113.0], [9.0, 9788.0], [9.1, 9788.0], [9.2, 9788.0], [9.3, 9788.0], [9.4, 9788.0], [9.5, 9788.0], [9.6, 9788.0], [9.7, 9788.0], [9.8, 9788.0], [9.9, 9788.0], [10.0, 10805.0], [10.1, 10805.0], [10.2, 10805.0], [10.3, 10805.0], [10.4, 10805.0], [10.5, 10805.0], [10.6, 10805.0], [10.7, 10805.0], [10.8, 10805.0], [10.9, 10805.0], [11.0, 11097.0], [11.1, 11097.0], [11.2, 11097.0], [11.3, 11097.0], [11.4, 11097.0], [11.5, 11097.0], [11.6, 11097.0], [11.7, 11097.0], [11.8, 11097.0], [11.9, 11097.0], [12.0, 11798.0], [12.1, 11798.0], [12.2, 11798.0], [12.3, 11798.0], [12.4, 11798.0], [12.5, 11798.0], [12.6, 11798.0], [12.7, 11798.0], [12.8, 11798.0], [12.9, 11798.0], [13.0, 12552.0], [13.1, 12552.0], [13.2, 12552.0], [13.3, 12552.0], [13.4, 12552.0], [13.5, 12552.0], [13.6, 12552.0], [13.7, 12552.0], [13.8, 12552.0], [13.9, 12552.0], [14.0, 13148.0], [14.1, 13148.0], [14.2, 13148.0], [14.3, 13148.0], [14.4, 13148.0], [14.5, 13148.0], [14.6, 13148.0], [14.7, 13148.0], [14.8, 13148.0], [14.9, 13148.0], [15.0, 13264.0], [15.1, 13264.0], [15.2, 13264.0], [15.3, 13264.0], [15.4, 13264.0], [15.5, 13264.0], [15.6, 13264.0], [15.7, 13264.0], [15.8, 13264.0], [15.9, 13264.0], [16.0, 13676.0], [16.1, 13676.0], [16.2, 13676.0], [16.3, 13676.0], [16.4, 13676.0], [16.5, 13676.0], [16.6, 13676.0], [16.7, 13676.0], [16.8, 13676.0], [16.9, 13676.0], [17.0, 14521.0], [17.1, 14521.0], [17.2, 14521.0], [17.3, 14521.0], [17.4, 14521.0], [17.5, 14521.0], [17.6, 14521.0], [17.7, 14521.0], [17.8, 14521.0], [17.9, 14521.0], [18.0, 15195.0], [18.1, 15195.0], [18.2, 15195.0], [18.3, 15195.0], [18.4, 15195.0], [18.5, 15195.0], [18.6, 15195.0], [18.7, 15195.0], [18.8, 15195.0], [18.9, 15195.0], [19.0, 15347.0], [19.1, 15347.0], [19.2, 15347.0], [19.3, 15347.0], [19.4, 15347.0], [19.5, 15347.0], [19.6, 15347.0], [19.7, 15347.0], [19.8, 15347.0], [19.9, 15347.0], [20.0, 15441.0], [20.1, 15441.0], [20.2, 15441.0], [20.3, 15441.0], [20.4, 15441.0], [20.5, 15441.0], [20.6, 15441.0], [20.7, 15441.0], [20.8, 15441.0], [20.9, 15441.0], [21.0, 15967.0], [21.1, 15967.0], [21.2, 15967.0], [21.3, 15967.0], [21.4, 15967.0], [21.5, 15967.0], [21.6, 15967.0], [21.7, 15967.0], [21.8, 15967.0], [21.9, 15967.0], [22.0, 16747.0], [22.1, 16747.0], [22.2, 16747.0], [22.3, 16747.0], [22.4, 16747.0], [22.5, 16747.0], [22.6, 16747.0], [22.7, 16747.0], [22.8, 16747.0], [22.9, 16747.0], [23.0, 16936.0], [23.1, 16936.0], [23.2, 16936.0], [23.3, 16936.0], [23.4, 16936.0], [23.5, 16936.0], [23.6, 16936.0], [23.7, 16936.0], [23.8, 16936.0], [23.9, 16936.0], [24.0, 17045.0], [24.1, 17045.0], [24.2, 17045.0], [24.3, 17045.0], [24.4, 17045.0], [24.5, 17045.0], [24.6, 17045.0], [24.7, 17045.0], [24.8, 17045.0], [24.9, 17045.0], [25.0, 17466.0], [25.1, 17466.0], [25.2, 17466.0], [25.3, 17466.0], [25.4, 17466.0], [25.5, 17466.0], [25.6, 17466.0], [25.7, 17466.0], [25.8, 17466.0], [25.9, 17466.0], [26.0, 18206.0], [26.1, 18206.0], [26.2, 18206.0], [26.3, 18206.0], [26.4, 18206.0], [26.5, 18206.0], [26.6, 18206.0], [26.7, 18206.0], [26.8, 18206.0], [26.9, 18206.0], [27.0, 18574.0], [27.1, 18574.0], [27.2, 18574.0], [27.3, 18574.0], [27.4, 18574.0], [27.5, 18574.0], [27.6, 18574.0], [27.7, 18574.0], [27.8, 18574.0], [27.9, 18574.0], [28.0, 18580.0], [28.1, 18580.0], [28.2, 18580.0], [28.3, 18580.0], [28.4, 18580.0], [28.5, 18580.0], [28.6, 18580.0], [28.7, 18580.0], [28.8, 18580.0], [28.9, 18580.0], [29.0, 18727.0], [29.1, 18727.0], [29.2, 18727.0], [29.3, 18727.0], [29.4, 18727.0], [29.5, 18727.0], [29.6, 18727.0], [29.7, 18727.0], [29.8, 18727.0], [29.9, 18727.0], [30.0, 19448.0], [30.1, 19448.0], [30.2, 19448.0], [30.3, 19448.0], [30.4, 19448.0], [30.5, 19448.0], [30.6, 19448.0], [30.7, 19448.0], [30.8, 19448.0], [30.9, 19448.0], [31.0, 19991.0], [31.1, 19991.0], [31.2, 19991.0], [31.3, 19991.0], [31.4, 19991.0], [31.5, 19991.0], [31.6, 19991.0], [31.7, 19991.0], [31.8, 19991.0], [31.9, 19991.0], [32.0, 20049.0], [32.1, 20049.0], [32.2, 20049.0], [32.3, 20049.0], [32.4, 20049.0], [32.5, 20049.0], [32.6, 20049.0], [32.7, 20049.0], [32.8, 20049.0], [32.9, 20049.0], [33.0, 20508.0], [33.1, 20508.0], [33.2, 20508.0], [33.3, 20508.0], [33.4, 20508.0], [33.5, 20508.0], [33.6, 20508.0], [33.7, 20508.0], [33.8, 20508.0], [33.9, 20508.0], [34.0, 21160.0], [34.1, 21160.0], [34.2, 21160.0], [34.3, 21160.0], [34.4, 21160.0], [34.5, 21160.0], [34.6, 21160.0], [34.7, 21160.0], [34.8, 21160.0], [34.9, 21160.0], [35.0, 21209.0], [35.1, 21209.0], [35.2, 21209.0], [35.3, 21209.0], [35.4, 21209.0], [35.5, 21209.0], [35.6, 21209.0], [35.7, 21209.0], [35.8, 21209.0], [35.9, 21209.0], [36.0, 21781.0], [36.1, 21781.0], [36.2, 21781.0], [36.3, 21781.0], [36.4, 21781.0], [36.5, 21781.0], [36.6, 21781.0], [36.7, 21781.0], [36.8, 21781.0], [36.9, 21781.0], [37.0, 22423.0], [37.1, 22423.0], [37.2, 22423.0], [37.3, 22423.0], [37.4, 22423.0], [37.5, 22423.0], [37.6, 22423.0], [37.7, 22423.0], [37.8, 22423.0], [37.9, 22423.0], [38.0, 22677.0], [38.1, 22677.0], [38.2, 22677.0], [38.3, 22677.0], [38.4, 22677.0], [38.5, 22677.0], [38.6, 22677.0], [38.7, 22677.0], [38.8, 22677.0], [38.9, 22677.0], [39.0, 23179.0], [39.1, 23179.0], [39.2, 23179.0], [39.3, 23179.0], [39.4, 23179.0], [39.5, 23179.0], [39.6, 23179.0], [39.7, 23179.0], [39.8, 23179.0], [39.9, 23179.0], [40.0, 23233.0], [40.1, 23233.0], [40.2, 23233.0], [40.3, 23233.0], [40.4, 23233.0], [40.5, 23233.0], [40.6, 23233.0], [40.7, 23233.0], [40.8, 23233.0], [40.9, 23233.0], [41.0, 23409.0], [41.1, 23409.0], [41.2, 23409.0], [41.3, 23409.0], [41.4, 23409.0], [41.5, 23409.0], [41.6, 23409.0], [41.7, 23409.0], [41.8, 23409.0], [41.9, 23409.0], [42.0, 23575.0], [42.1, 23575.0], [42.2, 23575.0], [42.3, 23575.0], [42.4, 23575.0], [42.5, 23575.0], [42.6, 23575.0], [42.7, 23575.0], [42.8, 23575.0], [42.9, 23575.0], [43.0, 23617.0], [43.1, 23617.0], [43.2, 23617.0], [43.3, 23617.0], [43.4, 23617.0], [43.5, 23617.0], [43.6, 23617.0], [43.7, 23617.0], [43.8, 23617.0], [43.9, 23617.0], [44.0, 23659.0], [44.1, 23659.0], [44.2, 23659.0], [44.3, 23659.0], [44.4, 23659.0], [44.5, 23659.0], [44.6, 23659.0], [44.7, 23659.0], [44.8, 23659.0], [44.9, 23659.0], [45.0, 23662.0], [45.1, 23662.0], [45.2, 23662.0], [45.3, 23662.0], [45.4, 23662.0], [45.5, 23662.0], [45.6, 23662.0], [45.7, 23662.0], [45.8, 23662.0], [45.9, 23662.0], [46.0, 23688.0], [46.1, 23688.0], [46.2, 23688.0], [46.3, 23688.0], [46.4, 23688.0], [46.5, 23688.0], [46.6, 23688.0], [46.7, 23688.0], [46.8, 23688.0], [46.9, 23688.0], [47.0, 23797.0], [47.1, 23797.0], [47.2, 23797.0], [47.3, 23797.0], [47.4, 23797.0], [47.5, 23797.0], [47.6, 23797.0], [47.7, 23797.0], [47.8, 23797.0], [47.9, 23797.0], [48.0, 23800.0], [48.1, 23800.0], [48.2, 23800.0], [48.3, 23800.0], [48.4, 23800.0], [48.5, 23800.0], [48.6, 23800.0], [48.7, 23800.0], [48.8, 23800.0], [48.9, 23800.0], [49.0, 23803.0], [49.1, 23803.0], [49.2, 23803.0], [49.3, 23803.0], [49.4, 23803.0], [49.5, 23803.0], [49.6, 23803.0], [49.7, 23803.0], [49.8, 23803.0], [49.9, 23803.0], [50.0, 23818.0], [50.1, 23818.0], [50.2, 23818.0], [50.3, 23818.0], [50.4, 23818.0], [50.5, 23818.0], [50.6, 23818.0], [50.7, 23818.0], [50.8, 23818.0], [50.9, 23818.0], [51.0, 23897.0], [51.1, 23897.0], [51.2, 23897.0], [51.3, 23897.0], [51.4, 23897.0], [51.5, 23897.0], [51.6, 23897.0], [51.7, 23897.0], [51.8, 23897.0], [51.9, 23897.0], [52.0, 23912.0], [52.1, 23912.0], [52.2, 23912.0], [52.3, 23912.0], [52.4, 23912.0], [52.5, 23912.0], [52.6, 23912.0], [52.7, 23912.0], [52.8, 23912.0], [52.9, 23912.0], [53.0, 23913.0], [53.1, 23913.0], [53.2, 23913.0], [53.3, 23913.0], [53.4, 23913.0], [53.5, 23913.0], [53.6, 23913.0], [53.7, 23913.0], [53.8, 23913.0], [53.9, 23913.0], [54.0, 23935.0], [54.1, 23935.0], [54.2, 23935.0], [54.3, 23935.0], [54.4, 23935.0], [54.5, 23935.0], [54.6, 23935.0], [54.7, 23935.0], [54.8, 23935.0], [54.9, 23935.0], [55.0, 23977.0], [55.1, 23977.0], [55.2, 23977.0], [55.3, 23977.0], [55.4, 23977.0], [55.5, 23977.0], [55.6, 23977.0], [55.7, 23977.0], [55.8, 23977.0], [55.9, 23977.0], [56.0, 23994.0], [56.1, 23994.0], [56.2, 23994.0], [56.3, 23994.0], [56.4, 23994.0], [56.5, 23994.0], [56.6, 23994.0], [56.7, 23994.0], [56.8, 23994.0], [56.9, 23994.0], [57.0, 23997.0], [57.1, 23997.0], [57.2, 23997.0], [57.3, 23997.0], [57.4, 23997.0], [57.5, 23997.0], [57.6, 23997.0], [57.7, 23997.0], [57.8, 23997.0], [57.9, 23997.0], [58.0, 24006.0], [58.1, 24006.0], [58.2, 24006.0], [58.3, 24006.0], [58.4, 24006.0], [58.5, 24006.0], [58.6, 24006.0], [58.7, 24006.0], [58.8, 24006.0], [58.9, 24006.0], [59.0, 24017.0], [59.1, 24017.0], [59.2, 24017.0], [59.3, 24017.0], [59.4, 24017.0], [59.5, 24017.0], [59.6, 24017.0], [59.7, 24017.0], [59.8, 24017.0], [59.9, 24017.0], [60.0, 24025.0], [60.1, 24025.0], [60.2, 24025.0], [60.3, 24025.0], [60.4, 24025.0], [60.5, 24025.0], [60.6, 24025.0], [60.7, 24025.0], [60.8, 24025.0], [60.9, 24025.0], [61.0, 24043.0], [61.1, 24043.0], [61.2, 24043.0], [61.3, 24043.0], [61.4, 24043.0], [61.5, 24043.0], [61.6, 24043.0], [61.7, 24043.0], [61.8, 24043.0], [61.9, 24043.0], [62.0, 24077.0], [62.1, 24077.0], [62.2, 24077.0], [62.3, 24077.0], [62.4, 24077.0], [62.5, 24077.0], [62.6, 24077.0], [62.7, 24077.0], [62.8, 24077.0], [62.9, 24077.0], [63.0, 24116.0], [63.1, 24116.0], [63.2, 24116.0], [63.3, 24116.0], [63.4, 24116.0], [63.5, 24116.0], [63.6, 24116.0], [63.7, 24116.0], [63.8, 24116.0], [63.9, 24116.0], [64.0, 24157.0], [64.1, 24157.0], [64.2, 24157.0], [64.3, 24157.0], [64.4, 24157.0], [64.5, 24157.0], [64.6, 24157.0], [64.7, 24157.0], [64.8, 24157.0], [64.9, 24157.0], [65.0, 24171.0], [65.1, 24171.0], [65.2, 24171.0], [65.3, 24171.0], [65.4, 24171.0], [65.5, 24171.0], [65.6, 24171.0], [65.7, 24171.0], [65.8, 24171.0], [65.9, 24171.0], [66.0, 24181.0], [66.1, 24181.0], [66.2, 24181.0], [66.3, 24181.0], [66.4, 24181.0], [66.5, 24181.0], [66.6, 24181.0], [66.7, 24181.0], [66.8, 24181.0], [66.9, 24181.0], [67.0, 24212.0], [67.1, 24212.0], [67.2, 24212.0], [67.3, 24212.0], [67.4, 24212.0], [67.5, 24212.0], [67.6, 24212.0], [67.7, 24212.0], [67.8, 24212.0], [67.9, 24212.0], [68.0, 24218.0], [68.1, 24218.0], [68.2, 24218.0], [68.3, 24218.0], [68.4, 24218.0], [68.5, 24218.0], [68.6, 24218.0], [68.7, 24218.0], [68.8, 24218.0], [68.9, 24218.0], [69.0, 24226.0], [69.1, 24226.0], [69.2, 24226.0], [69.3, 24226.0], [69.4, 24226.0], [69.5, 24226.0], [69.6, 24226.0], [69.7, 24226.0], [69.8, 24226.0], [69.9, 24226.0], [70.0, 24242.0], [70.1, 24242.0], [70.2, 24242.0], [70.3, 24242.0], [70.4, 24242.0], [70.5, 24242.0], [70.6, 24242.0], [70.7, 24242.0], [70.8, 24242.0], [70.9, 24242.0], [71.0, 24248.0], [71.1, 24248.0], [71.2, 24248.0], [71.3, 24248.0], [71.4, 24248.0], [71.5, 24248.0], [71.6, 24248.0], [71.7, 24248.0], [71.8, 24248.0], [71.9, 24248.0], [72.0, 24265.0], [72.1, 24265.0], [72.2, 24265.0], [72.3, 24265.0], [72.4, 24265.0], [72.5, 24265.0], [72.6, 24265.0], [72.7, 24265.0], [72.8, 24265.0], [72.9, 24265.0], [73.0, 24274.0], [73.1, 24274.0], [73.2, 24274.0], [73.3, 24274.0], [73.4, 24274.0], [73.5, 24274.0], [73.6, 24274.0], [73.7, 24274.0], [73.8, 24274.0], [73.9, 24274.0], [74.0, 24316.0], [74.1, 24316.0], [74.2, 24316.0], [74.3, 24316.0], [74.4, 24316.0], [74.5, 24316.0], [74.6, 24316.0], [74.7, 24316.0], [74.8, 24316.0], [74.9, 24316.0], [75.0, 24345.0], [75.1, 24345.0], [75.2, 24345.0], [75.3, 24345.0], [75.4, 24345.0], [75.5, 24345.0], [75.6, 24345.0], [75.7, 24345.0], [75.8, 24345.0], [75.9, 24345.0], [76.0, 24373.0], [76.1, 24373.0], [76.2, 24373.0], [76.3, 24373.0], [76.4, 24373.0], [76.5, 24373.0], [76.6, 24373.0], [76.7, 24373.0], [76.8, 24373.0], [76.9, 24373.0], [77.0, 24418.0], [77.1, 24418.0], [77.2, 24418.0], [77.3, 24418.0], [77.4, 24418.0], [77.5, 24418.0], [77.6, 24418.0], [77.7, 24418.0], [77.8, 24418.0], [77.9, 24418.0], [78.0, 24419.0], [78.1, 24419.0], [78.2, 24419.0], [78.3, 24419.0], [78.4, 24419.0], [78.5, 24419.0], [78.6, 24419.0], [78.7, 24419.0], [78.8, 24419.0], [78.9, 24419.0], [79.0, 24420.0], [79.1, 24420.0], [79.2, 24420.0], [79.3, 24420.0], [79.4, 24420.0], [79.5, 24420.0], [79.6, 24420.0], [79.7, 24420.0], [79.8, 24420.0], [79.9, 24420.0], [80.0, 24439.0], [80.1, 24439.0], [80.2, 24439.0], [80.3, 24439.0], [80.4, 24439.0], [80.5, 24439.0], [80.6, 24439.0], [80.7, 24439.0], [80.8, 24439.0], [80.9, 24439.0], [81.0, 24446.0], [81.1, 24446.0], [81.2, 24446.0], [81.3, 24446.0], [81.4, 24446.0], [81.5, 24446.0], [81.6, 24446.0], [81.7, 24446.0], [81.8, 24446.0], [81.9, 24446.0], [82.0, 24480.0], [82.1, 24480.0], [82.2, 24480.0], [82.3, 24480.0], [82.4, 24480.0], [82.5, 24480.0], [82.6, 24480.0], [82.7, 24480.0], [82.8, 24480.0], [82.9, 24480.0], [83.0, 24526.0], [83.1, 24526.0], [83.2, 24526.0], [83.3, 24526.0], [83.4, 24526.0], [83.5, 24526.0], [83.6, 24526.0], [83.7, 24526.0], [83.8, 24526.0], [83.9, 24526.0], [84.0, 24586.0], [84.1, 24586.0], [84.2, 24586.0], [84.3, 24586.0], [84.4, 24586.0], [84.5, 24586.0], [84.6, 24586.0], [84.7, 24586.0], [84.8, 24586.0], [84.9, 24586.0], [85.0, 24616.0], [85.1, 24616.0], [85.2, 24616.0], [85.3, 24616.0], [85.4, 24616.0], [85.5, 24616.0], [85.6, 24616.0], [85.7, 24616.0], [85.8, 24616.0], [85.9, 24616.0], [86.0, 24665.0], [86.1, 24665.0], [86.2, 24665.0], [86.3, 24665.0], [86.4, 24665.0], [86.5, 24665.0], [86.6, 24665.0], [86.7, 24665.0], [86.8, 24665.0], [86.9, 24665.0], [87.0, 24819.0], [87.1, 24819.0], [87.2, 24819.0], [87.3, 24819.0], [87.4, 24819.0], [87.5, 24819.0], [87.6, 24819.0], [87.7, 24819.0], [87.8, 24819.0], [87.9, 24819.0], [88.0, 24969.0], [88.1, 24969.0], [88.2, 24969.0], [88.3, 24969.0], [88.4, 24969.0], [88.5, 24969.0], [88.6, 24969.0], [88.7, 24969.0], [88.8, 24969.0], [88.9, 24969.0], [89.0, 24992.0], [89.1, 24992.0], [89.2, 24992.0], [89.3, 24992.0], [89.4, 24992.0], [89.5, 24992.0], [89.6, 24992.0], [89.7, 24992.0], [89.8, 24992.0], [89.9, 24992.0], [90.0, 25002.0], [90.1, 25002.0], [90.2, 25002.0], [90.3, 25002.0], [90.4, 25002.0], [90.5, 25002.0], [90.6, 25002.0], [90.7, 25002.0], [90.8, 25002.0], [90.9, 25002.0], [91.0, 25086.0], [91.1, 25086.0], [91.2, 25086.0], [91.3, 25086.0], [91.4, 25086.0], [91.5, 25086.0], [91.6, 25086.0], [91.7, 25086.0], [91.8, 25086.0], [91.9, 25086.0], [92.0, 25165.0], [92.1, 25165.0], [92.2, 25165.0], [92.3, 25165.0], [92.4, 25165.0], [92.5, 25165.0], [92.6, 25165.0], [92.7, 25165.0], [92.8, 25165.0], [92.9, 25165.0], [93.0, 25181.0], [93.1, 25181.0], [93.2, 25181.0], [93.3, 25181.0], [93.4, 25181.0], [93.5, 25181.0], [93.6, 25181.0], [93.7, 25181.0], [93.8, 25181.0], [93.9, 25181.0], [94.0, 25455.0], [94.1, 25455.0], [94.2, 25455.0], [94.3, 25455.0], [94.4, 25455.0], [94.5, 25455.0], [94.6, 25455.0], [94.7, 25455.0], [94.8, 25455.0], [94.9, 25455.0], [95.0, 25507.0], [95.1, 25507.0], [95.2, 25507.0], [95.3, 25507.0], [95.4, 25507.0], [95.5, 25507.0], [95.6, 25507.0], [95.7, 25507.0], [95.8, 25507.0], [95.9, 25507.0], [96.0, 25575.0], [96.1, 25575.0], [96.2, 25575.0], [96.3, 25575.0], [96.4, 25575.0], [96.5, 25575.0], [96.6, 25575.0], [96.7, 25575.0], [96.8, 25575.0], [96.9, 25575.0], [97.0, 25646.0], [97.1, 25646.0], [97.2, 25646.0], [97.3, 25646.0], [97.4, 25646.0], [97.5, 25646.0], [97.6, 25646.0], [97.7, 25646.0], [97.8, 25646.0], [97.9, 25646.0], [98.0, 25827.0], [98.1, 25827.0], [98.2, 25827.0], [98.3, 25827.0], [98.4, 25827.0], [98.5, 25827.0], [98.6, 25827.0], [98.7, 25827.0], [98.8, 25827.0], [98.9, 25827.0], [99.0, 25851.0], [99.1, 25851.0], [99.2, 25851.0], [99.3, 25851.0], [99.4, 25851.0], [99.5, 25851.0], [99.6, 25851.0], [99.7, 25851.0], [99.8, 25851.0], [99.9, 25851.0]], "isOverall": false, "label": "Search Request - UFC", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 7600.0, "maxY": 7.0, "series": [{"data": [[7600.0, 1.0], [7900.0, 1.0], [7800.0, 2.0], [7700.0, 3.0], [8200.0, 1.0], [9100.0, 1.0], [9700.0, 1.0], [10800.0, 1.0], [11000.0, 1.0], [11700.0, 1.0], [12500.0, 1.0], [13200.0, 1.0], [13100.0, 1.0], [13600.0, 1.0], [14500.0, 1.0], [15300.0, 1.0], [15100.0, 1.0], [15400.0, 1.0], [15900.0, 1.0], [16700.0, 1.0], [17400.0, 1.0], [16900.0, 1.0], [17000.0, 1.0], [18200.0, 1.0], [18700.0, 1.0], [19400.0, 1.0], [18500.0, 2.0], [19900.0, 1.0], [20000.0, 1.0], [20500.0, 1.0], [21100.0, 1.0], [21200.0, 1.0], [21700.0, 1.0], [22400.0, 1.0], [23100.0, 1.0], [23400.0, 1.0], [23500.0, 1.0], [23200.0, 1.0], [22600.0, 1.0], [24400.0, 6.0], [23600.0, 4.0], [24300.0, 3.0], [24100.0, 4.0], [24500.0, 2.0], [24200.0, 7.0], [23900.0, 6.0], [24000.0, 5.0], [23700.0, 1.0], [23800.0, 4.0], [24600.0, 2.0], [24900.0, 2.0], [25500.0, 2.0], [25100.0, 2.0], [25000.0, 2.0], [24800.0, 1.0], [25400.0, 1.0], [25800.0, 2.0], [25600.0, 1.0]], "isOverall": false, "label": "Search Request - UFC", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 25800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 12.432432432432433, "minX": 1.76175312E12, "maxY": 19.977777777777778, "series": [{"data": [[1.76175312E12, 14.944444444444445], [1.76175318E12, 19.977777777777778], [1.76175324E12, 12.432432432432433]], "isOverall": false, "label": "Search Functionality Test - UFC", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76175324E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 13148.0, "minX": 1.0, "maxY": 22133.85714285714, "series": [{"data": [[8.0, 13982.5], [2.0, 15195.0], [9.0, 14531.5], [10.0, 18149.333333333332], [11.0, 19848.25], [12.0, 19850.0], [3.0, 15347.0], [13.0, 20478.25], [14.0, 19448.333333333332], [15.0, 19722.666666666668], [16.0, 19542.0], [4.0, 17045.0], [1.0, 13148.0], [17.0, 21679.0], [18.0, 21531.2], [19.0, 21690.2], [20.0, 22133.85714285714], [5.0, 16936.0], [6.0, 18580.0], [7.0, 13436.5]], "isOverall": false, "label": "Search Request - UFC", "isController": false}, {"data": [[16.279999999999987, 20605.06]], "isOverall": false, "label": "Search Request - UFC-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 103.2, "minX": 1.76175312E12, "maxY": 26584.05, "series": [{"data": [[1.76175312E12, 10633.366666666667], [1.76175318E12, 26584.05], [1.76175324E12, 21852.25]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76175312E12, 103.2], [1.76175318E12, 258.0], [1.76175324E12, 212.13333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76175324E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 10269.722222222223, "minX": 1.76175312E12, "maxY": 23094.71111111111, "series": [{"data": [[1.76175312E12, 10269.722222222223], [1.76175318E12, 23094.71111111111], [1.76175324E12, 22605.108108108117]], "isOverall": false, "label": "Search Request - UFC", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175324E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 10258.27777777778, "minX": 1.76175312E12, "maxY": 23080.511111111104, "series": [{"data": [[1.76175312E12, 10258.27777777778], [1.76175318E12, 23080.511111111104], [1.76175324E12, 22593.37837837838]], "isOverall": false, "label": "Search Request - UFC", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175324E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 11.91111111111111, "minX": 1.76175312E12, "maxY": 44.88888888888889, "series": [{"data": [[1.76175312E12, 44.88888888888889], [1.76175318E12, 11.91111111111111], [1.76175324E12, 32.4054054054054]], "isOverall": false, "label": "Search Request - UFC", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175324E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 23810.5, "minX": 1.0, "maxY": 23810.5, "series": [{"data": [[1.0, 23810.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 23799.5, "minX": 1.0, "maxY": 23799.5, "series": [{"data": [[1.0, 23799.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.76175312E12, "maxY": 0.75, "series": [{"data": [[1.76175312E12, 0.6], [1.76175318E12, 0.75], [1.76175324E12, 0.31666666666666665]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76175324E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.76175312E12, "maxY": 0.75, "series": [{"data": [[1.76175312E12, 0.3], [1.76175318E12, 0.75], [1.76175324E12, 0.6166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76175324E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.76175312E12, "maxY": 0.75, "series": [{"data": [[1.76175312E12, 0.3], [1.76175318E12, 0.75], [1.76175324E12, 0.6166666666666667]], "isOverall": false, "label": "Search Request - UFC-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175324E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.76175312E12, "maxY": 0.75, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76175312E12, 0.3], [1.76175318E12, 0.75], [1.76175324E12, 0.6166666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175324E12, "title": "Total Transactions Per Second"}},
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

