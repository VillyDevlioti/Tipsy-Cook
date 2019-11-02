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

    $("#user-submit").on("click", function(event) {
        event.preventDefault();
        // Get the input values
        var userFirstName = $("#first-name").val().trim();
        var userLastName = $("#last-name").val().trim();
        var userEmail = $("#email").val().trim();
        
      
        // Log the Bidder and Price (Even if not the highest)
        console.log(userFirstName);
        console.log(userLastName);
        console.log(email);
      
        
          // Save the new user info in Firebase.
          database.ref().set({
            firstName: userFirstName,
            lastName: userLastName,
            email: userEmail,
            question1: [],
            question2: [],
            question3: [],
          });

          database.ref().on("value", function(snapshot) {

              firstName = snapshot.val().userFirstName;
            });
          
            console.log(firstName);
          
            // If any errors are experienced, log them to console.
          }, function(errorObject) {
            console.log("The read failed: " + errorObject.code);
          });
   

    //create global variables for question arrays

 
            //initiate search filter quiz to narrow down search options

    //show the first question on the page: $(firstquestion).css("display","block"); 
        //go through a for loop for the different answer options array and append buttons to the page for the user to choose from;
        //on.("click") of answer choice buttons, push user's selected answers to an originally empty array in user's JSON object in firebase DB; 
        //"on.("click") of 'next question button, show the second question on the page
        
    //(repeat for all quiz answers);

    //once user has gone through all questions, create on.click event for submit button
        //$(submit).on("click") create variables for query search words based on user's saved JSON object answers
        //API call, create query URL variable, and search by user's selected choices;
        //append search results to results div with image / recipe title in a flex display
        //results div options => links open to new tab of recipe.html pages with individual recipe's info
        
        //grocerylist.html page to append ingregient lists based on




});
    
    


