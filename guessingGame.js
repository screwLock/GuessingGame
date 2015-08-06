/*****************************************************
Javascript code for the Guessing Game


******************************************************/

//variables
var randomNumber =  (Math.floor(Math.random()*50))+1;
var guess = 0;

//grab and store the HTML elements
var input = document.querySelector("#input");
var output = document.querySelector("#output");
var button = document.querySelector('button');
var guessCount = document.querySelector('#guessCount');

//keep track of guesses
var counter = 0;

//max guesses the player can make
var guessesLeft = 10;

//determine if the game was won (0==not yet, 1==won)
var gameWon = 0;

//sounds
var winSound = new Audio('win.mp3');
var lossSound = new Audio('loss.mp3');

//variables for the timer
var timeLeft=15; 
var countdown = document.querySelector("timer");
setInterval(function(){
	if(timeLeft === 0)
	{
		timer.innerHTML = "Out of Time!!!"
		stopPlay();
		lossSound.play();
		return;
	}
	timer.innerHTML = timeLeft--;
	}
	, 1000); //1000ms = 1s

//change mouse cursor image to finger pointing
button.style.cursor = "pointer";

//add the key and click event handlers
button.addEventListener("click", clickHandler, false);
window.addEventListener("keydown", keyDownHandler,false);

startGame();

//function to create some animation when user first enters page
function startGame()
{
	return 0;
}


//function for handling the mouse press
function clickHandler()
{
	playGame();
}

//function for handling "enter" key
function keyDownHandler(event)
{
	if(event.keyCode == 13)
	{
		playGame();
	}
}


//function contains the game play flow
function playGame()
{
	//check to see if the player has guesses left
	if(gameWon===1)
	{
		output.innerHTML = "YOU WON!!!.  <br>Stop Guessing!!"
		stopPlay();
		return;
	}
	
	
	if(guessesLeft==0)
	{
		lossSound.play();
		output.innerHTML = "GAME OVER! You are out of guesses.";
		stopPlay();
		return;
		
	}
	//get the value from the textfield
	guess = input.value;
	
	//check to see if textfield is empty.  if it is, return from the function.
	if(isNaN(guess)||(guess===''))
	{
		output.innerHTML = "You need to enter a value!!";
		return -1;
	}
	
	//turn the string input into an int
	guess = parseInt(input.value);
	
	//and report the guesses the client has attempted.
	guessCount.innerHTML = "You've guessed " + (++counter) + " times";
	
	//compare the guess to the random number, and report the amount of attempts remaining
	if(guess>randomNumber)
	{
		guessesLeft--;
		output.innerHTML = "Guess is too high! " + "Guesses Remaining: " + guessesLeft;
	}
	
	if(guess<randomNumber)
	{
		guessesLeft--;
		output.innerHTML = "Guess is too low! " + "Guesses Remaining: " + guessesLeft;
	}
	if(guess === randomNumber)
	{
		winSound.play();
		output.innerHTML = randomNumber + " : Awesome!  You got the right answer!" ;
		gameWon = 1;
		stopPlay();
		
	}
	
}

//function to disable the button and event listeners when the game is over
function stopPlay()
{
	//disable the guess button
	button.removeEventListener("click", clickHandler, false);
	button.disabled = true;
	button.style.
	
	//disable the enter keyCode
	window.removeEventListener("keydown", keyDownHandler, false);
	
	//disable the input field
	input.disabled = true;
}