$( document ).ready(function() {
    console.log( "ready!" );

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
        //$('submit').on("click", function {});
            //push user data $(form-data).val().trim() to firebase db

    $("#submit-button").on("click", function(event) {
        event.preventDefault();
        // Get the input values
        var userFirstName = $("#sign-in-name-input").val().trim();
        var userLastName = $("#sign-in-last-name-input").val().trim();
        var userEmail = $("#sign-in-email-input").val().trim();
        
      
        // Log the Bidder and Price (Even if not the highest)
        console.log(userFirstName);
        console.log(userLastName);
        console.log(userEmail);

        // Save the new user info in Firebase.
        database.ref('/user-data').push({
            firstName: userFirstName,
            lastName: userLastName,
            email: userEmail,
            question1: [],
            question2: [],
            question3: [],
          });

          database.ref('/user-data').on("value", function(snapshot) {
          
            console.log(snapshot.val());
            
          
            // If any errors are experienced, log them to console.
          }, function(errorObject) {
            console.log("The read failed: " + errorObject.code);
          });
      
    });
          

});
    
    


