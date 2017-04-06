// Variables
var ctx = document.getElementById('myChart').getContext('2d');
var ctb = document.getElementById("myBarChart").getContext('2d');
var ctp = document.getElementById("myPieChart").getContext('2d');

// Line Chart
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            lineTension: 0,
            borderWidth: 1,
            pointStyle: 'circle',
            pointRadius: 5,
            pointBorderWidth: 3,
            pointBackgroundColor: "rgba(255, 255, 255, 1)",
            data: [{
                x: 0,
                y: 0
            }, {
                x: 5,
                y: 10
            }, {
                x: 10,
                y: 15
            }, {
                x: 15,
                y: 20
            },  {
                x: 20,
                y: 30
            }, {
                x: 25,
                y: 50
            }, {
                x: 30,
                y: 40
            }, {
                x: 35,
                y: 50
            },  {
                x: 40,
                y: 60
            }, {
                x: 45,
                y: 65
            }, {
                x: 70,
                y: 40
            }, {
                x: 80,
                y: 50
            }],
            backgroundColor: [
                'rgba(115, 119, 191, 0.30)'
            ],
          borderColor: [
                'rgba(115, 119, 191, 1)'
            ],
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        },
        legend: {
            display: false
        }
    }
});

// Bar Chart
var myChartB = new Chart(ctb, {
  type: 'bar',
  data: {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
      label: 'apples',
      data: [40, 100, 170, 120, 220, 200, 70],
      backgroundColor: 'rgba(115, 119, 191, 1)',
      barThickness: 8
    }]
  }, 
  options: {
    scales: {
      yAxes: [{
        stacked: true
      }]
    },
    legend: {
      display: false
    }
  }
});

// Pie Chart
var myChartP = new Chart(ctp, {
    type: 'doughnut',
    data: {
    labels: [
        "Phones",
        "Tablets",
        "Desktops"
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#81C98F",
                "#74B1BF",
                "#7377BF"
            ],
            hoverBackgroundColor: [
                "#81C98F",
                "#74B1BF",
                "#7377BF"
            ]
        }]
    },
    options: {
        legend: {
            position: 'right',
            labels: { //The labels key is nested below the legend configuration
                boxWidth: 15,
                fontSize: 14
            }
        }
    }
    
});

