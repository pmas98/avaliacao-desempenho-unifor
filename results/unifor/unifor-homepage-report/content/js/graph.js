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
        data: {"result": {"minY": 264.0, "minX": 0.0, "maxY": 602.0, "series": [{"data": [[0.0, 264.0], [0.1, 264.0], [0.2, 265.0], [0.3, 265.0], [0.4, 266.0], [0.5, 266.0], [0.6, 266.0], [0.7, 266.0], [0.8, 266.0], [0.9, 266.0], [1.0, 267.0], [1.1, 267.0], [1.2, 267.0], [1.3, 267.0], [1.4, 267.0], [1.5, 267.0], [1.6, 267.0], [1.7, 267.0], [1.8, 267.0], [1.9, 267.0], [2.0, 267.0], [2.1, 267.0], [2.2, 268.0], [2.3, 268.0], [2.4, 268.0], [2.5, 268.0], [2.6, 268.0], [2.7, 268.0], [2.8, 268.0], [2.9, 268.0], [3.0, 268.0], [3.1, 268.0], [3.2, 268.0], [3.3, 268.0], [3.4, 268.0], [3.5, 268.0], [3.6, 268.0], [3.7, 268.0], [3.8, 268.0], [3.9, 268.0], [4.0, 268.0], [4.1, 268.0], [4.2, 268.0], [4.3, 268.0], [4.4, 268.0], [4.5, 268.0], [4.6, 268.0], [4.7, 268.0], [4.8, 268.0], [4.9, 269.0], [5.0, 269.0], [5.1, 269.0], [5.2, 269.0], [5.3, 269.0], [5.4, 269.0], [5.5, 269.0], [5.6, 269.0], [5.7, 269.0], [5.8, 269.0], [5.9, 269.0], [6.0, 269.0], [6.1, 269.0], [6.2, 269.0], [6.3, 269.0], [6.4, 269.0], [6.5, 269.0], [6.6, 269.0], [6.7, 269.0], [6.8, 269.0], [6.9, 269.0], [7.0, 269.0], [7.1, 269.0], [7.2, 269.0], [7.3, 269.0], [7.4, 269.0], [7.5, 269.0], [7.6, 269.0], [7.7, 269.0], [7.8, 269.0], [7.9, 270.0], [8.0, 270.0], [8.1, 270.0], [8.2, 270.0], [8.3, 270.0], [8.4, 270.0], [8.5, 270.0], [8.6, 270.0], [8.7, 270.0], [8.8, 270.0], [8.9, 270.0], [9.0, 270.0], [9.1, 270.0], [9.2, 270.0], [9.3, 270.0], [9.4, 270.0], [9.5, 270.0], [9.6, 270.0], [9.7, 270.0], [9.8, 270.0], [9.9, 270.0], [10.0, 270.0], [10.1, 270.0], [10.2, 270.0], [10.3, 270.0], [10.4, 270.0], [10.5, 270.0], [10.6, 270.0], [10.7, 271.0], [10.8, 271.0], [10.9, 271.0], [11.0, 271.0], [11.1, 271.0], [11.2, 271.0], [11.3, 271.0], [11.4, 271.0], [11.5, 271.0], [11.6, 271.0], [11.7, 271.0], [11.8, 271.0], [11.9, 271.0], [12.0, 271.0], [12.1, 271.0], [12.2, 271.0], [12.3, 272.0], [12.4, 272.0], [12.5, 272.0], [12.6, 272.0], [12.7, 272.0], [12.8, 272.0], [12.9, 272.0], [13.0, 272.0], [13.1, 272.0], [13.2, 272.0], [13.3, 272.0], [13.4, 272.0], [13.5, 272.0], [13.6, 272.0], [13.7, 272.0], [13.8, 272.0], [13.9, 272.0], [14.0, 272.0], [14.1, 272.0], [14.2, 272.0], [14.3, 272.0], [14.4, 272.0], [14.5, 272.0], [14.6, 272.0], [14.7, 272.0], [14.8, 272.0], [14.9, 272.0], [15.0, 272.0], [15.1, 272.0], [15.2, 272.0], [15.3, 272.0], [15.4, 272.0], [15.5, 272.0], [15.6, 272.0], [15.7, 272.0], [15.8, 272.0], [15.9, 272.0], [16.0, 273.0], [16.1, 273.0], [16.2, 273.0], [16.3, 273.0], [16.4, 273.0], [16.5, 273.0], [16.6, 273.0], [16.7, 273.0], [16.8, 273.0], [16.9, 273.0], [17.0, 273.0], [17.1, 273.0], [17.2, 273.0], [17.3, 273.0], [17.4, 273.0], [17.5, 273.0], [17.6, 273.0], [17.7, 273.0], [17.8, 273.0], [17.9, 273.0], [18.0, 273.0], [18.1, 273.0], [18.2, 273.0], [18.3, 273.0], [18.4, 273.0], [18.5, 273.0], [18.6, 273.0], [18.7, 273.0], [18.8, 273.0], [18.9, 273.0], [19.0, 273.0], [19.1, 273.0], [19.2, 273.0], [19.3, 273.0], [19.4, 273.0], [19.5, 273.0], [19.6, 273.0], [19.7, 273.0], [19.8, 273.0], [19.9, 273.0], [20.0, 273.0], [20.1, 273.0], [20.2, 274.0], [20.3, 274.0], [20.4, 274.0], [20.5, 274.0], [20.6, 274.0], [20.7, 274.0], [20.8, 274.0], [20.9, 274.0], [21.0, 274.0], [21.1, 274.0], [21.2, 274.0], [21.3, 274.0], [21.4, 274.0], [21.5, 274.0], [21.6, 274.0], [21.7, 274.0], [21.8, 274.0], [21.9, 274.0], [22.0, 274.0], [22.1, 274.0], [22.2, 274.0], [22.3, 274.0], [22.4, 274.0], [22.5, 274.0], [22.6, 274.0], [22.7, 274.0], [22.8, 274.0], [22.9, 274.0], [23.0, 274.0], [23.1, 274.0], [23.2, 274.0], [23.3, 274.0], [23.4, 275.0], [23.5, 275.0], [23.6, 275.0], [23.7, 275.0], [23.8, 275.0], [23.9, 275.0], [24.0, 275.0], [24.1, 275.0], [24.2, 275.0], [24.3, 275.0], [24.4, 275.0], [24.5, 275.0], [24.6, 275.0], [24.7, 275.0], [24.8, 276.0], [24.9, 276.0], [25.0, 276.0], [25.1, 276.0], [25.2, 276.0], [25.3, 276.0], [25.4, 276.0], [25.5, 276.0], [25.6, 276.0], [25.7, 276.0], [25.8, 276.0], [25.9, 276.0], [26.0, 277.0], [26.1, 277.0], [26.2, 277.0], [26.3, 277.0], [26.4, 277.0], [26.5, 277.0], [26.6, 277.0], [26.7, 277.0], [26.8, 277.0], [26.9, 277.0], [27.0, 277.0], [27.1, 277.0], [27.2, 277.0], [27.3, 277.0], [27.4, 277.0], [27.5, 277.0], [27.6, 278.0], [27.7, 278.0], [27.8, 278.0], [27.9, 278.0], [28.0, 278.0], [28.1, 278.0], [28.2, 278.0], [28.3, 278.0], [28.4, 278.0], [28.5, 278.0], [28.6, 278.0], [28.7, 278.0], [28.8, 278.0], [28.9, 278.0], [29.0, 279.0], [29.1, 279.0], [29.2, 279.0], [29.3, 279.0], [29.4, 279.0], [29.5, 279.0], [29.6, 279.0], [29.7, 279.0], [29.8, 279.0], [29.9, 279.0], [30.0, 279.0], [30.1, 279.0], [30.2, 279.0], [30.3, 279.0], [30.4, 280.0], [30.5, 280.0], [30.6, 280.0], [30.7, 280.0], [30.8, 280.0], [30.9, 280.0], [31.0, 280.0], [31.1, 280.0], [31.2, 280.0], [31.3, 280.0], [31.4, 280.0], [31.5, 280.0], [31.6, 280.0], [31.7, 280.0], [31.8, 281.0], [31.9, 281.0], [32.0, 281.0], [32.1, 281.0], [32.2, 281.0], [32.3, 281.0], [32.4, 281.0], [32.5, 281.0], [32.6, 282.0], [32.7, 282.0], [32.8, 282.0], [32.9, 282.0], [33.0, 282.0], [33.1, 282.0], [33.2, 283.0], [33.3, 283.0], [33.4, 283.0], [33.5, 283.0], [33.6, 284.0], [33.7, 284.0], [33.8, 284.0], [33.9, 284.0], [34.0, 284.0], [34.1, 284.0], [34.2, 284.0], [34.3, 284.0], [34.4, 284.0], [34.5, 284.0], [34.6, 286.0], [34.7, 286.0], [34.8, 286.0], [34.9, 286.0], [35.0, 286.0], [35.1, 286.0], [35.2, 286.0], [35.3, 286.0], [35.4, 289.0], [35.5, 289.0], [35.6, 289.0], [35.7, 289.0], [35.8, 290.0], [35.9, 290.0], [36.0, 291.0], [36.1, 291.0], [36.2, 291.0], [36.3, 291.0], [36.4, 291.0], [36.5, 291.0], [36.6, 291.0], [36.7, 291.0], [36.8, 292.0], [36.9, 292.0], [37.0, 293.0], [37.1, 293.0], [37.2, 295.0], [37.3, 295.0], [37.4, 297.0], [37.5, 297.0], [37.6, 297.0], [37.7, 297.0], [37.8, 299.0], [37.9, 299.0], [38.0, 299.0], [38.1, 299.0], [38.2, 300.0], [38.3, 300.0], [38.4, 300.0], [38.5, 300.0], [38.6, 302.0], [38.7, 302.0], [38.8, 303.0], [38.9, 303.0], [39.0, 305.0], [39.1, 305.0], [39.2, 305.0], [39.3, 305.0], [39.4, 306.0], [39.5, 306.0], [39.6, 306.0], [39.7, 306.0], [39.8, 306.0], [39.9, 306.0], [40.0, 306.0], [40.1, 306.0], [40.2, 306.0], [40.3, 306.0], [40.4, 306.0], [40.5, 306.0], [40.6, 306.0], [40.7, 306.0], [40.8, 307.0], [40.9, 307.0], [41.0, 307.0], [41.1, 307.0], [41.2, 307.0], [41.3, 307.0], [41.4, 307.0], [41.5, 307.0], [41.6, 308.0], [41.7, 308.0], [41.8, 308.0], [41.9, 308.0], [42.0, 308.0], [42.1, 308.0], [42.2, 308.0], [42.3, 308.0], [42.4, 308.0], [42.5, 308.0], [42.6, 308.0], [42.7, 308.0], [42.8, 308.0], [42.9, 308.0], [43.0, 308.0], [43.1, 308.0], [43.2, 308.0], [43.3, 308.0], [43.4, 308.0], [43.5, 308.0], [43.6, 308.0], [43.7, 308.0], [43.8, 308.0], [43.9, 308.0], [44.0, 308.0], [44.1, 308.0], [44.2, 309.0], [44.3, 309.0], [44.4, 309.0], [44.5, 309.0], [44.6, 309.0], [44.7, 309.0], [44.8, 309.0], [44.9, 309.0], [45.0, 309.0], [45.1, 309.0], [45.2, 309.0], [45.3, 309.0], [45.4, 310.0], [45.5, 310.0], [45.6, 310.0], [45.7, 310.0], [45.8, 310.0], [45.9, 310.0], [46.0, 310.0], [46.1, 310.0], [46.2, 310.0], [46.3, 310.0], [46.4, 310.0], [46.5, 310.0], [46.6, 310.0], [46.7, 310.0], [46.8, 310.0], [46.9, 310.0], [47.0, 310.0], [47.1, 310.0], [47.2, 310.0], [47.3, 310.0], [47.4, 311.0], [47.5, 311.0], [47.6, 311.0], [47.7, 311.0], [47.8, 311.0], [47.9, 311.0], [48.0, 311.0], [48.1, 311.0], [48.2, 311.0], [48.3, 311.0], [48.4, 311.0], [48.5, 311.0], [48.6, 311.0], [48.7, 311.0], [48.8, 311.0], [48.9, 311.0], [49.0, 311.0], [49.1, 311.0], [49.2, 311.0], [49.3, 311.0], [49.4, 311.0], [49.5, 311.0], [49.6, 311.0], [49.7, 311.0], [49.8, 311.0], [49.9, 311.0], [50.0, 311.0], [50.1, 311.0], [50.2, 311.0], [50.3, 311.0], [50.4, 311.0], [50.5, 311.0], [50.6, 311.0], [50.7, 311.0], [50.8, 311.0], [50.9, 311.0], [51.0, 311.0], [51.1, 311.0], [51.2, 311.0], [51.3, 311.0], [51.4, 311.0], [51.5, 311.0], [51.6, 311.0], [51.7, 311.0], [51.8, 312.0], [51.9, 312.0], [52.0, 312.0], [52.1, 312.0], [52.2, 312.0], [52.3, 312.0], [52.4, 312.0], [52.5, 312.0], [52.6, 312.0], [52.7, 312.0], [52.8, 312.0], [52.9, 312.0], [53.0, 312.0], [53.1, 312.0], [53.2, 312.0], [53.3, 312.0], [53.4, 312.0], [53.5, 312.0], [53.6, 312.0], [53.7, 312.0], [53.8, 312.0], [53.9, 312.0], [54.0, 312.0], [54.1, 312.0], [54.2, 312.0], [54.3, 312.0], [54.4, 312.0], [54.5, 312.0], [54.6, 312.0], [54.7, 312.0], [54.8, 312.0], [54.9, 312.0], [55.0, 313.0], [55.1, 313.0], [55.2, 313.0], [55.3, 313.0], [55.4, 313.0], [55.5, 313.0], [55.6, 313.0], [55.7, 313.0], [55.8, 313.0], [55.9, 313.0], [56.0, 313.0], [56.1, 313.0], [56.2, 313.0], [56.3, 313.0], [56.4, 313.0], [56.5, 313.0], [56.6, 313.0], [56.7, 313.0], [56.8, 313.0], [56.9, 313.0], [57.0, 313.0], [57.1, 313.0], [57.2, 313.0], [57.3, 313.0], [57.4, 313.0], [57.5, 313.0], [57.6, 313.0], [57.7, 313.0], [57.8, 313.0], [57.9, 313.0], [58.0, 313.0], [58.1, 313.0], [58.2, 313.0], [58.3, 313.0], [58.4, 313.0], [58.5, 313.0], [58.6, 314.0], [58.7, 314.0], [58.8, 314.0], [58.9, 314.0], [59.0, 314.0], [59.1, 314.0], [59.2, 314.0], [59.3, 314.0], [59.4, 314.0], [59.5, 314.0], [59.6, 314.0], [59.7, 314.0], [59.8, 314.0], [59.9, 314.0], [60.0, 314.0], [60.1, 314.0], [60.2, 314.0], [60.3, 314.0], [60.4, 314.0], [60.5, 314.0], [60.6, 314.0], [60.7, 314.0], [60.8, 314.0], [60.9, 314.0], [61.0, 314.0], [61.1, 314.0], [61.2, 314.0], [61.3, 314.0], [61.4, 314.0], [61.5, 314.0], [61.6, 314.0], [61.7, 314.0], [61.8, 314.0], [61.9, 314.0], [62.0, 314.0], [62.1, 314.0], [62.2, 314.0], [62.3, 314.0], [62.4, 315.0], [62.5, 315.0], [62.6, 315.0], [62.7, 315.0], [62.8, 315.0], [62.9, 315.0], [63.0, 315.0], [63.1, 315.0], [63.2, 315.0], [63.3, 315.0], [63.4, 315.0], [63.5, 315.0], [63.6, 315.0], [63.7, 315.0], [63.8, 315.0], [63.9, 315.0], [64.0, 315.0], [64.1, 315.0], [64.2, 315.0], [64.3, 315.0], [64.4, 315.0], [64.5, 315.0], [64.6, 315.0], [64.7, 315.0], [64.8, 315.0], [64.9, 315.0], [65.0, 315.0], [65.1, 315.0], [65.2, 315.0], [65.3, 315.0], [65.4, 315.0], [65.5, 315.0], [65.6, 315.0], [65.7, 315.0], [65.8, 315.0], [65.9, 315.0], [66.0, 315.0], [66.1, 315.0], [66.2, 315.0], [66.3, 315.0], [66.4, 315.0], [66.5, 315.0], [66.6, 316.0], [66.7, 316.0], [66.8, 316.0], [66.9, 316.0], [67.0, 316.0], [67.1, 316.0], [67.2, 316.0], [67.3, 316.0], [67.4, 316.0], [67.5, 316.0], [67.6, 316.0], [67.7, 316.0], [67.8, 316.0], [67.9, 316.0], [68.0, 316.0], [68.1, 316.0], [68.2, 316.0], [68.3, 316.0], [68.4, 317.0], [68.5, 317.0], [68.6, 317.0], [68.7, 317.0], [68.8, 317.0], [68.9, 317.0], [69.0, 317.0], [69.1, 317.0], [69.2, 317.0], [69.3, 317.0], [69.4, 317.0], [69.5, 317.0], [69.6, 317.0], [69.7, 317.0], [69.8, 317.0], [69.9, 317.0], [70.0, 317.0], [70.1, 317.0], [70.2, 317.0], [70.3, 317.0], [70.4, 318.0], [70.5, 318.0], [70.6, 318.0], [70.7, 318.0], [70.8, 318.0], [70.9, 318.0], [71.0, 318.0], [71.1, 318.0], [71.2, 318.0], [71.3, 318.0], [71.4, 318.0], [71.5, 318.0], [71.6, 318.0], [71.7, 318.0], [71.8, 318.0], [71.9, 318.0], [72.0, 318.0], [72.1, 318.0], [72.2, 318.0], [72.3, 318.0], [72.4, 318.0], [72.5, 318.0], [72.6, 318.0], [72.7, 318.0], [72.8, 318.0], [72.9, 318.0], [73.0, 318.0], [73.1, 318.0], [73.2, 318.0], [73.3, 318.0], [73.4, 318.0], [73.5, 318.0], [73.6, 319.0], [73.7, 319.0], [73.8, 319.0], [73.9, 319.0], [74.0, 319.0], [74.1, 319.0], [74.2, 319.0], [74.3, 319.0], [74.4, 319.0], [74.5, 319.0], [74.6, 319.0], [74.7, 319.0], [74.8, 319.0], [74.9, 319.0], [75.0, 319.0], [75.1, 319.0], [75.2, 319.0], [75.3, 319.0], [75.4, 319.0], [75.5, 319.0], [75.6, 319.0], [75.7, 319.0], [75.8, 319.0], [75.9, 319.0], [76.0, 319.0], [76.1, 319.0], [76.2, 319.0], [76.3, 319.0], [76.4, 320.0], [76.5, 320.0], [76.6, 320.0], [76.7, 320.0], [76.8, 320.0], [76.9, 320.0], [77.0, 320.0], [77.1, 320.0], [77.2, 320.0], [77.3, 320.0], [77.4, 320.0], [77.5, 320.0], [77.6, 320.0], [77.7, 320.0], [77.8, 320.0], [77.9, 320.0], [78.0, 321.0], [78.1, 321.0], [78.2, 321.0], [78.3, 321.0], [78.4, 321.0], [78.5, 321.0], [78.6, 321.0], [78.7, 321.0], [78.8, 322.0], [78.9, 322.0], [79.0, 322.0], [79.1, 322.0], [79.2, 322.0], [79.3, 322.0], [79.4, 322.0], [79.5, 322.0], [79.6, 322.0], [79.7, 322.0], [79.8, 322.0], [79.9, 322.0], [80.0, 322.0], [80.1, 322.0], [80.2, 322.0], [80.3, 322.0], [80.4, 323.0], [80.5, 323.0], [80.6, 323.0], [80.7, 323.0], [80.8, 323.0], [80.9, 323.0], [81.0, 323.0], [81.1, 323.0], [81.2, 323.0], [81.3, 323.0], [81.4, 323.0], [81.5, 323.0], [81.6, 324.0], [81.7, 324.0], [81.8, 324.0], [81.9, 324.0], [82.0, 324.0], [82.1, 324.0], [82.2, 325.0], [82.3, 325.0], [82.4, 325.0], [82.5, 325.0], [82.6, 325.0], [82.7, 325.0], [82.8, 325.0], [82.9, 325.0], [83.0, 325.0], [83.1, 325.0], [83.2, 325.0], [83.3, 325.0], [83.4, 326.0], [83.5, 326.0], [83.6, 326.0], [83.7, 326.0], [83.8, 327.0], [83.9, 327.0], [84.0, 327.0], [84.1, 327.0], [84.2, 328.0], [84.3, 328.0], [84.4, 328.0], [84.5, 328.0], [84.6, 328.0], [84.7, 328.0], [84.8, 328.0], [84.9, 328.0], [85.0, 329.0], [85.1, 329.0], [85.2, 329.0], [85.3, 329.0], [85.4, 329.0], [85.5, 329.0], [85.6, 329.0], [85.7, 329.0], [85.8, 330.0], [85.9, 330.0], [86.0, 331.0], [86.1, 331.0], [86.2, 331.0], [86.3, 331.0], [86.4, 332.0], [86.5, 332.0], [86.6, 334.0], [86.7, 334.0], [86.8, 335.0], [86.9, 335.0], [87.0, 335.0], [87.1, 335.0], [87.2, 335.0], [87.3, 335.0], [87.4, 335.0], [87.5, 335.0], [87.6, 336.0], [87.7, 336.0], [87.8, 336.0], [87.9, 336.0], [88.0, 336.0], [88.1, 336.0], [88.2, 337.0], [88.3, 337.0], [88.4, 338.0], [88.5, 338.0], [88.6, 338.0], [88.7, 338.0], [88.8, 341.0], [88.9, 341.0], [89.0, 342.0], [89.1, 342.0], [89.2, 345.0], [89.3, 345.0], [89.4, 345.0], [89.5, 345.0], [89.6, 345.0], [89.7, 352.0], [89.8, 352.0], [89.9, 357.0], [90.0, 357.0], [90.1, 359.0], [90.2, 359.0], [90.3, 360.0], [90.4, 360.0], [90.5, 363.0], [90.6, 363.0], [90.7, 363.0], [90.8, 363.0], [90.9, 365.0], [91.0, 365.0], [91.1, 369.0], [91.2, 369.0], [91.3, 379.0], [91.4, 379.0], [91.5, 380.0], [91.6, 380.0], [91.7, 380.0], [91.8, 380.0], [91.9, 381.0], [92.0, 381.0], [92.1, 386.0], [92.2, 386.0], [92.3, 451.0], [92.4, 451.0], [92.5, 452.0], [92.6, 452.0], [92.7, 457.0], [92.8, 457.0], [92.9, 459.0], [93.0, 459.0], [93.1, 464.0], [93.2, 464.0], [93.3, 470.0], [93.4, 470.0], [93.5, 472.0], [93.6, 472.0], [93.7, 475.0], [93.8, 475.0], [93.9, 477.0], [94.0, 477.0], [94.1, 477.0], [94.2, 477.0], [94.3, 478.0], [94.4, 478.0], [94.5, 478.0], [94.6, 478.0], [94.7, 479.0], [94.8, 479.0], [94.9, 480.0], [95.0, 480.0], [95.1, 480.0], [95.2, 480.0], [95.3, 480.0], [95.4, 480.0], [95.5, 481.0], [95.6, 481.0], [95.7, 482.0], [95.8, 482.0], [95.9, 483.0], [96.0, 483.0], [96.1, 485.0], [96.2, 485.0], [96.3, 485.0], [96.4, 485.0], [96.5, 486.0], [96.6, 486.0], [96.7, 487.0], [96.8, 487.0], [96.9, 487.0], [97.0, 487.0], [97.1, 489.0], [97.2, 489.0], [97.3, 489.0], [97.4, 489.0], [97.5, 500.0], [97.6, 500.0], [97.7, 500.0], [97.8, 500.0], [97.9, 507.0], [98.0, 507.0], [98.1, 520.0], [98.2, 520.0], [98.3, 520.0], [98.4, 520.0], [98.5, 525.0], [98.6, 525.0], [98.7, 535.0], [98.8, 535.0], [98.9, 538.0], [99.0, 538.0], [99.1, 540.0], [99.2, 540.0], [99.3, 552.0], [99.4, 552.0], [99.5, 565.0], [99.6, 565.0], [99.7, 575.0], [99.8, 575.0], [99.9, 602.0], [100.0, 602.0]], "isOverall": false, "label": "Homepage Load", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 270.0, "series": [{"data": [[300.0, 270.0], [600.0, 1.0], [200.0, 191.0], [400.0, 26.0], [500.0, 12.0]], "isOverall": false, "label": "Homepage Load", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 11.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 489.0, "series": [{"data": [[0.0, 489.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 11.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 15.065693430656934, "minX": 1.7617527E12, "maxY": 17.267217630854002, "series": [{"data": [[1.7617527E12, 15.065693430656934], [1.76175276E12, 17.267217630854002]], "isOverall": false, "label": "Homepage Load Test Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76175276E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 290.05, "minX": 1.0, "maxY": 391.0, "series": [{"data": [[2.0, 391.0], [8.0, 308.0], [9.0, 307.09090909090907], [10.0, 312.6666666666667], [11.0, 300.8181818181818], [12.0, 337.99999999999994], [3.0, 314.5], [13.0, 326.42857142857144], [14.0, 321.1379310344828], [15.0, 294.1666666666667], [4.0, 331.4], [16.0, 293.2352941176471], [1.0, 328.0], [17.0, 290.05], [18.0, 311.57692307692326], [19.0, 326.35114503816794], [5.0, 304.5], [20.0, 313.08536585365863], [21.0, 310.0476190476191], [6.0, 326.2857142857143], [7.0, 332.5]], "isOverall": false, "label": "Homepage Load", "isController": false}, {"data": [[16.664000000000005, 316.12599999999975]], "isOverall": false, "label": "Homepage Load-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 21.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 831.1333333333333, "minX": 1.7617527E12, "maxY": 273842.01666666666, "series": [{"data": [[1.7617527E12, 103348.7], [1.76175276E12, 273842.01666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7617527E12, 831.1333333333333], [1.76175276E12, 2202.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76175276E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 292.3357664233577, "minX": 1.7617527E12, "maxY": 325.10468319559203, "series": [{"data": [[1.7617527E12, 292.3357664233577], [1.76175276E12, 325.10468319559203]], "isOverall": false, "label": "Homepage Load", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175276E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 119.38686131386861, "minX": 1.7617527E12, "maxY": 149.50413223140498, "series": [{"data": [[1.7617527E12, 119.38686131386861], [1.76175276E12, 149.50413223140498]], "isOverall": false, "label": "Homepage Load", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175276E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 9.751824817518246, "minX": 1.7617527E12, "maxY": 12.41322314049588, "series": [{"data": [[1.7617527E12, 9.751824817518246], [1.76175276E12, 12.41322314049588]], "isOverall": false, "label": "Homepage Load", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175276E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 264.0, "minX": 1.7617527E12, "maxY": 602.0, "series": [{"data": [[1.7617527E12, 565.0], [1.76175276E12, 602.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7617527E12, 264.0], [1.76175276E12, 265.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7617527E12, 323.4], [1.76175276E12, 380.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7617527E12, 547.9000000000002], [1.76175276E12, 544.3200000000002]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7617527E12, 275.0], [1.76175276E12, 313.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7617527E12, 339.79999999999984], [1.76175276E12, 482.8]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76175276E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 278.5, "minX": 1.0, "maxY": 329.0, "series": [{"data": [[2.0, 313.5], [8.0, 278.5], [9.0, 311.0], [10.0, 312.5], [11.0, 315.0], [3.0, 320.0], [12.0, 308.0], [13.0, 311.0], [1.0, 329.0], [4.0, 317.0], [5.0, 281.5], [6.0, 315.0], [7.0, 313.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 13.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 103.5, "minX": 1.0, "maxY": 154.0, "series": [{"data": [[2.0, 140.5], [8.0, 103.5], [9.0, 136.0], [10.0, 138.5], [11.0, 141.0], [3.0, 145.0], [12.0, 133.5], [13.0, 134.0], [1.0, 154.0], [4.0, 142.0], [5.0, 105.5], [6.0, 141.0], [7.0, 138.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 13.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.3, "minX": 1.7617527E12, "maxY": 6.033333333333333, "series": [{"data": [[1.7617527E12, 2.3], [1.76175276E12, 6.033333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76175276E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.283333333333333, "minX": 1.7617527E12, "maxY": 6.05, "series": [{"data": [[1.7617527E12, 2.283333333333333], [1.76175276E12, 6.05]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76175276E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.283333333333333, "minX": 1.7617527E12, "maxY": 6.05, "series": [{"data": [[1.7617527E12, 2.283333333333333], [1.76175276E12, 6.05]], "isOverall": false, "label": "Homepage Load-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175276E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.283333333333333, "minX": 1.7617527E12, "maxY": 6.05, "series": [{"data": [[1.7617527E12, 2.283333333333333], [1.76175276E12, 6.05]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175276E12, "title": "Total Transactions Per Second"}},
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

