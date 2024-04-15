document.addEventListener("DOMContentLoaded", function() {
    // Student ID and Name
    var studentId = "200550446";
    var studentName = "Rohan Badera";

    // Selecting the element where you want to display student info
    var studentInfoContainer = document.getElementById("student-info");

    // Creating a paragraph element for student info
    var studentParagraph = document.createElement("p");
    studentParagraph.textContent = "Student ID: " + studentId + " | Name: " + studentName;

    // Appending the paragraph to the container
    studentInfoContainer.appendChild(studentParagraph);

    // Fetch a random activity from the API
    fetch("http://www.boredapi.com/api/activity/")
    .then(response => response.json())
    .then(data => {
        // Selecting the element where you want to display the activity
        var activityContainer = document.getElementById("activity-container");

        // Creating a paragraph element for the activity
        var activityParagraph = document.createElement("p");
        activityParagraph.textContent = "Random Activity: " + data.activity;

        // Appending the activity to the container
        activityContainer.appendChild(activityParagraph);
    })
    .catch(error => {
        console.error('Error fetching activity data:', error);
    });

    // Access Key for Unsplash API
    var accessKey = "T6lKw0Zqg-7UmvXbQLwBKyfbrUYWCZRLSc2O8IJBoAw"; 

    // Fetching data from the Unsplash API
    fetch("https://api.unsplash.com/photos/random?client_id=" + accessKey)
    .then(response => response.json())
    .then(data => {
        // Selecting the element where you want to display the image
        var imageContainer = document.getElementById("image-container");

        // Creating an image element
        var image = document.createElement("img");

        // Set the image source to the URL returned by the API
        image.src = data.urls.regular;

        // Appending the image to the container
        imageContainer.appendChild(image);
    })
    .catch(error => {
        console.error('Error fetching image data:', error);
    });
});
