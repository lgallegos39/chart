var chart2 = new Chartist.Bar('#chart2', {
  labels: ['Crysis 3', 'Rise of the Tomb Raider', 'Overwatch', 'Battlefield', 'Grand Theft Auto V', 'Wolfenstein', 'Skyrim HD Mod'],
  series: [
    {name: 'NVIDIA', data: [60, 72, 91, 86, 90, 67, 92]},
    {name: 'AMD', data: [70, 69, 90, 85, 90, 68, 102]}
  ]
}, {
  seriesBarDistance: 10,
  reverseData: true,
  horizontalBars: true,

  axisY: {
    offset: 70
  },
  plugins: [
    Chartist.plugins.tooltip(),
    Chartist.plugins.ctAccessibility({
      caption: 'NVIDIA & AMD Performance Comparison',
      seriesHeader: 'gpu performance',
      summary: 'A comparison among AMD and NVIDIA GPU performance',
      valueTransform: function(value) {
        return value + ' FPS';
      }
    })
  ]
});
chart2.on('draw', function (data) {
    if (data.type === 'bar') {
        data.element.attr({
            style: 'stroke-width: 0px'
        });
        var strokeWidth = 10; 

        if (data.seriesIndex === 0) {
            data.element.animate({
                x2: {
                    begin: 2000,
                    dur: 800,
                    from: data.x1,
                    to: data.x2,
                    easing: Chartist.Svg.Easing.easeOutSine,
                },
                'stroke-width': {
                    begin: 2000,
                    dur: 800,
                    from: 1,
                    to: strokeWidth,
                    fill: 'freeze',
                }
            }, false);
        }

        if (data.seriesIndex === 1) {
            data.element.animate({
                x2: {
                    begin: 3000,
                    dur: 800,
                    from: data.x1,
                    to: data.x2,
                    easing: Chartist.Svg.Easing.easeOutSine,
                },
                'stroke-width': {
                    begin: 3000,
                    dur: 800,
                    from: 0,
                    to: strokeWidth,
                    fill: 'freeze',
                }
            }, false);
        }
    }
});