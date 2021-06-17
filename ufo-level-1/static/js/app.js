// from data.js
var tableData = data;
//console.log(tableData);

// for loop to loop through all my data
data.forEach((ufoSightings) => {
    //console.log(ufoSightings)
    //selecting the table elemant to store my data
var table = d3.select('tbody')
//adding a row to my data for each data entry
 var row = table.append("tr");
 //looping through all my data points and pulling the key and value from it
    Object.entries(ufoSightings).forEach(function([key, value]) {
    // adding new Table Dat column to ad data to 
    var cell = row.append('td');
    //Adding my value to the table as text
    cell.text(value);
    }); 
});