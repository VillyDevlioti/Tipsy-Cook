//add firebase config to js

//create global variables for question arrays

// When page is ready have 'welcome' modal pop up 
//If user clicks 'yes I wanna sign up' then $(#modaldiv).css("display","block") with a modal of sign up form
    //else "feeling lucky"
        //modal pops up with API calls from each DB with random search results that appear on Div

//create onclick event for user submitting user information
    //$('submit').on("click", function {});
        //push user data $(submitform).val().trim() to firebase db
        //close modal
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
    
    


