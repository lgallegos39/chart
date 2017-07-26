new Chartist.Pie('#chart4', {
  labels: ['Donuts', 'Muffins', 'Cookies', 'Coffee', 'Pan', 'Empanada'],
  series: [20, 10, 15, 20, 20, 15]
}, {
  donut: true,
  donutWidth: 90,
  donutSolid: true,
  startAngle: 200,
  showLabel: false,
  plugins: [
    Chartist.plugins.tooltip(),
    Chartist.plugins.legend({
            className: 'inner'
        }),
    Chartist.plugins.ctAccessibility({
      caption: 'Delicious Donuts Chart',
      summary: 'I ran out of ideas and sweets based on the names so this chart does not make sense',
      valueTransform: function(value) {
        var total = chart.data.series.reduce(function(prev, current) {
          return prev + current;
        }, 0);
        return Math.round(value / total * 100) + '%';
      }
    })
  ]
});