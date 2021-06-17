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
    
var button = document.getElementById('filter-btn');
var form = document.getElementById('form');


    button.addEventListener('click', runFilter);
    form.addEventListener('submit', runFilter)
    
    function runFilter(){
    event.preventDefault();
    var table = d3.select('tbody');

    table.html('');
    const start_end_dates =[]
    var inputElement = d3.select('input');
    var userDate = inputElement.property('value');
    var splitDates = userDate.split(',');
        splitDates.forEach((date)=>{
         start_end_dates.push(Date.parse(date));
        });
    var startDate = start_end_dates[0]
    var endDate = start_end_dates[1]
    filterList=[]
    data.forEach((sighting)=>{
        var row = table.append("tr");
        Object.entries(sighting).forEach(function([key, value]){
            const convertDate = Date.parse(sighting.datetime);
            if(startDate <= convertDate){
            var cell = row.append('td');
            cell.text(value);
            console.log('gottem')}
            else if(endDate > convertDate){}
        
        });
});
    }
