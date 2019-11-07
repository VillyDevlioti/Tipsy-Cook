$( document ).ready(function() {
  console.log( "ready!" );
  console.log("this variable is located on another script",a);

  //add firebase config to js

  var firebaseConfig = {
    apiKey: "AIzaSyAYjn5bhv-pJ30tAvcuvax55A8tf-zM5zA",
    authDomain: "tipsy-cook.firebaseapp.com",
    databaseURL: "https://tipsy-cook.firebaseio.com",
    projectId: "tipsy-cook",
    storageBucket: "tipsy-cook.appspot.com",
    messagingSenderId: "1032674956518",
    appId: "1:1032674956518:web:8ed72d729a683d8eb95727",
    measurementId: "G-936JM5P6LQ"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  //create onclick event for user submitting user information
  $("#submit-button").on("click", function(event) {
    event.preventDefault();
    // Get the input values
    var userFirstName = $("#sign-in-first-name-input").val().trim();
    var userLastName = $("#sign-in-last-name-input").val().trim();
    var userEmail = $("#sign-in-email-input").val().trim();
    var indexat = userEmail.indexOf("@"); //Index of "@" in the email field
    var indexdot = userEmail.indexOf("."); //Index of "." in the email field

      
    //Validation of form. The function will display message if input field is blank or incorrect
    if (userFirstName == "") {
      $("#sign-in-first-name-input").focus();
      $("#custom-feedback-1").css("display","block");
      event.preventDefault();
      event.stopPropagation();
    } else if (userLastName == "") {
      $("#sign-in-last-name-input").focus();
      $("#custom-feedback-2").css("display","block");
      event.preventDefault();
      event.stopPropagation();
    } else if (indexat < 1 || (indexdot-indexat) < 2) {
      //alert('Please enter a valid Email Id');
      $('#sign-in-email-input').focus();
      $("#custom-feedback-3").css("display","block");
      event.preventDefault();
      event.stopPropagation();
    } else {
      // Log the user information
      console.log(userFirstName);
      console.log(userLastName);
      console.log(userEmail);

      // Save the new user info in Firebase.
      database.ref('/user-data').push({
        firstName: userFirstName,
        lastName: userLastName,
        email: userEmail,
      });

      database.ref('/user-data').on("value", function(snapshot) {
      
        console.log(snapshot.val());
            
        // If any errors are experienced, log them to console.
      }, function(errorObject) {
          console.log("The read failed: " + errorObject.code);
        });
          
      $(location).attr('href', 'test.html');
        
    };

  });  
  
  //on.click event when user clicks "feeling lucky" button that will bring them to a random page.
  $("#random").on("click", function(event) {
    $(location).attr('href', 'test.html'); // need to create random html and fix link here!
  });
  
});
    
    


