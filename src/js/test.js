/**
 * This file is for connecting the website with the backend server using AWS API Gateway.
 */

// Get the form element by its id
var form = document.getElementById("myForm");

// Add an event listener for the submit event
form.addEventListener("submit", function(event) {
  // Prevent the default behavior of sending the data to the server
  event.preventDefault();

  // Get the input values from the form
  var name = form.elements["name"].value;
  var place = form.elements["text"].value;

  // Create a JSON object with the input values
  var data = {
    name: name,
    place: place
  };

  // Convert the JSON object to a string
  var dataString = JSON.stringify(data);

  // Get the API Gateway endpoint URL from an environment variable or a config file
  var apiURL = 'https://hrsic2lrkc.execute-api.eu-north-1.amazonaws.com/testPost';

  // Use the fetch API to send the data as JSON to the API Gateway endpoint
  fetch(apiURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: dataString
  })
    .then(function(response) {
      // Check if the response is successful
      if (response.ok) {
        // Parse the response as JSON and return it
        return response.json();
      } else {
        // Throw an error with the status text
        throw new Error(response.statusText);
      }
    })
    .then(function(data) {
      // Handle the response data as you wish
      // For example, display a success message or redirect to another page
      alert(data.message);
    })
    .catch(function(error) {
      // Handle any errors that may occur
      // For example, display an error message or log it to a file
      alert(error.message);
    });
});
