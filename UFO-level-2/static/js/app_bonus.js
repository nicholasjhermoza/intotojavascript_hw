// from data.js
var tableData = data;
//  * Makes columns for `date/time`, 
//`city`, `state`, `country`, `shape`, and `comment`
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

data.forEach(function(tableData) {
  console.log(tableData);
});

//Object.keys(data).forEach(key => console.log(key));
console.log(datetime)
data.forEach((data) => {
    console.log(data);
});

// Create table structure in the html file and insert each "data" object
data.forEach(obj => {
    // for each "element" in the object create a row
    var tRow = tbody.append("tr");
    //below "object" becomes the targetet array (element)
    Object.entries(obj).forEach(([key,value]) => {
        // console.log(`The key is: ${key} and the value is: ${value}`);
        var tData = tRow.append("td");
        // adds the "value" to each row in the table
        tData.text(value);
    });
});

// * Use a date form in your HTML document and write JavaScript 
//code that will listen for events and search through the `date/time`
// column to find rows that match user input.
input_dict = {}
var filter_btn = d3.selectAll(".filter");
filter_btn.on("change", runEnter);
function runEnter() {
    var filter_data = data
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputElement = d3.select(this).select("input");
    var input_id = inputElement.attr("id")
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  input_dict[input_id] = inputValue
  // Print the value to the console
  console.log(input_dict);

  Object.entries(input_dict).forEach(([key,value]) => {
  
    filter_data = filter_data.filter(x => x[key] === value) 
  });
    tbody.html("")
  filter_data.forEach(obj => {
    // for each "element" in the object create a row
    var tRow = tbody.append("tr");
    //below "object" becomes the targetet array (element)
    Object.entries(obj).forEach(([key,value]) => {
        // console.log(`The key is: ${key} and the value is: ${value}`);
        var tData = tRow.append("td");
        // adds the "value" to each row in the table
        tData.text(value);
    });
    });
}