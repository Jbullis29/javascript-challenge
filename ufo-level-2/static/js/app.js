// from data.js
var tableData = data;
//console.log(tableData);

//loop through my data
data.forEach((ufoSightings) => {
    //console.log(ufoSightings)
    // Define my table by selecting it on my html file
    var table = d3.select('tbody')
    //adding a row to my table
    var row = table.append("tr");
    // loop through the objects of my data and find each key and its value
    Object.entries(ufoSightings).forEach(function([key, value]) {
        // add new table data inside table row
        var cell = row.append('td');
        // add data as text to table
        cell.text(value);
    });
});
// create a variable for the button and form that finds the element in the html
var button = document.getElementById('filter-btn');
var form = document.getElementById('form');

//Create an event listener for button and form that records when button is clicked or form is entered 
button.addEventListener('click', runFilter);
form.addEventListener('submit', runFilter);

//Create my function that will run when the button or form event listeners are set triggered 
function runFilter() {
    //on form submit event prevent default prevents reloading
    event.preventDefault();
    //select my table body again 
    var table = d3.select('tbody');
    //Resets my table so it is blank
    table.html('');
    // create a new list to store user inputs into 
    const start_end_dates = []
    //select the element on the html where the input is stored
    var inputElement = d3.select('input');
    //select the value that the user inputted
    var userDate = inputElement.property('value');
    // Html requests a start and end date with a comma in between. This split them and returns 2 values
    var splitDates = userDate.split(',');
    //Covert the user input dates to datetime format and push them to my list
    splitDates.forEach((date) => {
        start_end_dates.push(Date.parse(date));
    });
    // assigin the first value in the list to start date
    var startDate = start_end_dates[0]
    // assign second item in the list to end date
    var endDate = start_end_dates[1]
    // Loop through each item of the data 
    data.forEach((sighting) => {
        // assign row to append table
        var row = table.append("tr");
        // loop through each object entry and get the key and value for each object
        Object.entries(sighting).forEach(function([key, value]) {
            // create a variable and assign the converted date to it
            const convertDate = Date.parse(sighting.datetime);
            // if statement to compare start and end date to the converted date  
            if (convertDate >= startDate && convertDate <= endDate) {
                // if true add table data tag
                var cell = row.append('td');
                // add text to the table data
                cell.text(value);
                // log string to ensure its working
                console.log('gottem')
            }
        });
    });
}