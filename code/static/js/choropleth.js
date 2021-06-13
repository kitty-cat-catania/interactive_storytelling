/*d3.select("#choropleth_vis").text("TESTING CHOROPLETH")
var myMap = L.map("choropleth_vis", {
    center: [37.8, -95],
    zoom: 4
});
  
  // Adding tile layer
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 500,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: "pk.eyJ1IjoiZ2FicmllbGxlY2F0YW5pYSIsImEiOiJja3AwMDV6dmUwYWJpMndrZ29mbW03ZHJsIn0.R15J5L37Zr5lwmkjXiosJg"
  }).addTo(myMap);
  */
  var data = [{
    type: "choroplethmapbox", name: "US states", geojson: "https://raw.githubusercontent.com/python-visualization/folium/master/examples/data/us-states.json", locations: [ "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY" ],
   z: [ 141, 140, 155, 147, 132, 146, 151, 137, 146, 136, 145, 141, 149, 151, 138, 158, 164, 141, 146, 145, 142, 150, 155, 160, 156, 161, 147, 164, 150, 152, 155, 167, 145, 146, 151, 154, 161, 145, 155, 150, 151, 162, 172, 169, 170, 151, 152, 173, 160, 176 ],
   zmin: 25, zmax: 280, colorbar: {y: 0, yanchor: "bottom", title: {text: "US states", side: "right"}}}
    ];
   
   var layout = {mapbox: {style: "dark", center: {lon: -110, lat: 50}, zoom: 0.8}, width: 600, height: 400, margin: {t: 0, b: 0}};
   
   var config = {mapboxAccessToken: "pk.eyJ1IjoiZ2FicmllbGxlY2F0YW5pYSIsImEiOiJja3AwMDV6dmUwYWJpMndrZ29mbW03ZHJsIn0.R15J5L37Zr5lwmkjXiosJg"};
   
   Plotly.newPlot('choropleth_vis', data, layout, config);