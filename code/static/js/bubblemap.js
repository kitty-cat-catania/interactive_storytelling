d3.select("#bubblemap_vis").text("TESTING BUBBLEMAP")
d3.json("/trends").then(function(data) {
    console.log(data);
});

d3.json("/a6_distance").then(function(data) {
    console.log(data);
});