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
        data: {"result": {"minY": 505.0, "minX": 0.0, "maxY": 1047.0, "series": [{"data": [[0.0, 505.0], [0.1, 505.0], [0.2, 558.0], [0.3, 558.0], [0.4, 560.0], [0.5, 560.0], [0.6, 560.0], [0.7, 561.0], [0.8, 562.0], [0.9, 562.0], [1.0, 571.0], [1.1, 571.0], [1.2, 574.0], [1.3, 574.0], [1.4, 574.0], [1.5, 574.0], [1.6, 580.0], [1.7, 580.0], [1.8, 585.0], [1.9, 585.0], [2.0, 587.0], [2.1, 587.0], [2.2, 590.0], [2.3, 590.0], [2.4, 590.0], [2.5, 592.0], [2.6, 592.0], [2.7, 593.0], [2.8, 593.0], [2.9, 595.0], [3.0, 595.0], [3.1, 597.0], [3.2, 597.0], [3.3, 599.0], [3.4, 599.0], [3.5, 601.0], [3.6, 601.0], [3.7, 601.0], [3.8, 601.0], [3.9, 603.0], [4.0, 603.0], [4.1, 603.0], [4.2, 603.0], [4.3, 605.0], [4.4, 605.0], [4.5, 605.0], [4.6, 605.0], [4.7, 606.0], [4.8, 606.0], [4.9, 610.0], [5.0, 610.0], [5.1, 611.0], [5.2, 611.0], [5.3, 611.0], [5.4, 611.0], [5.5, 611.0], [5.6, 611.0], [5.7, 612.0], [5.8, 612.0], [5.9, 613.0], [6.0, 613.0], [6.1, 613.0], [6.2, 613.0], [6.3, 614.0], [6.4, 614.0], [6.5, 616.0], [6.6, 616.0], [6.7, 617.0], [6.8, 617.0], [6.9, 617.0], [7.0, 617.0], [7.1, 617.0], [7.2, 617.0], [7.3, 619.0], [7.4, 619.0], [7.5, 621.0], [7.6, 621.0], [7.7, 622.0], [7.8, 622.0], [7.9, 624.0], [8.0, 624.0], [8.1, 626.0], [8.2, 626.0], [8.3, 626.0], [8.4, 626.0], [8.5, 626.0], [8.6, 626.0], [8.7, 627.0], [8.8, 628.0], [8.9, 628.0], [9.0, 628.0], [9.1, 628.0], [9.2, 628.0], [9.3, 628.0], [9.4, 629.0], [9.5, 629.0], [9.6, 630.0], [9.7, 630.0], [9.8, 631.0], [9.9, 631.0], [10.0, 631.0], [10.1, 631.0], [10.2, 633.0], [10.3, 633.0], [10.4, 633.0], [10.5, 633.0], [10.6, 635.0], [10.7, 635.0], [10.8, 636.0], [10.9, 636.0], [11.0, 636.0], [11.1, 636.0], [11.2, 637.0], [11.3, 637.0], [11.4, 638.0], [11.5, 638.0], [11.6, 639.0], [11.7, 639.0], [11.8, 639.0], [11.9, 639.0], [12.0, 639.0], [12.1, 639.0], [12.2, 639.0], [12.3, 639.0], [12.4, 640.0], [12.5, 640.0], [12.6, 640.0], [12.7, 640.0], [12.8, 640.0], [12.9, 640.0], [13.0, 640.0], [13.1, 640.0], [13.2, 640.0], [13.3, 640.0], [13.4, 641.0], [13.5, 641.0], [13.6, 643.0], [13.7, 643.0], [13.8, 644.0], [13.9, 644.0], [14.0, 645.0], [14.1, 645.0], [14.2, 645.0], [14.3, 645.0], [14.4, 646.0], [14.5, 646.0], [14.6, 648.0], [14.7, 648.0], [14.8, 649.0], [14.9, 649.0], [15.0, 649.0], [15.1, 649.0], [15.2, 650.0], [15.3, 650.0], [15.4, 651.0], [15.5, 651.0], [15.6, 653.0], [15.7, 653.0], [15.8, 653.0], [15.9, 653.0], [16.0, 655.0], [16.1, 655.0], [16.2, 656.0], [16.3, 656.0], [16.4, 656.0], [16.5, 656.0], [16.6, 657.0], [16.7, 657.0], [16.8, 657.0], [16.9, 657.0], [17.0, 657.0], [17.1, 657.0], [17.2, 657.0], [17.3, 657.0], [17.4, 657.0], [17.5, 657.0], [17.6, 658.0], [17.7, 658.0], [17.8, 658.0], [17.9, 658.0], [18.0, 659.0], [18.1, 659.0], [18.2, 663.0], [18.3, 663.0], [18.4, 663.0], [18.5, 663.0], [18.6, 663.0], [18.7, 663.0], [18.8, 663.0], [18.9, 663.0], [19.0, 664.0], [19.1, 664.0], [19.2, 665.0], [19.3, 665.0], [19.4, 665.0], [19.5, 665.0], [19.6, 666.0], [19.7, 666.0], [19.8, 667.0], [19.9, 667.0], [20.0, 667.0], [20.1, 667.0], [20.2, 667.0], [20.3, 667.0], [20.4, 670.0], [20.5, 670.0], [20.6, 670.0], [20.7, 670.0], [20.8, 670.0], [20.9, 670.0], [21.0, 671.0], [21.1, 671.0], [21.2, 671.0], [21.3, 671.0], [21.4, 671.0], [21.5, 671.0], [21.6, 671.0], [21.7, 671.0], [21.8, 672.0], [21.9, 672.0], [22.0, 674.0], [22.1, 674.0], [22.2, 675.0], [22.3, 675.0], [22.4, 676.0], [22.5, 676.0], [22.6, 676.0], [22.7, 676.0], [22.8, 676.0], [22.9, 676.0], [23.0, 676.0], [23.1, 676.0], [23.2, 677.0], [23.3, 677.0], [23.4, 679.0], [23.5, 679.0], [23.6, 679.0], [23.7, 679.0], [23.8, 680.0], [23.9, 680.0], [24.0, 682.0], [24.1, 682.0], [24.2, 683.0], [24.3, 683.0], [24.4, 683.0], [24.5, 683.0], [24.6, 684.0], [24.7, 684.0], [24.8, 685.0], [24.9, 685.0], [25.0, 685.0], [25.1, 685.0], [25.2, 686.0], [25.3, 686.0], [25.4, 687.0], [25.5, 687.0], [25.6, 687.0], [25.7, 687.0], [25.8, 689.0], [25.9, 689.0], [26.0, 690.0], [26.1, 690.0], [26.2, 691.0], [26.3, 691.0], [26.4, 691.0], [26.5, 691.0], [26.6, 691.0], [26.7, 691.0], [26.8, 691.0], [26.9, 691.0], [27.0, 692.0], [27.1, 692.0], [27.2, 692.0], [27.3, 692.0], [27.4, 692.0], [27.5, 692.0], [27.6, 693.0], [27.7, 693.0], [27.8, 693.0], [27.9, 693.0], [28.0, 694.0], [28.1, 694.0], [28.2, 694.0], [28.3, 694.0], [28.4, 694.0], [28.5, 694.0], [28.6, 695.0], [28.7, 695.0], [28.8, 695.0], [28.9, 695.0], [29.0, 695.0], [29.1, 695.0], [29.2, 696.0], [29.3, 696.0], [29.4, 696.0], [29.5, 696.0], [29.6, 696.0], [29.7, 696.0], [29.8, 696.0], [29.9, 696.0], [30.0, 699.0], [30.1, 699.0], [30.2, 700.0], [30.3, 700.0], [30.4, 700.0], [30.5, 700.0], [30.6, 700.0], [30.7, 700.0], [30.8, 702.0], [30.9, 702.0], [31.0, 703.0], [31.1, 703.0], [31.2, 703.0], [31.3, 703.0], [31.4, 703.0], [31.5, 703.0], [31.6, 704.0], [31.7, 704.0], [31.8, 705.0], [31.9, 705.0], [32.0, 705.0], [32.1, 705.0], [32.2, 705.0], [32.3, 705.0], [32.4, 706.0], [32.5, 706.0], [32.6, 707.0], [32.7, 707.0], [32.8, 707.0], [32.9, 707.0], [33.0, 708.0], [33.1, 708.0], [33.2, 709.0], [33.3, 709.0], [33.4, 710.0], [33.5, 710.0], [33.6, 710.0], [33.7, 710.0], [33.8, 710.0], [33.9, 710.0], [34.0, 711.0], [34.1, 711.0], [34.2, 711.0], [34.3, 711.0], [34.4, 711.0], [34.5, 711.0], [34.6, 711.0], [34.7, 711.0], [34.8, 712.0], [34.9, 712.0], [35.0, 712.0], [35.1, 712.0], [35.2, 712.0], [35.3, 712.0], [35.4, 712.0], [35.5, 712.0], [35.6, 713.0], [35.7, 713.0], [35.8, 713.0], [35.9, 713.0], [36.0, 713.0], [36.1, 713.0], [36.2, 715.0], [36.3, 715.0], [36.4, 716.0], [36.5, 716.0], [36.6, 716.0], [36.7, 716.0], [36.8, 716.0], [36.9, 716.0], [37.0, 716.0], [37.1, 716.0], [37.2, 718.0], [37.3, 718.0], [37.4, 718.0], [37.5, 718.0], [37.6, 718.0], [37.7, 718.0], [37.8, 718.0], [37.9, 718.0], [38.0, 718.0], [38.1, 718.0], [38.2, 719.0], [38.3, 719.0], [38.4, 719.0], [38.5, 719.0], [38.6, 719.0], [38.7, 719.0], [38.8, 719.0], [38.9, 719.0], [39.0, 719.0], [39.1, 719.0], [39.2, 720.0], [39.3, 720.0], [39.4, 720.0], [39.5, 720.0], [39.6, 721.0], [39.7, 721.0], [39.8, 721.0], [39.9, 721.0], [40.0, 722.0], [40.1, 722.0], [40.2, 724.0], [40.3, 724.0], [40.4, 724.0], [40.5, 724.0], [40.6, 726.0], [40.7, 726.0], [40.8, 726.0], [40.9, 726.0], [41.0, 726.0], [41.1, 726.0], [41.2, 726.0], [41.3, 726.0], [41.4, 727.0], [41.5, 727.0], [41.6, 727.0], [41.7, 727.0], [41.8, 727.0], [41.9, 727.0], [42.0, 728.0], [42.1, 728.0], [42.2, 729.0], [42.3, 729.0], [42.4, 730.0], [42.5, 730.0], [42.6, 730.0], [42.7, 730.0], [42.8, 731.0], [42.9, 731.0], [43.0, 731.0], [43.1, 731.0], [43.2, 732.0], [43.3, 732.0], [43.4, 733.0], [43.5, 733.0], [43.6, 733.0], [43.7, 733.0], [43.8, 733.0], [43.9, 733.0], [44.0, 734.0], [44.1, 734.0], [44.2, 735.0], [44.3, 735.0], [44.4, 735.0], [44.5, 735.0], [44.6, 736.0], [44.7, 736.0], [44.8, 738.0], [44.9, 738.0], [45.0, 738.0], [45.1, 738.0], [45.2, 739.0], [45.3, 739.0], [45.4, 740.0], [45.5, 740.0], [45.6, 740.0], [45.7, 740.0], [45.8, 741.0], [45.9, 741.0], [46.0, 741.0], [46.1, 741.0], [46.2, 742.0], [46.3, 742.0], [46.4, 742.0], [46.5, 742.0], [46.6, 743.0], [46.7, 743.0], [46.8, 743.0], [46.9, 743.0], [47.0, 744.0], [47.1, 744.0], [47.2, 745.0], [47.3, 745.0], [47.4, 745.0], [47.5, 745.0], [47.6, 745.0], [47.7, 745.0], [47.8, 746.0], [47.9, 746.0], [48.0, 746.0], [48.1, 746.0], [48.2, 747.0], [48.3, 747.0], [48.4, 748.0], [48.5, 748.0], [48.6, 748.0], [48.7, 748.0], [48.8, 749.0], [48.9, 749.0], [49.0, 749.0], [49.1, 749.0], [49.2, 749.0], [49.3, 749.0], [49.4, 749.0], [49.5, 749.0], [49.6, 749.0], [49.7, 749.0], [49.8, 750.0], [49.9, 750.0], [50.0, 750.0], [50.1, 750.0], [50.2, 751.0], [50.3, 751.0], [50.4, 751.0], [50.5, 751.0], [50.6, 751.0], [50.7, 751.0], [50.8, 751.0], [50.9, 751.0], [51.0, 752.0], [51.1, 752.0], [51.2, 752.0], [51.3, 752.0], [51.4, 752.0], [51.5, 752.0], [51.6, 753.0], [51.7, 753.0], [51.8, 753.0], [51.9, 753.0], [52.0, 754.0], [52.1, 754.0], [52.2, 755.0], [52.3, 755.0], [52.4, 758.0], [52.5, 758.0], [52.6, 758.0], [52.7, 758.0], [52.8, 758.0], [52.9, 758.0], [53.0, 759.0], [53.1, 759.0], [53.2, 759.0], [53.3, 759.0], [53.4, 759.0], [53.5, 759.0], [53.6, 759.0], [53.7, 759.0], [53.8, 759.0], [53.9, 759.0], [54.0, 759.0], [54.1, 759.0], [54.2, 760.0], [54.3, 760.0], [54.4, 760.0], [54.5, 760.0], [54.6, 760.0], [54.7, 760.0], [54.8, 760.0], [54.9, 761.0], [55.0, 761.0], [55.1, 761.0], [55.2, 762.0], [55.3, 762.0], [55.4, 762.0], [55.5, 763.0], [55.6, 763.0], [55.7, 763.0], [55.8, 763.0], [55.9, 764.0], [56.0, 764.0], [56.1, 765.0], [56.2, 765.0], [56.3, 767.0], [56.4, 767.0], [56.5, 767.0], [56.6, 767.0], [56.7, 767.0], [56.8, 767.0], [56.9, 767.0], [57.0, 767.0], [57.1, 769.0], [57.2, 769.0], [57.3, 769.0], [57.4, 769.0], [57.5, 769.0], [57.6, 769.0], [57.7, 770.0], [57.8, 770.0], [57.9, 771.0], [58.0, 771.0], [58.1, 771.0], [58.2, 771.0], [58.3, 772.0], [58.4, 772.0], [58.5, 772.0], [58.6, 772.0], [58.7, 772.0], [58.8, 772.0], [58.9, 773.0], [59.0, 773.0], [59.1, 773.0], [59.2, 773.0], [59.3, 774.0], [59.4, 774.0], [59.5, 775.0], [59.6, 775.0], [59.7, 776.0], [59.8, 776.0], [59.9, 776.0], [60.0, 776.0], [60.1, 776.0], [60.2, 776.0], [60.3, 776.0], [60.4, 776.0], [60.5, 776.0], [60.6, 776.0], [60.7, 777.0], [60.8, 777.0], [60.9, 777.0], [61.0, 777.0], [61.1, 778.0], [61.2, 778.0], [61.3, 778.0], [61.4, 778.0], [61.5, 780.0], [61.6, 780.0], [61.7, 781.0], [61.8, 781.0], [61.9, 781.0], [62.0, 781.0], [62.1, 781.0], [62.2, 781.0], [62.3, 782.0], [62.4, 782.0], [62.5, 783.0], [62.6, 783.0], [62.7, 783.0], [62.8, 783.0], [62.9, 786.0], [63.0, 786.0], [63.1, 786.0], [63.2, 786.0], [63.3, 786.0], [63.4, 786.0], [63.5, 786.0], [63.6, 786.0], [63.7, 787.0], [63.8, 787.0], [63.9, 789.0], [64.0, 789.0], [64.1, 789.0], [64.2, 789.0], [64.3, 789.0], [64.4, 789.0], [64.5, 789.0], [64.6, 789.0], [64.7, 791.0], [64.8, 791.0], [64.9, 791.0], [65.0, 791.0], [65.1, 792.0], [65.2, 792.0], [65.3, 792.0], [65.4, 792.0], [65.5, 792.0], [65.6, 792.0], [65.7, 794.0], [65.8, 794.0], [65.9, 795.0], [66.0, 795.0], [66.1, 795.0], [66.2, 795.0], [66.3, 795.0], [66.4, 795.0], [66.5, 796.0], [66.6, 796.0], [66.7, 797.0], [66.8, 797.0], [66.9, 798.0], [67.0, 798.0], [67.1, 799.0], [67.2, 799.0], [67.3, 799.0], [67.4, 799.0], [67.5, 799.0], [67.6, 799.0], [67.7, 800.0], [67.8, 800.0], [67.9, 800.0], [68.0, 800.0], [68.1, 801.0], [68.2, 801.0], [68.3, 801.0], [68.4, 801.0], [68.5, 802.0], [68.6, 802.0], [68.7, 802.0], [68.8, 802.0], [68.9, 803.0], [69.0, 803.0], [69.1, 805.0], [69.2, 805.0], [69.3, 805.0], [69.4, 805.0], [69.5, 806.0], [69.6, 806.0], [69.7, 806.0], [69.8, 806.0], [69.9, 806.0], [70.0, 806.0], [70.1, 806.0], [70.2, 806.0], [70.3, 807.0], [70.4, 807.0], [70.5, 807.0], [70.6, 807.0], [70.7, 808.0], [70.8, 808.0], [70.9, 810.0], [71.0, 810.0], [71.1, 811.0], [71.2, 811.0], [71.3, 811.0], [71.4, 811.0], [71.5, 812.0], [71.6, 812.0], [71.7, 813.0], [71.8, 813.0], [71.9, 813.0], [72.0, 813.0], [72.1, 813.0], [72.2, 813.0], [72.3, 813.0], [72.4, 813.0], [72.5, 814.0], [72.6, 814.0], [72.7, 814.0], [72.8, 814.0], [72.9, 815.0], [73.0, 815.0], [73.1, 815.0], [73.2, 815.0], [73.3, 816.0], [73.4, 816.0], [73.5, 816.0], [73.6, 816.0], [73.7, 817.0], [73.8, 817.0], [73.9, 819.0], [74.0, 819.0], [74.1, 819.0], [74.2, 819.0], [74.3, 820.0], [74.4, 820.0], [74.5, 821.0], [74.6, 821.0], [74.7, 821.0], [74.8, 821.0], [74.9, 823.0], [75.0, 823.0], [75.1, 823.0], [75.2, 823.0], [75.3, 824.0], [75.4, 824.0], [75.5, 825.0], [75.6, 825.0], [75.7, 825.0], [75.8, 825.0], [75.9, 825.0], [76.0, 825.0], [76.1, 826.0], [76.2, 826.0], [76.3, 827.0], [76.4, 827.0], [76.5, 827.0], [76.6, 827.0], [76.7, 827.0], [76.8, 827.0], [76.9, 828.0], [77.0, 828.0], [77.1, 828.0], [77.2, 828.0], [77.3, 829.0], [77.4, 829.0], [77.5, 830.0], [77.6, 830.0], [77.7, 831.0], [77.8, 831.0], [77.9, 831.0], [78.0, 831.0], [78.1, 833.0], [78.2, 833.0], [78.3, 833.0], [78.4, 833.0], [78.5, 834.0], [78.6, 834.0], [78.7, 834.0], [78.8, 834.0], [78.9, 835.0], [79.0, 835.0], [79.1, 836.0], [79.2, 836.0], [79.3, 837.0], [79.4, 837.0], [79.5, 841.0], [79.6, 841.0], [79.7, 841.0], [79.8, 841.0], [79.9, 842.0], [80.0, 842.0], [80.1, 842.0], [80.2, 842.0], [80.3, 843.0], [80.4, 843.0], [80.5, 844.0], [80.6, 844.0], [80.7, 844.0], [80.8, 844.0], [80.9, 845.0], [81.0, 845.0], [81.1, 847.0], [81.2, 847.0], [81.3, 848.0], [81.4, 848.0], [81.5, 849.0], [81.6, 849.0], [81.7, 851.0], [81.8, 851.0], [81.9, 852.0], [82.0, 852.0], [82.1, 852.0], [82.2, 852.0], [82.3, 853.0], [82.4, 853.0], [82.5, 853.0], [82.6, 853.0], [82.7, 854.0], [82.8, 854.0], [82.9, 854.0], [83.0, 854.0], [83.1, 856.0], [83.2, 856.0], [83.3, 856.0], [83.4, 856.0], [83.5, 856.0], [83.6, 856.0], [83.7, 858.0], [83.8, 858.0], [83.9, 858.0], [84.0, 858.0], [84.1, 859.0], [84.2, 859.0], [84.3, 860.0], [84.4, 860.0], [84.5, 860.0], [84.6, 860.0], [84.7, 861.0], [84.8, 861.0], [84.9, 863.0], [85.0, 863.0], [85.1, 864.0], [85.2, 864.0], [85.3, 865.0], [85.4, 865.0], [85.5, 866.0], [85.6, 866.0], [85.7, 866.0], [85.8, 866.0], [85.9, 869.0], [86.0, 869.0], [86.1, 869.0], [86.2, 869.0], [86.3, 870.0], [86.4, 870.0], [86.5, 871.0], [86.6, 871.0], [86.7, 872.0], [86.8, 872.0], [86.9, 874.0], [87.0, 874.0], [87.1, 874.0], [87.2, 874.0], [87.3, 874.0], [87.4, 874.0], [87.5, 875.0], [87.6, 875.0], [87.7, 875.0], [87.8, 875.0], [87.9, 875.0], [88.0, 875.0], [88.1, 876.0], [88.2, 876.0], [88.3, 876.0], [88.4, 876.0], [88.5, 876.0], [88.6, 876.0], [88.7, 878.0], [88.8, 878.0], [88.9, 881.0], [89.0, 881.0], [89.1, 885.0], [89.2, 885.0], [89.3, 887.0], [89.4, 887.0], [89.5, 895.0], [89.6, 895.0], [89.7, 895.0], [89.8, 895.0], [89.9, 897.0], [90.0, 897.0], [90.1, 897.0], [90.2, 897.0], [90.3, 899.0], [90.4, 899.0], [90.5, 901.0], [90.6, 901.0], [90.7, 903.0], [90.8, 903.0], [90.9, 904.0], [91.0, 904.0], [91.1, 905.0], [91.2, 905.0], [91.3, 908.0], [91.4, 908.0], [91.5, 908.0], [91.6, 908.0], [91.7, 910.0], [91.8, 910.0], [91.9, 911.0], [92.0, 911.0], [92.1, 912.0], [92.2, 912.0], [92.3, 913.0], [92.4, 913.0], [92.5, 915.0], [92.6, 915.0], [92.7, 916.0], [92.8, 916.0], [92.9, 917.0], [93.0, 917.0], [93.1, 918.0], [93.2, 918.0], [93.3, 921.0], [93.4, 921.0], [93.5, 922.0], [93.6, 922.0], [93.7, 922.0], [93.8, 922.0], [93.9, 923.0], [94.0, 923.0], [94.1, 924.0], [94.2, 924.0], [94.3, 925.0], [94.4, 925.0], [94.5, 926.0], [94.6, 926.0], [94.7, 927.0], [94.8, 927.0], [94.9, 931.0], [95.0, 931.0], [95.1, 933.0], [95.2, 933.0], [95.3, 934.0], [95.4, 934.0], [95.5, 948.0], [95.6, 948.0], [95.7, 956.0], [95.8, 956.0], [95.9, 959.0], [96.0, 959.0], [96.1, 961.0], [96.2, 961.0], [96.3, 962.0], [96.4, 962.0], [96.5, 963.0], [96.6, 963.0], [96.7, 967.0], [96.8, 967.0], [96.9, 970.0], [97.0, 970.0], [97.1, 977.0], [97.2, 977.0], [97.3, 977.0], [97.4, 977.0], [97.5, 978.0], [97.6, 978.0], [97.7, 982.0], [97.8, 982.0], [97.9, 982.0], [98.0, 982.0], [98.1, 983.0], [98.2, 983.0], [98.3, 983.0], [98.4, 983.0], [98.5, 987.0], [98.6, 987.0], [98.7, 993.0], [98.8, 993.0], [98.9, 1015.0], [99.0, 1015.0], [99.1, 1022.0], [99.2, 1022.0], [99.3, 1025.0], [99.4, 1025.0], [99.5, 1037.0], [99.6, 1037.0], [99.7, 1040.0], [99.8, 1040.0], [99.9, 1047.0], [100.0, 1047.0]], "isOverall": false, "label": "Homepage Load - UFC", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 6.0, "minX": 500.0, "maxY": 187.0, "series": [{"data": [[600.0, 134.0], [700.0, 187.0], [800.0, 114.0], [900.0, 42.0], [1000.0, 6.0], [500.0, 17.0]], "isOverall": false, "label": "Homepage Load - UFC", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 500.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 500.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 500.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.153846153846154, "minX": 1.76175294E12, "maxY": 21.24943310657596, "series": [{"data": [[1.761753E12, 21.24943310657596], [1.76175306E12, 7.153846153846154], [1.76175294E12, 7.5]], "isOverall": false, "label": "Homepage Load Test Group - UFC", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76175306E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 649.0, "minX": 1.0, "maxY": 938.0, "series": [{"data": [[2.0, 649.0], [3.0, 838.3333333333334], [4.0, 758.75], [5.0, 757.3333333333334], [6.0, 775.625], [7.0, 679.4], [8.0, 792.3333333333334], [9.0, 938.0], [10.0, 782.8461538461539], [11.0, 834.7142857142857], [12.0, 792.7], [13.0, 772.5555555555555], [14.0, 831.4000000000001], [15.0, 725.4], [16.0, 737.0], [1.0, 858.5], [17.0, 707.9], [18.0, 758.7272727272727], [19.0, 706.5666666666666], [20.0, 660.6470588235294], [21.0, 729.7777777777778], [22.0, 764.6612903225807], [23.0, 764.4090909090913], [24.0, 759.1874999999999], [25.0, 737.6428571428572], [26.0, 727.5555555555555]], "isOverall": false, "label": "Homepage Load - UFC", "isController": false}, {"data": [[19.6, 757.3599999999993]], "isOverall": false, "label": "Homepage Load - UFC-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 26.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 121.66666666666667, "minX": 1.76175294E12, "maxY": 105195.21666666666, "series": [{"data": [[1.761753E12, 105195.21666666666], [1.76175306E12, 9303.0], [1.76175294E12, 4770.9]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.761753E12, 2682.75], [1.76175306E12, 237.25], [1.76175294E12, 121.66666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76175306E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 753.21768707483, "minX": 1.76175294E12, "maxY": 824.5999999999999, "series": [{"data": [[1.761753E12, 753.21768707483], [1.76175306E12, 769.7179487179485], [1.76175294E12, 824.5999999999999]], "isOverall": false, "label": "Homepage Load - UFC", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175306E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 741.2335600907033, "minX": 1.76175294E12, "maxY": 814.7500000000001, "series": [{"data": [[1.761753E12, 741.2335600907033], [1.76175306E12, 760.1538461538463], [1.76175294E12, 814.7500000000001]], "isOverall": false, "label": "Homepage Load - UFC", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175306E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.76175294E12, "maxY": 26.0, "series": [{"data": [[1.761753E12, 4.9410430839002295], [1.76175306E12, 0.0], [1.76175294E12, 26.0]], "isOverall": false, "label": "Homepage Load - UFC", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175306E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 505.0, "minX": 1.76175294E12, "maxY": 1047.0, "series": [{"data": [[1.761753E12, 1037.0], [1.76175306E12, 987.0], [1.76175294E12, 1047.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.761753E12, 505.0], [1.76175306E12, 633.0], [1.76175294E12, 670.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.761753E12, 893.4000000000001], [1.76175306E12, 912.0], [1.76175294E12, 1034.3000000000002]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.761753E12, 1005.7599999999996], [1.76175306E12, 987.0], [1.76175294E12, 1047.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.761753E12, 748.0], [1.76175306E12, 770.0], [1.76175294E12, 812.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.761753E12, 923.9], [1.76175306E12, 978.0], [1.76175294E12, 1046.65]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76175306E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 675.0, "minX": 1.0, "maxY": 863.0, "series": [{"data": [[2.0, 806.0], [8.0, 729.0], [9.0, 675.0], [10.0, 728.0], [11.0, 711.5], [3.0, 762.0], [12.0, 725.0], [13.0, 800.0], [14.0, 755.0], [1.0, 863.0], [4.0, 742.5], [5.0, 781.0], [6.0, 800.0], [7.0, 753.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 665.0, "minX": 1.0, "maxY": 854.5, "series": [{"data": [[2.0, 796.0], [8.0, 719.0], [9.0, 665.0], [10.0, 716.5], [11.0, 699.0], [3.0, 752.0], [12.0, 715.0], [13.0, 787.0], [14.0, 745.5], [1.0, 854.5], [4.0, 730.0], [5.0, 771.0], [6.0, 790.0], [7.0, 742.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.4166666666666667, "minX": 1.76175294E12, "maxY": 7.3, "series": [{"data": [[1.761753E12, 7.3], [1.76175306E12, 0.6166666666666667], [1.76175294E12, 0.4166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76175306E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.76175294E12, "maxY": 7.35, "series": [{"data": [[1.761753E12, 7.35], [1.76175306E12, 0.65], [1.76175294E12, 0.3333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76175306E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.76175294E12, "maxY": 7.35, "series": [{"data": [[1.761753E12, 7.35], [1.76175306E12, 0.65], [1.76175294E12, 0.3333333333333333]], "isOverall": false, "label": "Homepage Load - UFC-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175306E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.76175294E12, "maxY": 7.35, "series": [{"data": [[1.761753E12, 7.35], [1.76175306E12, 0.65], [1.76175294E12, 0.3333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76175306E12, "title": "Total Transactions Per Second"}},
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

