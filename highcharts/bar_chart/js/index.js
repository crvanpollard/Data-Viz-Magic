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
            min: 0,
            max: 500
        },
        colors: [
            '#4572A7', 
            '#AA4643', 
            '#89A54E', 
            '#80699B', 
            '#3D96AE'
        ]
        ,
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
            data: [450]        
        }]
    });
    
    // The button action
    $('#button').click(function() {
        chart.series[0].setData([30.9, 31.5, 106.4, 159.2, 184.0] );
        chart.yAxis[0].setExtremes(0,190);
    });
    
    $('#button2').click(function() {
        chart.series[0].setData([450] );
        chart.yAxis[0].setExtremes(0,500);
    });
     $('#button3').click(function() {
        chart.series[0].setData([50.9, 61.5, 136.4, 129.2, 104.0] );
        chart.yAxis[0].setExtremes(0,190);
    });
});