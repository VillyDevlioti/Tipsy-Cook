var moods =["happy", "romantic", "sad"];
var ingredients = ["tomato", "celery", "potato"];

$( document ).ready(function() {
    console.log('it works!');

    $(".question").text("How are you feeling today?");
    var newColumn = $(".button-row").append("<div class=\"col-md-3\">");
    console.log("column created");
    
    for (var i=0; i<moods.length; i++){
        var newButton = newColumn.append("<button type=\"button\" class=\"btn btn-light\">"+moods[i]+"</button>");
        console.log("new button created");
    }
    

    //create global variables for question arrays

    ///create a child in each user with their choices and ingredients and moods 

 
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