  var data = [{
    type: "choroplethmapbox", name: "US states", geojson: "https://raw.githubusercontent.com/python-visualization/folium/master/examples/data/us-states.json", locations: [ "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY" ],
   z: [ 141, 140, 155, 147, 132, 146, 151, 137, 146, 136, 145, 141, 149, 151, 138, 158, 164, 141, 146, 145, 142, 150, 155, 160, 156, 161, 147, 164, 150, 152, 155, 167, 145, 146, 151, 154, 161, 145, 155, 150, 151, 162, 172, 169, 170, 151, 152, 173, 160, 176 ],
   zmin: 25, zmax: 280, colorbar: {y: 0, yanchor: "bottom", title: {text: "US states", side: "right"}}}
    ];
   
   var layout = {mapbox: {style: "dark", center: {lon: -110, lat: 50}, zoom: 0.8}, width: 600, height: 400, margin: {t: 0, b: 0}};
   
   var config = {mapboxAccessToken: "pk.eyJ1IjoiZ2FicmllbGxlY2F0YW5pYSIsImEiOiJja3AwMDV6dmUwYWJpMndrZ29mbW03ZHJsIn0.R15J5L37Zr5lwmkjXiosJg"};
   
   Plotly.newPlot('choropleth_vis', data, layout, config);
  
   function init () {
    d3.json ("/state_to_state").then(function (getStates) {
        var alabamaTest = getStates[0];
        console.log(alabamaTest);
        var states = (Object.keys(alabamaTest));
        console.log(states);

        var ddButton = d3.select("#state");
        var ddOptions = states.forEach(function(state) {
            var idOption = ddButton.append("option");
            idOption.text(state);
            idOption.attr("value", state);
        })
    })
}
init();
d3.selectAll("#state").on("change", optionChanged);

function optionChanged() {
    d3.json("/state_to_state").then(function (data) {
        var ddMenu = d3.select("#state");
        var selectedState = ddMenu.property("value");
        console.log(selectedState);
        var stateIndex = 0;
        for (var i = 0; i<data.length; i++){
            state = data[i];
            if (state.Current_Residence == selectedState) {
                console.log(state.Current_Residence);
                stateIndex = i;
                break;
            };
        }
        
    });
}

   d3.json("/state_to_state").then(function (stateData) {
       console.log(stateData);
       alTest = stateData[0];
       alabamaMove = Object.values(alTest);
       console.log(alabamaMove);
       trial = alabamaMove.splice(7,1);
       alabamaMove[0]=0;
       console.log(alabamaMove);
       var newData = [{
        type: "choroplethmapbox", name: "US states", geojson: "https://raw.githubusercontent.com/python-visualization/folium/master/examples/data/us-states.json", locations: [ "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY" ],
       z: alabamaMove,
       zmin: 25, zmax: 20000, colorbar: {y: 0, yanchor: "bottom", title: {text: "US states", side: "right"}}}
        ];
       Plotly.newPlot('choropleth_vis', newData, layout, config);
       var ddMenu = d3.select("#state");
       var selectedState = ddMenu.property("value");
       console.log(selectedState);

   });