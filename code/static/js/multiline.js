var svgWidth = 550;
var svgHeight = 400;

var chartMargin = {
    top: 30,
    right: 30, 
    bottom: 30,
    left: 40
};

var chartWidth = svgWidth-chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;




d3.json("/a5_reasons").then(function (moveReasonData) {
    console.log(moveReasonData);

    //Cast values as numbers for each piece of data 
    moveReasonData.forEach(d => parseFloat(d));
    moveReasonData.forEach(function (d) {
        var first = d.mobility_period;
        var end = first.substring(0,4);
        d.mobility_period = end;
        var house = (d.housing_better_neighborhood_per + d.housing_cheaper_per
                    + d.housing_eviction_per + d.housing_other_per + d.housing_ownership_per
                    + d.housing_upsize_per);
        d.housing_cheaper_per = house;
        var other = (d.other_climate_per + d.other_college_per + d.other_health_per 
                    + d.other_natural_disaster_per + d.other_other_per + 
                    d.other_relationship_per)
        d.other_other_per = other;
        console.log(house);
    });
    
    
    
    console.log(moveReasonData);
    //make tooltip
    var toolTip = d3.select("body")
        .append("div")
        .attr("id", "tooltip")
        .attr("style", 'position: absolute; opacity: .5;');

    //select body and append svg element with height and width set
    var svg = d3
        .select("#multiline_vis")
        .append("svg")
        .attr("height", svgHeight)
        .attr("width", svgWidth);

    var chartGroup = svg.append("g")
        .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

    //create scale for independent x coords
    var xScale = d3.scaleBand()
        .domain(moveReasonData.map(d => d.mobility_period)) 
        .range([0, chartWidth]);

    //create y scale
    var yScale = d3.scaleLinear()
        .domain([0.0, 60.0])
        .range([chartHeight, 0]);

    var bottomAxis = d3.axisBottom(xScale)
    var leftAxis = d3.axisLeft(yScale)
    
                             

    var line1 = d3.line()
        .x(data => xScale((data.mobility_period)))
        .y(data => yScale(data.family_comb_per));

    var line2 = d3.line()
        .x(data => xScale((data.mobility_period)))
        .y(data => yScale(data.Job_comb_per));

    var line3 = d3.line()
        .x(data => xScale((data.mobility_period)))
        .y(data => yScale(data.other_other_per));

    

    var line5 = d3.line()
        .x(data => xScale((data.mobility_period)))
        .y(data => yScale(data.housing_cheaper_per));
    
    var categories = (Object.keys(moveReasonData[0]));

    

    //append blackline
    chartGroup.append("path")
        .classed("line", "true")
        .attr("stroke", "black")
        .attr("fill", "none")
        .attr("d", line1(moveReasonData));
    //append blue line
    chartGroup
        .data([moveReasonData])
        .append("path")
        .attr("stroke", "blue")
        .attr("fill", "none")
        .attr("d", line2)
        .classed("line", true);


    //append housing cheaper line 
    chartGroup
        .data([moveReasonData])
        .append("path")
        .attr("stroke", "green")
        .attr("fill", "none")
        .attr("d", line5)
        .classed("line", true);
    //append purple line
    chartGroup
        .data([moveReasonData])
        .append("path")
        .attr("stroke", "purple")
        .attr("fill", "none")
        .attr("d", line3)
        .classed("line", true)
        .on('mouseover', function(d) {
            toolTip.style("display", "block");
            toolTip.html("No");
        })
        .on("mouseout", function (d) {
            d3.select("#tooltip").style("opacity", 0)
        });
    // append left Axis
    chartGroup.append("g")
        .classed("axis", true)
        .call(leftAxis);
    // append bottom axis
    chartGroup.append("g")
        .classed("axis", true)
        .attr("transform", `translate(0, ${chartHeight})`)
        .call(bottomAxis);


    var legendSpace = svgWidth/5;
    
    svg.append("text")
        .attr("x", chartWidth - (chartMargin.right/2)) // spacing
        .attr("y", chartMargin.bottom*2)
        .attr("class", "legend")
        .text("meh")    // style the legend
        //.style("fill", function() { // dynamic colours
            //return d.color = color(d.key); })
            svg.append("text")
            .attr("x", chartWidth - (chartMargin.right/2)) // spacing
            .attr("y", chartMargin.bottom*1.5)
            .attr("class", "legend")
            .text("meh2")
            svg.append("text")
            .attr("x", chartWidth - (chartMargin.right/2)) // spacing
            .attr("y", chartMargin.bottom*1)
            .attr("class", "legend")
            .text("meh3") 
            svg.append("text")
            .attr("x", chartWidth - (chartMargin.right/2)) // spacing
            .attr("y", chartMargin.bottom*.5)
            .attr("class", "legend")
            .text("meh4")  
});

