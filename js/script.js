// Menu Button

const taregetButton = document.querySelector('.menu-button');
const header = document.querySelector('.header');
const hideScrolllbar = document.querySelector('#backToTop');

taregetButton.addEventListener('click', () => {
    header.classList.toggle('active-menu');
    hideScrolllbar.classList.toggle('hideScrolllbar');
    // alert('testing');
});


// Pie chart js

// Data retrieved from https://netmarketshare.com/
// Build the chart
Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Break-up of Total Payment',
        align: 'center'
    },
    tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Principal Loan Amount',
            y: 55,
            sliced: true,
            selected: true
        },  {
            name: 'Total Interest',
            y: 45
        }
    ]
    }]
});