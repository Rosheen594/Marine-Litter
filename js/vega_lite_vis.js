var spec2 = "js/bar_chart.vg.json";
vegaEmbed('#bar_chart', spec2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec1 = "js/map.vg.json";
vegaEmbed('#map', spec1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec3 = "js/stacked_bars.vg.json";
vegaEmbed('#stacked_bars', spec3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);