// from data.js
var tableData = data;
//console.log(tableData);


data.forEach((ufoSightings) => {
    //console.log(ufoSightings)
var table = d3.select('tbody')
    var row = table.append("tr");
    Object.entries(ufoSightings).forEach(function([key, value]) {
        const convertDate = Date.parse(ufoSightings.datetime);
        console.log(convertDate)
    var cell = row.append('td');
    cell.text(value);
    });
});

var button = document.getElementById('filter-btn');
var form = document.getElementById('form');


button.addEventListener('click', runFilter);
form.addEventListener('submit', runFilter)

function runFilter(){
    event.preventDefault();
    console.log('its alive');
    var inputElement = d3.select('input');
    var userDate = inputElement.property('value');
    const convertUserDate = Date.parse(userDate);
    console.log(convertUserDate)
   
}
  

