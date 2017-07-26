var chart = new Chartist.Pie('#chart3', {
  labels: ['Pie', 'Cake', 'Cupcake', 'Cheesecake', 'Cookie'],
  series: [25, 15, 10, 20, 30]
}, {
  labelOffset: 170,
  chartPadding: 20,
  showLabel:false,
  plugins: [
    Chartist.plugins.tooltip(),
    Chartist.plugins.legend(),
    Chartist.plugins.ctAccessibility({
      caption: 'Pie is great chart',
      summary: 'A chart that shows the most preferred sweets',
      valueTransform: function(value) {
        var total = chart.data.series.reduce(function(prev, current) {
          return prev + current;
        }, 0);
        return Math.round(value / total * 100) + '%';
      }
    })
  ]
});