  $("document").ready(function() {
  	var template = $("#Chartist").html();
  	var renderer = Handlebars.compile(template);
  	var result = renderer({
      "Chart" : [{
  			"title" : "Super Important Chart",
  			"chartID" : "chart1"
  		}, {
  			"title" : "GPU Performance Chart",
  			"chartID" : "chart2"
      }]
  });
  	$(".container").html(result);
  });