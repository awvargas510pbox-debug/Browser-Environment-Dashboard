let words = ["apple","banana","grape","mango","peach"];

let definitions = 
{
    apple: "is a round fruit with smooth green, yellow, or red skin and firm white flesh.",
    banana: "are long curved fruit with yellow skins.",
    grape: "are small green or dark purple fruit which grow in bunches.",
    mango: "is a large sweet yellowish fruit which grows on a tree in hot countries.",
    peach: "is a soft, round, slightly furry fruit with sweet yellow flesh and pinky-orange skin."
};

let secretWord = words[Math.floor(Math.random() * words.length)];

let maxAttempts = 5;
let attemptsLeft = maxAttempts;

let highScore = 0;

document.getElementById("hint").innerHTML =
"The word starts with: " + secretWord.charAt(0).toUpperCase();

console.log("Secret Word: " + secretWord);

document.getElementById("guessInput").addEventListener("keypress", function(e){
    if(e.key === "Enter")
        {
        checkGuess();
    }
});

function checkGuess()
{

    let input = document.getElementById("guessInput").value;
    let guess = input.trim().toLowerCase();

    if(guess === "")
        {
        attemptsLeft--;
        updateMessage("Too Bad you have guess Incorrectly. You still have " + attemptsLeft + " attempts left.");
        return;
    }

    if(guess === secretWord)
        {

        let score = attemptsLeft * 10;

        if(score > highScore)
            {
            highScore = score;
            document.getElementById("highScore").innerHTML = highScore;
        }

        updateMessage("Congratulations! You have successfully guess the secret word!");
        document.body.style.backgroundColor = "lightgreen";
        disableGame();
    }

    else{
        attemptsLeft--;

        if(attemptsLeft > 0)
            {
            updateMessage("Too Bad you have guess Incorrectly. You still have " + attemptsLeft + " attempts left.");
        }
        else{
            updateMessage("Game over! The secret word was '" + secretWord + "'.");
            document.body.style.backgroundColor = "lightcoral";
            disableGame();
        }
    }

    document.getElementById("guessInput").value="";
}

function updateMessage(msg)
{
    document.getElementById("message").innerHTML = msg;
    document.getElementById("attempts").innerHTML = attemptsLeft;
}

function disableGame()
{
    document.getElementById("guessInput").disabled = true;
}

function restartGame()
{
    secretWord = words[Math.floor(Math.random() * words.length)];
    attemptsLeft = maxAttempts;

    document.body.style.backgroundColor = "lightgray";
    document.getElementById("message").innerHTML="";
    document.getElementById("attempts").innerHTML="";
    document.getElementById("guessInput").value="";
    document.getElementById("guessInput").disabled = false;
    document.getElementById("hintMessage").innerHTML="";

    document.getElementById("hint").innerHTML =
    "The word starts with: " + secretWord.charAt(0).toUpperCase();

    console.log("Secret Word: " + secretWord);
}

function showHint()
{
    let firstLetter = secretWord.charAt(0).toUpperCase();
    let definition = definitions[secretWord];

    document.getElementById("hintMessage").innerHTML =
    "Starts with: " + firstLetter + "<br>Definition: " + definition;
}