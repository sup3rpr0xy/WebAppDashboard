var ctb = document.getElementById("myBarChart").getContext('2d');
var ctp = document.getElementById("myPieChart").getContext('2d');
var ctx = document.getElementById('myChart').getContext('2d');

Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.responsive = true;
//Chart.defaults.global.layout.padding = 10;
//Chart.defaults.global.layout.padding = 60;
Chart.defaults.global.defaultColor = "rgba(rgb(210, 19, 210), 0.4)"
Chart.defaults.global.elements.arc.backgroundColor = 'rgb(104, 108, 183, 0.4)'; 
Chart.defaults.global.elements.line.borderColor = 'rgb(104, 108, 183, 0.4)'; 
 
var myChartL = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['16-22', '23-29', '30-5', 'T', 'F', 'S', 'S'],
    datasets: [
      {
        label: 'apples',
        data: [700, 1000, 1500, 1300, 500, 1100, 1800],
        backgroundColor: "rgba(153,255,51,0.4)",
        lineTension: 0,
        pointRadius: 5, 
//        pointBorderColor: ; 
      }, 
      { /* This dataset is for deletion */
        label: 'oranges',
        data: [2, 29, 5, 5, 2, 3, 10],
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
      }
    ] 
  },
  options: {
    title: {
      display: true, 
      text: 'Custom Chart Title Test',
      position: 'left',
      fontSize: 20
    }
  }
});

var myChartB = new Chart(ctb, {
  type: 'bar',
  data: {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
      label: 'apples',
      data: [40, 90, 170, 120, 220, 200, 70],
      backgroundColor: "rgba(153,255,51,0.4)"
    }]
  }, 
  options: {
    scales: {
      yAxes: [{
        stacked: true
      }]
    }
  }
});

var myChartP = new Chart(ctp, {
  type: 'pie',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{
      label: 'apples',
      data: [12, 19, 3, 17, 6, 3, 7],
      backgroundColor: "rgba(153,255,51,0.4)"
    }, {
      label: 'oranges',
      data: [2, 29, 5, 5, 2, 3, 10],
      backgroundColor: "rgba(255,153,0,0.4)"
    }]
  }, 
  options: {
    cutoutPercentage: 40
  }
});