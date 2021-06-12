var trace1 = {
    x: [1,2,3,4],
    y: [10, 7, 13,17],
    type: 'scatter',
    mode: 'lines',
    name: 'Family'
};

var trace2 = {
    x:[1,2,3,4],
    y: [16, 5, 11, 9],
    type: 'scatter',
    mode: 'lines', 
    name: 'Job'
};

var data = [trace1, trace2];

var layout = {
    title: "Reason for Move",
    xaxis: {
        title: 'Year'
    },
    yaxis: {
        title: "People"
    }
};

Plotly.newPlot('multi-line', data, layout);

d3.csv("../datasets/census_csvs/tab-a-5.csv").then(function (moveReasonData) {
    console.log(moveReasonData);

    //Cast values as numbers for each piece of data 
    moveReasonData.forEach(function (data) {
        data.family_other = +data.family_other;
    });

    console.log(moveReasonData);
});