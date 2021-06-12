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
