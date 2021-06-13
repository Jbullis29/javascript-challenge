// from data.js
var tableData = data;

data.forEach((ufoSightings) => {
    console.log(ufoSightings);

var table = d3.select('tbody')

   var row = table.append("tr");
   Object.entries(ufoSightings).forEach(function([key, value]) {
        console.log(key, value);

        var cell = row.append('td');
        cell.text(value);

    });
});

var button = d3.select('#button');
var form = d3.select('#form-control');

button.on('click', runFilter);
form.on('submit', runFilter);

function runFilter() {
d3.event.preventDefault();
var inputdate = d3.select('datetime');
var inputValue = inputdate.property('value');
    console.log(inputValue);
console.log(tableData);
var filteredData = tableData.filter(sighting => sighting.date >= inputValue);
console.log(filteredData);

Object.entries(filteredData).forEach(function([key, value]) {
    console.log(key, value);

    var cell = row.append('td');
    cell.text(value);
    });
}

