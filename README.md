# Password_Generator

# User Story
* AS AN employee with access to sensitive data
* I WANT to randomly generate a password that meets certain criteria
* SO THAT I can create a strong password that provides greater security

# How it Works
* WHEN I click the button to generate a password
* THEN I am presented with a series of prompts for password criteria
* WHEN prompted for password criteria
* THEN I select which criteria to include in the password
* WHEN prompted for the length of the password
* THEN I choose a length between 8 characters and 128 characters
* WHEN prompted for character types to include in the password
* THEN I choose lowercase, uppercase, numeric, and/or special characters
* WHEN I answer each prompt
* THEN my input should be validated and at least one character type should be selected
* WHEN all prompts are answered
* THEN a password is generated that matches the selected criteria
* WHEN the password is generated
* THEN the password is either displayed in an alert or written to the page

# What I Did
* First I created arrays for all of the options for password characters.
* I then started putting if/else and do/when statements for the answer to the prompts introduced to the users.
* I made the prompts and confirms, with the length being an user input box to determine the length.
* I then made the for loop for the generate password function. It should incorparte the length necessary for the password.
* I used concat so that all of the arrays selected would be added to the global var "confirmed".
* The do/while loops had to be added to make sure that some value had to be chosen, and so that it would only accept lengths within the parameters.
* The whole program is responsive to the user letting them chose from all of the different choices and generate a password 8-128 characaters.