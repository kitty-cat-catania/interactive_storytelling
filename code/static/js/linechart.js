d3.json("/a1_movers").then(function (lineData) {
    var dates = [];
    var movers = [];
    for (var i = 0; i<lineData.length; i++) {
        var dict = lineData[i];
        movers.push(dict.movers_total);
        var period = dict.mobility_period;
        var date = period.substring(5);
        dates.push(date);
        
    };
    dates.reverse();
    console.log(dates);
    movers.reverse();

    var trace1 = {
        type: 'scatter', 
        x: dates,
        y: movers,
        name: 'total movers',
        mode: 'lines'
    };

    var data = [trace1];
    var layout = {
        title: 'Total Movers in the US Over Time',
        xaxis: {
            title: 'Year'
        },
        yaxis: {
            title: 'Total Movers'
        }
    };

    Plotly.newPlot('linechart', data, layout);
})