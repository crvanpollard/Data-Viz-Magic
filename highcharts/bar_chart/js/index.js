$(function () {
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            type: 'bar'
        },
        yAxis: {
            allowDecimals: false,
            title: {
                text: 'Flip the Switch'
            },
            tickInterval: 10, 
            min: 0,
            max: 50
        },
        colors: [{
         linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
            stops: [
                [0, '#253494'],
                [.25,'#2c7fb8'],
                [.5,'#41b6c4'],
                [.75,'#a1dab4'],
                [1, '#ffffcc']
                ]
            },
            
        ],
      //  colors: ["#ffffcc", "#a1dab4", "#41b6c4", "#2c7fb8", "#253494"],
        plotOptions: {
            bar: {
                colorByPoint: true
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },    
        series: [{
            data: [45]        
        }]
    });
    
    // The button action
    $('#ipd').click(function() {
        chart.series[0].setData([45] );
        chart.yAxis[0].setExtremes(0,50);
        chart.update({
            yAxis: {
            tickInterval: 10 
            }
        });
    });
    $('#youth').click(function() {
        chart.series[0].setData([{y:93,color:'#ffffcc '},   {y:263,color:'#a1dab4 '},   {y:640,color:'#41b6c4 '},   {y:294,color:'#2c7fb8 '},   {y:79,color:'#253494'}] );
        chart.yAxis[0].setExtremes(0,1369);
        chart.update({
            yAxis: {
            tickInterval: 100
        //    min: 0,
        //    max: 1369
            }
        });
    });

     $('#older').click(function() {
        chart.series[0].setData([37, 371, 673, 200, 88] );
        chart.yAxis[0].setExtremes(0,1369);
        chart.update({
            yAxis: {
            tickInterval: 100
            }
        });
    });
     $('#female').click(function() {
        chart.series[0].setData([29, 304, 703, 277, 56] );
        chart.yAxis[0].setExtremes(0,1369);
        chart.update({
            yAxis: {
            tickInterval: 100
            }
        });
    });
     $('#race').click(function() {
        chart.series[0].setData([2,  612, 402, 152, 201] );
        chart.yAxis[0].setExtremes(0,1369);
        chart.update({
            yAxis: {
            tickInterval: 100
            }
        });
    });
     $('#ethnic').click(function() {
        chart.series[0].setData([28, 323, 827, 99,  92] );
        chart.yAxis[0].setExtremes(0,1369);
        chart.update({
            yAxis: {
            tickInterval: 100
            }
        });
    });
     $('#foreign').click(function() {
        chart.series[0].setData([4,  513, 553, 181, 118] );
        chart.yAxis[0].setExtremes(0,1369);
        chart.update({
            yAxis: {
            tickInterval: 100
            }
        });
    });
     $('#lep').click(function() {
        chart.series[0].setData([24, 477, 629, 114, 125] );
        chart.yAxis[0].setExtremes(0,1369);
        chart.update({
            yAxis: {
            tickInterval: 100
            }
        });
    });
     $('#disabled').click(function() {
        chart.series[0].setData([25, 424, 574, 251, 95] );
        chart.yAxis[0].setExtremes(0,1369);
        chart.update({
            yAxis: {
            tickInterval: 100
            }
        });
    });
       $('#income').click(function() {
        chart.series[0].setData([3,  563, 444, 199, 160] );
        chart.yAxis[0].setExtremes(0,1369);
        chart.update({
            yAxis: {
            tickInterval: 100
            }
        });
    });
});