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

var moods = ["happy", "romantic", "sad", "optimistic", "tired"]; //predefined moods 
var ingredients = ["tomato", "celery", "potato", "lemon", "steak"]; //predefined ingredients
var userSelection = ""; //user mood selection
var userFirstName = "";
var userLastName = "";
var userEmail = "";
var newButton;
var userMoods=[];

$(document).ready(function () {
	console.log("ready!");

	//create onclick event for user submitting user information
	$("#submit-button").on("click", function (event) {
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
			$("#custom-feedback-1").css("display", "block");
			event.preventDefault();

			event.stopPropagation();
		} else if (userLastName == "") {
			$("#sign-in-last-name-input").focus();
			$("#custom-feedback-2").css("display", "block");
			event.preventDefault();
			event.stopPropagation();
		} else if (indexat < 1 || (indexdot - indexat) < 2) {
			//alert('Please enter a valid Email Id');
			$('#sign-in-email-input').focus();
			$("#custom-feedback-3").css("display", "block");
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

			database.ref('/user-data').on("value", function (snapshot) {

				console.log(snapshot.val());

				// If any errors are experienced, log them to console.
			}, function (errorObject) {
				console.log("The read failed: " + errorObject.code);
			});


		};

		//After we click on submit button, we want the user to be presented with the moods

		//Call initialize Mood Test
		console.log("Initializing buttons")
		initializeMoodTest(userEmail);

	});


	/* 
			//on.click event when user clicks "feeling lucky" button that will bring them to a random page.
			$("#random").on("click", function (event) {
				$(location).attr('href', 'test.html'); // need to create random html and fix link here!
			});
		 */

	//function to show test questions

	function initializeMoodTest(userEmail) {
		$("#nav-sign-in").text("Sign Out");
		$(".nav-link").removeClass("disabled");
		$("#sign-in-li").removeClass("active");
		$("#sign-in-li").addClass("nav-sign-out");
		$("#nav-mood").addClass("active");
		$(".headline").remove();
		$(".carousel").css("display", "block");
		$(".modal-backdrop").remove();
		$(".modal").remove();
		$(".carousel-item-1").addClass("active");
		console.log("Class added");
		$("#question-1").text("How are you feeling today?");
		newButton = $(".btn-style");
		console.log("column created");
		initMoodButtons(moods, userEmail);

	}

	//initiliazing mood buttons
	function initMoodButtons (arr, email){
		for (var i=0; i<arr.length; i++){
			newButton = newButton.append("<button type=\"button\" class=\"btn btn-outline-light btn-lg btn-style\" id=\"mood-button\" data-search=\""+arr[i]+"\">"+arr[i]+"</button>");
			console.log("new button created");
		}
	
		//get user selection from the buttons
		$(".btn").on("click", function(){
			userSelection = $(this).attr("data-search");
			console.log(email);
			console.log(userSelection);


				$("#mood-button").on("click", function () {
					userSelection = $(this).attr("data-search");
					console.log(email);

				});


				//now we need to check firebase for email in order to assign the user selection to the right user. 
				let usersRef = database.ref('user-data');
				var dataKey;
				usersRef.orderByChild('email').equalTo(email).on("value", function(snapshot) {
					console.log(snapshot.val());
					snapshot.forEach(function(data) {
					console.log("data key:", data.key);
					dataKey=data.key;
					console.log(dataKey);
					});
				}); 
				
				//assign mood value to database
				console.log("before assigning")
				usersRef.child(dataKey).update({
					mood: userSelection
				});
				console.log("after assigning");
			

				//print out to check whether it works
				database.ref('/user-data').on("value", function (snapshot) {
					console.log(snapshot.val());
					// If any errors are experienced, log them to console.
					}, function (errorObject) {
				console.log("The read failed: " + errorObject.code);
				});

			});

	}

	//when a users clicks the next slide on the carousel, then initialize the ingredients function
	$(".carousel-control-next").on("click", function(){
		initializeIngredients(userEmail);
		console.log("Calling the second question");
	});

	//Initialize Ingredients
	function initializeIngredients(userEmail){
		$("#sign-in-nav").text("Sign Out");
		$(".nav-link").removeClass("disabled");
		$("#sign-in-li").removeClass("active");
		$("#sign-in-li").addClass("nav-sign-out");
		$("#nav-mood").addClass("active");
		$(".headline").remove();
		$(".carousel").css("display", "block");
		$(".modal-backdrop").remove();
		$(".modal").remove();
		$("#question-1").remove();
		$(".btn-style").empty();
		$(".carousel-item-2").addClass("active");
		console.log("Class added");
		console.log("Inside the initializeIngredients");
		$("#question-2").text("What do you have in your fridge?");
		newButton = $(".btn-food");
		console.log("column created");
		initIngredientButtons(ingredients, userEmail);
		
	}

	function initIngredientButtons(arr, userEmail) {

		for (var i=0; i<arr.length; i++){
			newButton = newButton.append("<button type=\"button\" class=\"btn btn-outline-light btn-lg btn-style\" id=\"food-button\" data-search=\""+arr[i]+"\" data-toggle=\"button\" aria-pressed=\"false\">"+arr[i]+"</button>");
			console.log("new button created");
		}

		//grab food ingredient
		$("#food-button").on("click", function() {

		});
	}
});


//<button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
//Single toggle
//</button>




