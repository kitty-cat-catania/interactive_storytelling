d3.select("#bubblemap_vis").text("TESTING BUBBLEMAP")


function init () {
    d3.json ("/a1_movers").then(function (mobilData) {
        ddButton = d3.select("#time")
        
        var years = mobilData.forEach(function (year) {
            var period = year.mobility_period;
            var idOption = ddButton.append("option");
            idOption.text(period);
            idOption.attr("value", period);
        });

        
    });


}
init();

d3.selectAll("#time").on("change", optionChanged);

d3.json ("/a1_movers").then(function (data) {
    var firstDict = data[0];
    var newState = firstDict.movers_new_county_new_state;
    var newCounty = firstDict.movers_new_county_same_state;
    var sameCounty = firstDict.movers_same_county;
    var trace1 = {
        x: ['New State', 'New County', 'Same County'],
        y: [newState, newCounty, sameCounty],
        type: 'bar'
    };

    var data = [trace1];

    var layout = {
        title: 'Distance Moved'
    };

    Plotly.newPlot('bubblemap_vis', data, layout);
})