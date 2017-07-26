var chart1 = new Chartist.Line('#chart1', {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  series: [
    {name: 'Income', data:[20000, 30000, 10000, 52000, 30000, 32000, 90000, 12000, 180000, 394000, 30000, 190000]},
    {name:'Expenses', data:[1000, 15000, 1400, 12000, 20000, 23000, 22000, 24000, 21000, 18000, 30000,302000]},
  ]
}, {
  fullWidth: true,
  lineSmooth: false,
  showArea: true,
  chartPadding: {
    right: 20,
    left: 10
  },
  axisX: {
    labelInterpolationFnc: function(value) {
      return value.split('').slice(0, 3).join('');
    }
  },
  plugins: [
    Chartist.plugins.tooltip({currency:'$'}),
    Chartist.plugins.ctAccessibility({
      caption: 'Fiscal year 2015',
      seriesHeader: 'business numbers',
      summary: 'A graphic that shows the business numbers of the fiscal year 2015',
      valueTransform: function(value) {
        return value + ' dollar';
      }
    })
  ]
});
chart1.on('draw', function(data) {
  if(data.type === 'line' || data.type === 'area') {
    data.element.animate({
      d: {
        begin: 1000 * data.index,
        dur: 1500,
        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
        to: data.path.clone().stringify(),
        easing: Chartist.Svg.Easing.easeOutQuint
      }
    });
  }
});