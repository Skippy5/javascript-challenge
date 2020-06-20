// from data.js
var tableData = data;
console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Use d3 to update each cell's text with
// UFO Sighting information (Date, City, State, Country, Shape, Duration, Comments)
tableData.forEach(function(Sighting) {
    console.log(Sighting);
    var row = tbody.append("tr");
    Object.entries(Sighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the UFO Sighting report object
      var cell = row.append("td");
      cell.text(value);
    });
  });



// Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {
    
    tbody.html("");

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    
    // console.log input value
    console.log(inputValue);

    var filteredData = tableData.filter(entereddate => entereddate.datetime === inputValue);

    console.log(filteredData);
    
    filteredData.forEach(function(selections) {
        console.log(selections);
        var row = tbody.append("tr");
        Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        // in the UFO Sighting report object
        var cell = row.append("td");
        cell.text(value);
        });
    });
});
