// from data.js
var tableData = data;

// YOUR CODE HERE!

// Create reference to table data
var UFO_table = d3.select("tbody");

// Set UFO Sighting values for each column 
tableData.forEach(function(UFO_sighting) {
    // Check values
    console.log(UFO_sighting);

    // For each table row 'tr' append one UFO sighting value
    var row = UFO_table.append("tr");

    // Utilise 'Object.entries' to console.log each UFO sighting value
    Object.entries(UFO_sighting).forEach(function([key, value]) {
        // Check values
        console.log(key, value);

        // Append a cell to the row for each value
        var Cell = row.append("td");
        Cell.text(value);
    });
});

// Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {

    UFO_table.html("");

    // Select input date
    var InputElement = d3.select("#datetime");

    // Get value property of date
    var InputValue = InputElement.property("value");

    // Console.log input value
    console.log(InputValue);

    // Filter data with datetime equal to input value
    var FilteredData = tableData.filter(Sighting => Sighting.datetime === InputValue);

    // Console.log filter values
    console.log(FilteredData);

    FilteredData.forEach(function(Selections) {
        // Console.log Selections
        console.log(Selections);

        // Append one table row 'tr' for each UFO Sighting Object
        var row = UFO_table.append("tr");

        // Utilise 'Object.entries' to console.log each UFO sighting value
        Object.entries(Selections).forEach(function([key, value]) {
            // Console.log key and value
            console.log(key, value);

            // Append a cell to the row for ach value
            var Cell = row.append("td");
            Cell.text(value);

        });
    });
});