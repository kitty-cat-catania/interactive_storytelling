function init () {
    d3.json ("/state_to_state").then(function (getStates) {
        var alabamaTest = getStates[0];
        console.log(alabamaTest);
        var states = (Object.keys(alabamaTest));
        console.log(states);

        var ddButton = d3.select("state");
        var ddOptions = names.forEach(function(state) {
            var idOption = ddButton.append("option");
            idOption.text(state);
            idOption.attr("value", state);
        })
    })
}

init();