d3.select("#multiline_vis").text("TESTING MULTILINE")
var svgWidth = 560;
var svgHeight = 460;

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
    
    console.log(moveReasonData);
    //select body and append svg element with height and width set
    var svg = d3
        .select("#multiline_vis")
        .append("svg")
        .attr("height", svgHeight)
        .attr("width", svgWidth);

    var chartGroup = svg.append("g")
        .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

    //create scale for independent x coords
    var xScale = d3.scaleLinear()
        .domain(d3.extent(moveReasonData, d => d.mobility_start))
        .range([0, chartWidth]);

    //create y scale
    var yScale = d3.scaleLinear()
        .domain([0.0, 100.0])
        .range([chartHeight, 0]);

    var bottomAxis = d3.axisBottom(xScale);
    var leftAxis = d3.axisLeft(yScale);

    var line1 = d3.line()
        .x(data => xScale(data.mobility_start))
        .y(data => yScale(data.family_comb_per));

    var line2 = d3.line()
        .x(data => xScale(data.mobility_start))
        .y(data => yScale(data.Job_comb_per));

    var line3 = d3.line()
        .x(data => xScale(data.mobility_start))
        .y(data => yScale(data.other_college_per));

    

    /*chartGroup.append("path")
        .attr("fill", "none")
        .attr("stroke", "blue")
        .attr("stroke-width", "1")
        .attr("d", makeLine(moveReasonData));*/

    chartGroup.append("path")
        .classed("line", "true")
        .attr("stroke", "black")
        .attr("fill", "none")
        .attr("d", line1(moveReasonData));

    chartGroup
        .data([moveReasonData])
        .append("path")
        .attr("stroke", "blue")
        .attr("fill", "none")
        .attr("d", line2)
        .classed("line", true);

    chartGroup
        .data([moveReasonData])
        .append("path")
        .attr("stroke", "purple")
        .attr("fill", "none")
        .attr("d", line3)
        .classed("line", true);

    chartGroup.append("g")
        .classed("axis", true)
        
        .call(leftAxis);

    chartGroup.append("g")
        .classed("axis", true)
        .attr("transform", `translate(0, ${chartHeight})`)
        .call(bottomAxis);
});
