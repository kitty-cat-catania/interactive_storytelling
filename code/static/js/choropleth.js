d3.select("#choropleth_vis").text("TESTING CHOROPLETH")
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
  
  d3.json ("/state_to_state").then(function (stateData) {
      console.log(stateData);
      alabamaTest = stateData[0];
      console.log(alabamaTest);
    
  });
  
