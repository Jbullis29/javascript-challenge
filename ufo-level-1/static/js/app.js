// from data.js
var tableData = data;
//console.log(tableData);


data.forEach((ufoSightings) => {
    //console.log(ufoSightings)
var table = d3.select('tbody')
 var row = table.append("tr");
    Object.entries(ufoSightings).forEach(function([key, value]) {
    var cell = row.append('td');
    cell.text(value);
    }); 
});