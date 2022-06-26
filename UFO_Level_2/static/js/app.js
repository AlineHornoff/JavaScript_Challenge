// from data.js
var tableData = data;

// YOUR CODE HERE!

// Create reference to table data
var UFO_table = d3.select("tbody");

function clearBuildTable(tableData) {
    UFO_table.html("");
        
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
};


clearBuildTable(tableData);

// Define a function to filter
function clickFilter(){
    // Define reference to datetime
    var inputDate = d3.select("#datetime").property("value");

    // Define reference to city
    var inputCity = d3.select("#city").property("value").toLowerCase();

    // Define reference to state
    var inputState = d3.select("#state").property("value").toLowerCase();

    // Define reference to country
    var inputCountry = d3.select("#country").property("value");

    // Define reference to sahpe
    var inputShape = d3.select("#shape").property("value");

    // Declare variable
    let FilteredData = tableData;
    if (inputDate) {FilteredData = FilteredData.filter(row=> row.datetime === inputDate); }
    if (inputCity) {FilteredData = FilteredData.filter(row=> row.city === inputCity); }
    if (inputState) {FilteredData = FilteredData.filter(row=> row.state === inputState); }
    if (inputCountry) {FilteredData = FilteredData.filter(row=> row.country === inputCountry); }
    if (inputShape) {FilteredData = FilteredData.filter(row=> row.shape === inputShape); }
    clearBuildTable(FilteredData)
};

// Select the button
d3.selectAll("#filter-btn").on("click", clickFilter) 

