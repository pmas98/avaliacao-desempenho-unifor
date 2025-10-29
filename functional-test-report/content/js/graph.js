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
        data: {"result": {"minY": 424.0, "minX": 0.0, "maxY": 2033.0, "series": [{"data": [[0.0, 424.0], [0.1, 424.0], [0.2, 424.0], [0.3, 424.0], [0.4, 424.0], [0.5, 424.0], [0.6, 424.0], [0.7, 424.0], [0.8, 424.0], [0.9, 424.0], [1.0, 427.0], [1.1, 427.0], [1.2, 427.0], [1.3, 427.0], [1.4, 427.0], [1.5, 427.0], [1.6, 427.0], [1.7, 427.0], [1.8, 427.0], [1.9, 427.0], [2.0, 431.0], [2.1, 431.0], [2.2, 431.0], [2.3, 431.0], [2.4, 431.0], [2.5, 431.0], [2.6, 431.0], [2.7, 431.0], [2.8, 431.0], [2.9, 431.0], [3.0, 432.0], [3.1, 432.0], [3.2, 432.0], [3.3, 432.0], [3.4, 432.0], [3.5, 432.0], [3.6, 432.0], [3.7, 432.0], [3.8, 432.0], [3.9, 432.0], [4.0, 444.0], [4.1, 444.0], [4.2, 444.0], [4.3, 444.0], [4.4, 444.0], [4.5, 444.0], [4.6, 444.0], [4.7, 444.0], [4.8, 444.0], [4.9, 444.0], [5.0, 446.0], [5.1, 446.0], [5.2, 446.0], [5.3, 446.0], [5.4, 446.0], [5.5, 446.0], [5.6, 446.0], [5.7, 446.0], [5.8, 446.0], [5.9, 446.0], [6.0, 447.0], [6.1, 447.0], [6.2, 447.0], [6.3, 447.0], [6.4, 447.0], [6.5, 447.0], [6.6, 447.0], [6.7, 447.0], [6.8, 447.0], [6.9, 447.0], [7.0, 447.0], [7.1, 447.0], [7.2, 447.0], [7.3, 447.0], [7.4, 447.0], [7.5, 447.0], [7.6, 447.0], [7.7, 447.0], [7.8, 447.0], [7.9, 447.0], [8.0, 450.0], [8.1, 450.0], [8.2, 450.0], [8.3, 450.0], [8.4, 450.0], [8.5, 450.0], [8.6, 450.0], [8.7, 450.0], [8.8, 450.0], [8.9, 450.0], [9.0, 450.0], [9.1, 450.0], [9.2, 450.0], [9.3, 450.0], [9.4, 450.0], [9.5, 450.0], [9.6, 450.0], [9.7, 450.0], [9.8, 450.0], [9.9, 450.0], [10.0, 451.0], [10.1, 451.0], [10.2, 451.0], [10.3, 451.0], [10.4, 451.0], [10.5, 451.0], [10.6, 451.0], [10.7, 451.0], [10.8, 451.0], [10.9, 451.0], [11.0, 451.0], [11.1, 451.0], [11.2, 451.0], [11.3, 451.0], [11.4, 451.0], [11.5, 451.0], [11.6, 451.0], [11.7, 451.0], [11.8, 451.0], [11.9, 451.0], [12.0, 453.0], [12.1, 453.0], [12.2, 453.0], [12.3, 453.0], [12.4, 453.0], [12.5, 453.0], [12.6, 453.0], [12.7, 453.0], [12.8, 453.0], [12.9, 453.0], [13.0, 457.0], [13.1, 457.0], [13.2, 457.0], [13.3, 457.0], [13.4, 457.0], [13.5, 457.0], [13.6, 457.0], [13.7, 457.0], [13.8, 457.0], [13.9, 457.0], [14.0, 458.0], [14.1, 458.0], [14.2, 458.0], [14.3, 458.0], [14.4, 458.0], [14.5, 458.0], [14.6, 458.0], [14.7, 458.0], [14.8, 458.0], [14.9, 458.0], [15.0, 460.0], [15.1, 460.0], [15.2, 460.0], [15.3, 460.0], [15.4, 460.0], [15.5, 460.0], [15.6, 460.0], [15.7, 460.0], [15.8, 460.0], [15.9, 460.0], [16.0, 461.0], [16.1, 461.0], [16.2, 461.0], [16.3, 461.0], [16.4, 461.0], [16.5, 461.0], [16.6, 461.0], [16.7, 461.0], [16.8, 461.0], [16.9, 461.0], [17.0, 465.0], [17.1, 465.0], [17.2, 465.0], [17.3, 465.0], [17.4, 465.0], [17.5, 465.0], [17.6, 465.0], [17.7, 465.0], [17.8, 465.0], [17.9, 465.0], [18.0, 468.0], [18.1, 468.0], [18.2, 468.0], [18.3, 468.0], [18.4, 468.0], [18.5, 468.0], [18.6, 468.0], [18.7, 468.0], [18.8, 468.0], [18.9, 468.0], [19.0, 469.0], [19.1, 469.0], [19.2, 469.0], [19.3, 469.0], [19.4, 469.0], [19.5, 469.0], [19.6, 469.0], [19.7, 469.0], [19.8, 469.0], [19.9, 469.0], [20.0, 475.0], [20.1, 475.0], [20.2, 475.0], [20.3, 475.0], [20.4, 475.0], [20.5, 475.0], [20.6, 475.0], [20.7, 475.0], [20.8, 475.0], [20.9, 475.0], [21.0, 482.0], [21.1, 482.0], [21.2, 482.0], [21.3, 482.0], [21.4, 482.0], [21.5, 482.0], [21.6, 482.0], [21.7, 482.0], [21.8, 482.0], [21.9, 482.0], [22.0, 482.0], [22.1, 482.0], [22.2, 482.0], [22.3, 482.0], [22.4, 482.0], [22.5, 482.0], [22.6, 482.0], [22.7, 482.0], [22.8, 482.0], [22.9, 482.0], [23.0, 484.0], [23.1, 484.0], [23.2, 484.0], [23.3, 484.0], [23.4, 484.0], [23.5, 484.0], [23.6, 484.0], [23.7, 484.0], [23.8, 484.0], [23.9, 484.0], [24.0, 484.0], [24.1, 484.0], [24.2, 484.0], [24.3, 484.0], [24.4, 484.0], [24.5, 484.0], [24.6, 484.0], [24.7, 484.0], [24.8, 484.0], [24.9, 484.0], [25.0, 487.0], [25.1, 487.0], [25.2, 487.0], [25.3, 487.0], [25.4, 487.0], [25.5, 487.0], [25.6, 487.0], [25.7, 487.0], [25.8, 487.0], [25.9, 487.0], [26.0, 488.0], [26.1, 488.0], [26.2, 488.0], [26.3, 488.0], [26.4, 488.0], [26.5, 488.0], [26.6, 488.0], [26.7, 488.0], [26.8, 488.0], [26.9, 488.0], [27.0, 488.0], [27.1, 488.0], [27.2, 488.0], [27.3, 488.0], [27.4, 488.0], [27.5, 488.0], [27.6, 488.0], [27.7, 488.0], [27.8, 488.0], [27.9, 488.0], [28.0, 506.0], [28.1, 506.0], [28.2, 506.0], [28.3, 506.0], [28.4, 506.0], [28.5, 506.0], [28.6, 506.0], [28.7, 506.0], [28.8, 506.0], [28.9, 506.0], [29.0, 518.0], [29.1, 518.0], [29.2, 518.0], [29.3, 518.0], [29.4, 518.0], [29.5, 518.0], [29.6, 518.0], [29.7, 518.0], [29.8, 518.0], [29.9, 518.0], [30.0, 518.0], [30.1, 518.0], [30.2, 518.0], [30.3, 518.0], [30.4, 518.0], [30.5, 518.0], [30.6, 518.0], [30.7, 518.0], [30.8, 518.0], [30.9, 518.0], [31.0, 523.0], [31.1, 523.0], [31.2, 523.0], [31.3, 523.0], [31.4, 523.0], [31.5, 523.0], [31.6, 523.0], [31.7, 523.0], [31.8, 523.0], [31.9, 523.0], [32.0, 526.0], [32.1, 526.0], [32.2, 526.0], [32.3, 526.0], [32.4, 526.0], [32.5, 526.0], [32.6, 526.0], [32.7, 526.0], [32.8, 526.0], [32.9, 526.0], [33.0, 527.0], [33.1, 527.0], [33.2, 527.0], [33.3, 527.0], [33.4, 527.0], [33.5, 527.0], [33.6, 527.0], [33.7, 527.0], [33.8, 527.0], [33.9, 527.0], [34.0, 529.0], [34.1, 529.0], [34.2, 529.0], [34.3, 529.0], [34.4, 529.0], [34.5, 529.0], [34.6, 529.0], [34.7, 529.0], [34.8, 529.0], [34.9, 529.0], [35.0, 535.0], [35.1, 535.0], [35.2, 535.0], [35.3, 535.0], [35.4, 535.0], [35.5, 535.0], [35.6, 535.0], [35.7, 535.0], [35.8, 535.0], [35.9, 535.0], [36.0, 536.0], [36.1, 536.0], [36.2, 536.0], [36.3, 536.0], [36.4, 536.0], [36.5, 536.0], [36.6, 536.0], [36.7, 536.0], [36.8, 536.0], [36.9, 536.0], [37.0, 559.0], [37.1, 559.0], [37.2, 559.0], [37.3, 559.0], [37.4, 559.0], [37.5, 559.0], [37.6, 559.0], [37.7, 559.0], [37.8, 559.0], [37.9, 559.0], [38.0, 589.0], [38.1, 589.0], [38.2, 589.0], [38.3, 589.0], [38.4, 589.0], [38.5, 589.0], [38.6, 589.0], [38.7, 589.0], [38.8, 589.0], [38.9, 589.0], [39.0, 610.0], [39.1, 610.0], [39.2, 610.0], [39.3, 610.0], [39.4, 610.0], [39.5, 610.0], [39.6, 610.0], [39.7, 610.0], [39.8, 610.0], [39.9, 610.0], [40.0, 622.0], [40.1, 622.0], [40.2, 622.0], [40.3, 622.0], [40.4, 622.0], [40.5, 622.0], [40.6, 622.0], [40.7, 622.0], [40.8, 622.0], [40.9, 622.0], [41.0, 623.0], [41.1, 623.0], [41.2, 623.0], [41.3, 623.0], [41.4, 623.0], [41.5, 623.0], [41.6, 623.0], [41.7, 623.0], [41.8, 623.0], [41.9, 623.0], [42.0, 624.0], [42.1, 624.0], [42.2, 624.0], [42.3, 624.0], [42.4, 624.0], [42.5, 624.0], [42.6, 624.0], [42.7, 624.0], [42.8, 624.0], [42.9, 624.0], [43.0, 627.0], [43.1, 627.0], [43.2, 627.0], [43.3, 627.0], [43.4, 627.0], [43.5, 627.0], [43.6, 627.0], [43.7, 627.0], [43.8, 627.0], [43.9, 627.0], [44.0, 633.0], [44.1, 633.0], [44.2, 633.0], [44.3, 633.0], [44.4, 633.0], [44.5, 633.0], [44.6, 633.0], [44.7, 633.0], [44.8, 633.0], [44.9, 633.0], [45.0, 636.0], [45.1, 636.0], [45.2, 636.0], [45.3, 636.0], [45.4, 636.0], [45.5, 636.0], [45.6, 636.0], [45.7, 636.0], [45.8, 636.0], [45.9, 636.0], [46.0, 663.0], [46.1, 663.0], [46.2, 663.0], [46.3, 663.0], [46.4, 663.0], [46.5, 663.0], [46.6, 663.0], [46.7, 663.0], [46.8, 663.0], [46.9, 663.0], [47.0, 664.0], [47.1, 664.0], [47.2, 664.0], [47.3, 664.0], [47.4, 664.0], [47.5, 664.0], [47.6, 664.0], [47.7, 664.0], [47.8, 664.0], [47.9, 664.0], [48.0, 686.0], [48.1, 686.0], [48.2, 686.0], [48.3, 686.0], [48.4, 686.0], [48.5, 686.0], [48.6, 686.0], [48.7, 686.0], [48.8, 686.0], [48.9, 686.0], [49.0, 689.0], [49.1, 689.0], [49.2, 689.0], [49.3, 689.0], [49.4, 689.0], [49.5, 689.0], [49.6, 689.0], [49.7, 689.0], [49.8, 689.0], [49.9, 689.0], [50.0, 710.0], [50.1, 710.0], [50.2, 710.0], [50.3, 710.0], [50.4, 710.0], [50.5, 710.0], [50.6, 710.0], [50.7, 710.0], [50.8, 710.0], [50.9, 710.0], [51.0, 717.0], [51.1, 717.0], [51.2, 717.0], [51.3, 717.0], [51.4, 717.0], [51.5, 717.0], [51.6, 717.0], [51.7, 717.0], [51.8, 717.0], [51.9, 717.0], [52.0, 725.0], [52.1, 725.0], [52.2, 725.0], [52.3, 725.0], [52.4, 725.0], [52.5, 725.0], [52.6, 725.0], [52.7, 725.0], [52.8, 725.0], [52.9, 725.0], [53.0, 725.0], [53.1, 725.0], [53.2, 725.0], [53.3, 725.0], [53.4, 725.0], [53.5, 725.0], [53.6, 725.0], [53.7, 725.0], [53.8, 725.0], [53.9, 725.0], [54.0, 730.0], [54.1, 730.0], [54.2, 730.0], [54.3, 730.0], [54.4, 730.0], [54.5, 730.0], [54.6, 730.0], [54.7, 730.0], [54.8, 730.0], [54.9, 730.0], [55.0, 752.0], [55.1, 752.0], [55.2, 752.0], [55.3, 752.0], [55.4, 752.0], [55.5, 752.0], [55.6, 752.0], [55.7, 752.0], [55.8, 752.0], [55.9, 752.0], [56.0, 755.0], [56.1, 755.0], [56.2, 755.0], [56.3, 755.0], [56.4, 755.0], [56.5, 755.0], [56.6, 755.0], [56.7, 755.0], [56.8, 755.0], [56.9, 755.0], [57.0, 762.0], [57.1, 762.0], [57.2, 762.0], [57.3, 762.0], [57.4, 762.0], [57.5, 762.0], [57.6, 762.0], [57.7, 762.0], [57.8, 762.0], [57.9, 762.0], [58.0, 779.0], [58.1, 779.0], [58.2, 779.0], [58.3, 779.0], [58.4, 779.0], [58.5, 779.0], [58.6, 779.0], [58.7, 779.0], [58.8, 779.0], [58.9, 779.0], [59.0, 840.0], [59.1, 840.0], [59.2, 840.0], [59.3, 840.0], [59.4, 840.0], [59.5, 840.0], [59.6, 840.0], [59.7, 840.0], [59.8, 840.0], [59.9, 840.0], [60.0, 896.0], [60.1, 896.0], [60.2, 896.0], [60.3, 896.0], [60.4, 896.0], [60.5, 896.0], [60.6, 896.0], [60.7, 896.0], [60.8, 896.0], [60.9, 896.0], [61.0, 910.0], [61.1, 910.0], [61.2, 910.0], [61.3, 910.0], [61.4, 910.0], [61.5, 910.0], [61.6, 910.0], [61.7, 910.0], [61.8, 910.0], [61.9, 910.0], [62.0, 972.0], [62.1, 972.0], [62.2, 972.0], [62.3, 972.0], [62.4, 972.0], [62.5, 972.0], [62.6, 972.0], [62.7, 972.0], [62.8, 972.0], [62.9, 972.0], [63.0, 984.0], [63.1, 984.0], [63.2, 984.0], [63.3, 984.0], [63.4, 984.0], [63.5, 984.0], [63.6, 984.0], [63.7, 984.0], [63.8, 984.0], [63.9, 984.0], [64.0, 1006.0], [64.1, 1006.0], [64.2, 1006.0], [64.3, 1006.0], [64.4, 1006.0], [64.5, 1006.0], [64.6, 1006.0], [64.7, 1006.0], [64.8, 1006.0], [64.9, 1006.0], [65.0, 1023.0], [65.1, 1023.0], [65.2, 1023.0], [65.3, 1023.0], [65.4, 1023.0], [65.5, 1023.0], [65.6, 1023.0], [65.7, 1023.0], [65.8, 1023.0], [65.9, 1023.0], [66.0, 1037.0], [66.1, 1037.0], [66.2, 1037.0], [66.3, 1037.0], [66.4, 1037.0], [66.5, 1037.0], [66.6, 1037.0], [66.7, 1037.0], [66.8, 1037.0], [66.9, 1037.0], [67.0, 1081.0], [67.1, 1081.0], [67.2, 1081.0], [67.3, 1081.0], [67.4, 1081.0], [67.5, 1081.0], [67.6, 1081.0], [67.7, 1081.0], [67.8, 1081.0], [67.9, 1081.0], [68.0, 1116.0], [68.1, 1116.0], [68.2, 1116.0], [68.3, 1116.0], [68.4, 1116.0], [68.5, 1116.0], [68.6, 1116.0], [68.7, 1116.0], [68.8, 1116.0], [68.9, 1116.0], [69.0, 1152.0], [69.1, 1152.0], [69.2, 1152.0], [69.3, 1152.0], [69.4, 1152.0], [69.5, 1152.0], [69.6, 1152.0], [69.7, 1152.0], [69.8, 1152.0], [69.9, 1152.0], [70.0, 1162.0], [70.1, 1162.0], [70.2, 1162.0], [70.3, 1162.0], [70.4, 1162.0], [70.5, 1162.0], [70.6, 1162.0], [70.7, 1162.0], [70.8, 1162.0], [70.9, 1162.0], [71.0, 1186.0], [71.1, 1186.0], [71.2, 1186.0], [71.3, 1186.0], [71.4, 1186.0], [71.5, 1186.0], [71.6, 1186.0], [71.7, 1186.0], [71.8, 1186.0], [71.9, 1186.0], [72.0, 1217.0], [72.1, 1217.0], [72.2, 1217.0], [72.3, 1217.0], [72.4, 1217.0], [72.5, 1217.0], [72.6, 1217.0], [72.7, 1217.0], [72.8, 1217.0], [72.9, 1217.0], [73.0, 1233.0], [73.1, 1233.0], [73.2, 1233.0], [73.3, 1233.0], [73.4, 1233.0], [73.5, 1233.0], [73.6, 1233.0], [73.7, 1233.0], [73.8, 1233.0], [73.9, 1233.0], [74.0, 1243.0], [74.1, 1243.0], [74.2, 1243.0], [74.3, 1243.0], [74.4, 1243.0], [74.5, 1243.0], [74.6, 1243.0], [74.7, 1243.0], [74.8, 1243.0], [74.9, 1243.0], [75.0, 1255.0], [75.1, 1255.0], [75.2, 1255.0], [75.3, 1255.0], [75.4, 1255.0], [75.5, 1255.0], [75.6, 1255.0], [75.7, 1255.0], [75.8, 1255.0], [75.9, 1255.0], [76.0, 1264.0], [76.1, 1264.0], [76.2, 1264.0], [76.3, 1264.0], [76.4, 1264.0], [76.5, 1264.0], [76.6, 1264.0], [76.7, 1264.0], [76.8, 1264.0], [76.9, 1264.0], [77.0, 1265.0], [77.1, 1265.0], [77.2, 1265.0], [77.3, 1265.0], [77.4, 1265.0], [77.5, 1265.0], [77.6, 1265.0], [77.7, 1265.0], [77.8, 1265.0], [77.9, 1265.0], [78.0, 1271.0], [78.1, 1271.0], [78.2, 1271.0], [78.3, 1271.0], [78.4, 1271.0], [78.5, 1271.0], [78.6, 1271.0], [78.7, 1271.0], [78.8, 1271.0], [78.9, 1271.0], [79.0, 1274.0], [79.1, 1274.0], [79.2, 1274.0], [79.3, 1274.0], [79.4, 1274.0], [79.5, 1274.0], [79.6, 1274.0], [79.7, 1274.0], [79.8, 1274.0], [79.9, 1274.0], [80.0, 1283.0], [80.1, 1283.0], [80.2, 1283.0], [80.3, 1283.0], [80.4, 1283.0], [80.5, 1283.0], [80.6, 1283.0], [80.7, 1283.0], [80.8, 1283.0], [80.9, 1283.0], [81.0, 1285.0], [81.1, 1285.0], [81.2, 1285.0], [81.3, 1285.0], [81.4, 1285.0], [81.5, 1285.0], [81.6, 1285.0], [81.7, 1285.0], [81.8, 1285.0], [81.9, 1285.0], [82.0, 1287.0], [82.1, 1287.0], [82.2, 1287.0], [82.3, 1287.0], [82.4, 1287.0], [82.5, 1287.0], [82.6, 1287.0], [82.7, 1287.0], [82.8, 1287.0], [82.9, 1287.0], [83.0, 1296.0], [83.1, 1296.0], [83.2, 1296.0], [83.3, 1296.0], [83.4, 1296.0], [83.5, 1296.0], [83.6, 1296.0], [83.7, 1296.0], [83.8, 1296.0], [83.9, 1296.0], [84.0, 1307.0], [84.1, 1307.0], [84.2, 1307.0], [84.3, 1307.0], [84.4, 1307.0], [84.5, 1307.0], [84.6, 1307.0], [84.7, 1307.0], [84.8, 1307.0], [84.9, 1307.0], [85.0, 1318.0], [85.1, 1318.0], [85.2, 1318.0], [85.3, 1318.0], [85.4, 1318.0], [85.5, 1318.0], [85.6, 1318.0], [85.7, 1318.0], [85.8, 1318.0], [85.9, 1318.0], [86.0, 1322.0], [86.1, 1322.0], [86.2, 1322.0], [86.3, 1322.0], [86.4, 1322.0], [86.5, 1322.0], [86.6, 1322.0], [86.7, 1322.0], [86.8, 1322.0], [86.9, 1322.0], [87.0, 1361.0], [87.1, 1361.0], [87.2, 1361.0], [87.3, 1361.0], [87.4, 1361.0], [87.5, 1361.0], [87.6, 1361.0], [87.7, 1361.0], [87.8, 1361.0], [87.9, 1361.0], [88.0, 1370.0], [88.1, 1370.0], [88.2, 1370.0], [88.3, 1370.0], [88.4, 1370.0], [88.5, 1370.0], [88.6, 1370.0], [88.7, 1370.0], [88.8, 1370.0], [88.9, 1370.0], [89.0, 1511.0], [89.1, 1511.0], [89.2, 1511.0], [89.3, 1511.0], [89.4, 1511.0], [89.5, 1511.0], [89.6, 1511.0], [89.7, 1511.0], [89.8, 1511.0], [89.9, 1511.0], [90.0, 1514.0], [90.1, 1514.0], [90.2, 1514.0], [90.3, 1514.0], [90.4, 1514.0], [90.5, 1514.0], [90.6, 1514.0], [90.7, 1514.0], [90.8, 1514.0], [90.9, 1514.0], [91.0, 1553.0], [91.1, 1553.0], [91.2, 1553.0], [91.3, 1553.0], [91.4, 1553.0], [91.5, 1553.0], [91.6, 1553.0], [91.7, 1553.0], [91.8, 1553.0], [91.9, 1553.0], [92.0, 1563.0], [92.1, 1563.0], [92.2, 1563.0], [92.3, 1563.0], [92.4, 1563.0], [92.5, 1563.0], [92.6, 1563.0], [92.7, 1563.0], [92.8, 1563.0], [92.9, 1563.0], [93.0, 1662.0], [93.1, 1662.0], [93.2, 1662.0], [93.3, 1662.0], [93.4, 1662.0], [93.5, 1662.0], [93.6, 1662.0], [93.7, 1662.0], [93.8, 1662.0], [93.9, 1662.0], [94.0, 1676.0], [94.1, 1676.0], [94.2, 1676.0], [94.3, 1676.0], [94.4, 1676.0], [94.5, 1676.0], [94.6, 1676.0], [94.7, 1676.0], [94.8, 1676.0], [94.9, 1676.0], [95.0, 1702.0], [95.1, 1702.0], [95.2, 1702.0], [95.3, 1702.0], [95.4, 1702.0], [95.5, 1702.0], [95.6, 1702.0], [95.7, 1702.0], [95.8, 1702.0], [95.9, 1702.0], [96.0, 1812.0], [96.1, 1812.0], [96.2, 1812.0], [96.3, 1812.0], [96.4, 1812.0], [96.5, 1812.0], [96.6, 1812.0], [96.7, 1812.0], [96.8, 1812.0], [96.9, 1812.0], [97.0, 1868.0], [97.1, 1868.0], [97.2, 1868.0], [97.3, 1868.0], [97.4, 1868.0], [97.5, 1868.0], [97.6, 1868.0], [97.7, 1868.0], [97.8, 1868.0], [97.9, 1868.0], [98.0, 1876.0], [98.1, 1876.0], [98.2, 1876.0], [98.3, 1876.0], [98.4, 1876.0], [98.5, 1876.0], [98.6, 1876.0], [98.7, 1876.0], [98.8, 1876.0], [98.9, 1876.0], [99.0, 2033.0], [99.1, 2033.0], [99.2, 2033.0], [99.3, 2033.0], [99.4, 2033.0], [99.5, 2033.0], [99.6, 2033.0], [99.7, 2033.0], [99.8, 2033.0], [99.9, 2033.0]], "isOverall": false, "label": "Search Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 28.0, "series": [{"data": [[600.0, 11.0], [700.0, 9.0], [800.0, 2.0], [900.0, 3.0], [1000.0, 4.0], [1100.0, 4.0], [1200.0, 12.0], [1300.0, 5.0], [1500.0, 4.0], [400.0, 28.0], [1600.0, 2.0], [1700.0, 1.0], [1800.0, 3.0], [2000.0, 1.0], [500.0, 11.0]], "isOverall": false, "label": "Search Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 11.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 61.0, "series": [{"data": [[0.0, 28.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 61.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 11.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.3333333333333335, "minX": 1.76175018E12, "maxY": 8.468085106382976, "series": [{"data": [[1.76175018E12, 8.468085106382976], [1.76175024E12, 2.3333333333333335]], "isOverall": false, "label": "Search Functionality Test", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76175024E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 636.0, "minX": 1.0, "maxY": 1061.3333333333333, "series": [{"data": [[4.0, 892.5], [8.0, 1017.0], [2.0, 694.5], [1.0, 636.0], [9.0, 816.1363636363636], [5.0, 845.3333333333334], [10.0, 858.7894736842105], [11.0, 1061.3333333333333], [3.0, 924.0], [6.0, 975.2], [7.0, 834.125]], "isOverall": false, "label": "Search Request", "isController": false}, {"data": [[8.099999999999994, 864.4500000000003]], "isOverall": false, "label": "Search Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 11.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 59.5, "minX": 1.76175018E12, "maxY": 418593.36666666664, "series": [{"data": [[1.76175018E12, 418593.36666666664], [1.76175024E12, 26782.233333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76175018E12, 932.1666666666666], [1.76175024E12, 59.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76175024E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 687.3333333333334, "minX": 1.76175018E12, "maxY": 875.7553191489365, "series": [{"data": [[1.76175018E12, 875.7553191489365], [1.76175024E12, 687.3333333333334]], "isOverall": false, "label": "Search Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175024E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 263.6666666666667, "minX": 1.76175018E12, "maxY": 365.26595744680856, "series": [{"data": [[1.76175018E12, 365.26595744680856], [1.76175024E12, 263.6666666666667]], "isOverall": false, "label": "Search Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175024E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.76175018E12, "maxY": 71.22340425531915, "series": [{"data": [[1.76175018E12, 71.22340425531915], [1.76175024E12, 0.0]], "isOverall": false, "label": "Search Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175024E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 424.0, "minX": 1.76175018E12, "maxY": 2033.0, "series": [{"data": [[1.76175018E12, 2033.0], [1.76175024E12, 910.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76175018E12, 424.0], [1.76175024E12, 427.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76175018E12, 1533.5], [1.76175024E12, 910.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76175018E12, 2033.0], [1.76175024E12, 910.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76175018E12, 699.5], [1.76175024E12, 694.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.76175018E12, 1729.5], [1.76175024E12, 910.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76175024E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 527.0, "minX": 1.0, "maxY": 1023.0, "series": [{"data": [[2.0, 637.0], [1.0, 896.0], [4.0, 923.0], [5.0, 1023.0], [3.0, 527.0], [6.0, 1004.5], [7.0, 689.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 7.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 268.0, "minX": 1.0, "maxY": 335.0, "series": [{"data": [[2.0, 288.0], [1.0, 268.0], [4.0, 278.5], [5.0, 335.0], [3.0, 298.0], [6.0, 323.0], [7.0, 270.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 7.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.76175018E12, "maxY": 1.6, "series": [{"data": [[1.76175018E12, 1.6], [1.76175024E12, 0.06666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76175024E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.76175018E12, "maxY": 1.5666666666666667, "series": [{"data": [[1.76175018E12, 1.5666666666666667], [1.76175024E12, 0.1]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76175024E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.76175018E12, "maxY": 1.5666666666666667, "series": [{"data": [[1.76175018E12, 1.5666666666666667], [1.76175024E12, 0.1]], "isOverall": false, "label": "Search Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175024E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.76175018E12, "maxY": 1.5666666666666667, "series": [{"data": [[1.76175018E12, 1.5666666666666667], [1.76175024E12, 0.1]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175024E12, "title": "Total Transactions Per Second"}},
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

