$(function () {
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            type: 'bar'
        },
        title:{
            text:''
        },
        yAxis: {
            allowDecimals: false,
            title: {
                text: 'Composite Value by Census Tract'
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
        tooltip: { enabled: false },
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

});


  $('.dropdown-menu a').on('click', function (e) {
    currentLayer = $(this).data("value");
    if (currentLayer == 'NewScoreMe') {
      $("#container").show('slow');
       odometer.innerHTML = 70;
      $("#container2").hide('slow'); 
    } else {
     $("#container").hide('slow');
     $("#container2").show('slow');
    }
  });

$(function () {
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container2',
            type: 'column'
        },
        title:{
            text:''
        },
        yAxis: {
            allowDecimals: false,
            title: {
                text: 'Number of Census Tracts'
            },
            tickInterval: 100, 
            min: 0,
            max: 900
        },
        colors: ["#ffffcc", "#a1dab4", "#41b6c4", "#2c7fb8", "#253494"],
        plotOptions: {
            bar: {
                colorByPoint: true
            }
        },
        tooltip: { enabled: false },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },    
        series: [{
            data: [{y:93,color:'#ffffcc'},   {y:263,color:'#a1dab4'},   {y:640,color:'#41b6c4'},   {y:294,color:'#2c7fb8'},   {y:79,color:'#253494'}]        
        }]
    });

    $('.dropdown-menu li:eq(1)').click(function(){
       chart.series[0].setData([{y:93,color:'#ffffcc'},   {y:263,color:'#a1dab4'},   {y:640,color:'#41b6c4'},   {y:294,color:'#2c7fb8'},   {y:79,color:'#253494'}] );
        chart.yAxis[0].setExtremes(0,900);
        chart.update({
            tooltip: {
                enabled: true,
            formatter: function () {
            return 'There are <b>' + this.y +
                '</b> census tracts in this score</b>';
            }
            },   
            yAxis: {
            title: {
                text: 'Number of Census Tracts'
            },    
            tickInterval: 100
            }
        });
    });
    
     $('.dropdown-menu li:eq(2)').click(function() {
     //   $("#container2").show(); $("#container").hide();
        chart.series[0].setData([{y:37,color:'#ffffcc'},   {y:371,color:'#a1dab4'},   {y:673,color:'#41b6c4'},   {y:200,color:'#2c7fb8'},   {y:88,color:'#253494'}] );
        chart.yAxis[0].setExtremes(0,900);
        chart.update({
            yAxis: {
            tickInterval: 100
            }
        });
    });

     $('.dropdown-menu li:eq(3)').click(function() {
      //  $("#container2").show(); $("#container").hide();
        chart.series[0].setData([{y:29,color:'#ffffcc'},   {y:304,color:'#a1dab4'},   {y:703,color:'#41b6c4'},   {y:277,color:'#2c7fb8'},  {y:56,color:'#253494'}] );
        chart.yAxis[0].setExtremes(0,900);
        chart.update({
            yAxis: {
            tickInterval: 100
            }
        });
    });

     $('.dropdown-menu li:eq(4)').click(function() {
      //  $("#container2").show(); $("#container").hide();
        chart.series[0].setData([{y:2,color:'#ffffcc'},    {y:612,color:'#a1dab4'},   {y:402,color:'#41b6c4'},   {y:152,color:'#2c7fb8'},  {y:201,color:'#253494'}] );
        chart.yAxis[0].setExtremes(0,900);
        chart.update({
            yAxis: {
            tickInterval: 100
            }
        });
    });

    $('.dropdown-menu li:eq(5)').click(function() {
    //    $("#container2").show(); $("#container").hide();
        chart.series[0].setData([{y:28,color:'#ffffcc'},   {y:323,color:'#a1dab4'},   {y:827,color:'#41b6c4'},   {y:99,color:'#2c7fb8'},   {y:92,color:'#253494'}] );
        chart.yAxis[0].setExtremes(0,900);
        chart.update({
            yAxis: {
            tickInterval: 100
            }
        });
    });

    $('.dropdown-menu li:eq(6)').click(function() {
     //   $("#container2").show(); $("#container").hide();
        chart.series[0].setData([{y:4,color:'#ffffcc'},    {y:513,color:'#a1dab4'},   {y:553,color:'#41b6c4'},   {y:181,color:'#2c7fb8'},  {y:118,color:'#253494'}] );
        chart.yAxis[0].setExtremes(0,900);
        chart.update({
            yAxis: {
            tickInterval: 100
            }
        });
    });

    $('.dropdown-menu li:eq(7)').click(function() {
     //   $("#container2").show(); $("#container").hide();
        chart.series[0].setData([{y:24,color:'#ffffcc'},   {y:477,color:'#a1dab4'},  {y:629,color:'#41b6c4'},  {y:114,color:'#2c7fb8'},  {y:125,color:'#253594'}] );
        chart.yAxis[0].setExtremes(0,900);
        chart.update({
            yAxis: {
            tickInterval: 100
            }
        });
    });

    $('.dropdown-menu li:eq(8)').click(function() {
     //   $("#container2").show(); $("#container").hide();
        chart.series[0].setData([{y:25,color:'#ffffcc'},   {y:424,color:'#a1dab4'},  {y:574,color:'#41b6c4'},  {y:251,color:'#2c7fb8'},  {y:95,color:'#253594'}] );
        chart.yAxis[0].setExtremes(0,900);
        chart.update({
            yAxis: {
            tickInterval: 100
            }
        });
    });

    $('.dropdown-menu li:eq(9)').click(function() {
        odometer.innerHTML = 300;
     //   $("#container2").show(); $("#container").hide();
        chart.series[0].setData([{y:3,color:'#ffffcc'},    {y:563,color:'#a1dab4'},  {y:444,color:'#41b6c4'},  {y:199,color:'#2c7fb8'},  {y:160,color:'#253594'}] );
        chart.yAxis[0].setExtremes(0,900);
        chart.update({
            yAxis: {
            tickInterval: 100
            }
        });
    });
});

setTimeout(function(){
    odometer.innerHTML = 2006;
}, 1000);