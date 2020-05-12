var generateBtn = document.querySelector("#generate");
//Arrays hold possible answers for prompts below.
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var characters = ["!", "@", "#", "$", "%", "^", "&", "*"]
//"confirmed" variable refers to all used arrays selected in confirms. '[]' insures the confirmed variables are added to an array.
//"length" variable refers to the length of the password decided in the prompt.
var confirmed = [];
var length;

//confirms provide yes or no questions, prompts provide an answer bar. Contains function for establishing password info.
function writePassword() {
    //"do" and "while" serves to run the "if" confirms, while certain conditons defined after "while" are met.
    //"do" and "while" are essentially another form of "if" and "else".
    //Study do/while loops at https://www.w3schools.com/jsref/jsref_dowhile.asp
    do {
        var useLowerCase = confirm("Do you want your password to include lower case letters?")
        var useUpperCase = confirm("Do you want your password to include upper case letters?")
        var useNumbers = confirm("Do you want your password to include numbers?")
        var useCharacters = confirm("Do you want your password to include special characters?")
//Below lines insures users must use at least one type of written characters of those provided by the arrays.
    if (useLowerCase == false && useUpperCase == false && useNumbers == false && useCharacters == false) {
        alert("You must choose some type of input for your password.")
    }
    }
    while (useLowerCase == false && useUpperCase == false && useNumbers == false && useCharacters == false)
//Above "while" loop tells the prompts to appear if none of the options have been selected "yet", triggering the confirms.
//See See 03-JavaScript Activity 32 for while loops.
    do {
        length = prompt("How long do you want your password to be? *Must be between 8-128 characters.*")
    }
//line below confirms that the input for length must be between 8 and 128.
    while (length < 8 || length > 128 || isNaN(length));
//"if" and "else" provide conditions. See 03-JavaScript Activity 35 index.html
    if (useLowerCase == true) {
//"concat" adds the arrays into the final product (the generated password).
        confirmed = confirmed.concat(lowerCase);
    } else (useLowerCase == false);
//if the different types are confirmed they are dded to the total list of types used in the password.
//if they are not confirmed then nothing happens and they are not added.
    if (useUpperCase == true) {

        confirmed = confirmed.concat(upperCase);
    } else (useUpperCase == false);

    if (useNumbers == true) {

        confirmed = confirmed.concat(numbers);
    } else (useNumbers == false);

    if (useCharacters == true) {

        confirmed = confirmed.concat(characters);
    } else (useCharacters == false);


//lines below actually make the password appear in index.html.
    var password = generatePassword()

    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
//Function takes info from writePassword and uses it to randomly generate a password.
function generatePassword() {

    var password = "";
    for (var index = 0; index < parseInt(length); index++) {
//for loop used for randomization of password using the confirmed length and character type from the prompt and confirms.
//See 03-JavaScript Activity 21
        var character = Math.floor(Math.random() * confirmed.length);
        password += confirmed[character];

    }
//returns the finished password
    return password;
}
// Adds an event listener to recognize the clicking of the generate password button in index.html.
generateBtn.addEventListener("click", writePassword);