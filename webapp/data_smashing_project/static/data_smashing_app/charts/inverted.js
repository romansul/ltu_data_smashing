$(document).ready(
    $(function () {
        $('#invertedc').highcharts({
            title: {
                text: 'Inverted signal',
                //x: -20 //center
            },
            yAxis: {
                title: {
                    text: 'Value'
                },
                plotLines: [{
                    value: 0,
                    width: 0.5,
                    color: '#808080'
                }]
            },
            xAxis: {
                title: {
                    enabled: false
                }
            },
            series: inverted_strams,
            plotOptions:{
                series:{
                    lineWidth: 1
                }
            },
        });
    })
)