// Global Variables
const deckCards = ["1.png", "1.png", "2.png", "2.png", "3.png", "3.png", "4.png", "4.png", "5.png", "5.png"];
const deck = document.querySelector(".deck");
const modal = document.getElementById("modal");
const reset = document.querySelector(".reset-btn");
const playAgain = document.querySelector(".play-again-btn");
const movesCount = document.querySelector(".moves-counter");
const star = document.getElementById("star-rating").querySelectorAll(".star");
const timeCounter = document.querySelector(".timer");

let opened = [];
let matched = [];
let moves = 0;
let starCount = 3;
let time;
let minutes = 0;
let seconds = 0;
let timeStart = false;


// Shuffle array using Fisher-Yates algorithm
function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }
  return array;
}

// Initialize the game board with shuffled cards
function startGame() {
	const shuffledDeck = shuffle(deckCards); 
	for (let i = 0; i < shuffledDeck.length; i++) {
		const liTag = document.createElement('LI');
		liTag.classList.add('card');
		const addImage = document.createElement("IMG");
		liTag.appendChild(addImage);
		addImage.setAttribute("src", "img/" + shuffledDeck[i] + "?raw=true");
		addImage.setAttribute("alt", "image of vault boy from fallout");
		deck.appendChild(liTag);
	}
}

startGame();

// Clear the deck for restart
function removeCard() {
	while (deck.hasChildNodes()) {
		deck.removeChild(deck.firstChild);
	}
}

// Timer function
function timer() {
	time = setInterval(function() {
		seconds++;
		if (seconds === 60) {
			minutes++;
			seconds = 0;
		}
		timeCounter.innerHTML = "<i class='fa fa-hourglass-start'></i>" + " Timer: " + minutes + " Mins " + seconds + " Secs" ;
	}, 1000);
}

// Stop the timer
function stopTime() {
	clearInterval(time);
}

// Reset all game variables and board
function resetEverything() {
	stopTime();
	timeStart = false;
	seconds = 0;
	minutes = 0;
	timeCounter.innerHTML = "<i class='fa fa-hourglass-start'></i>" + " Timer: 00:00";
	star[1].firstElementChild.classList.add("fa-star");
	star[2].firstElementChild.classList.add("fa-star");
	starCount = 3;
	moves = 0;
	movesCount.innerHTML = 0;
	matched = [];
	opened = [];
	removeCard();
	startGame();
}

// Increment moves counter
function movesCounter() {
	movesCount.innerHTML ++;
	moves ++;
}

// Update star rating based on moves
function starRating() {
	if (moves === 14) {
		star[2].firstElementChild.classList.remove("fa-star");
		starCount--;
	}
	if (moves === 18) {
		star[1].firstElementChild.classList.remove("fa-star");
		starCount--;
	}
}

// Compare two opened cards
function compareTwo() {
	if (opened.length === 2) {
  		document.body.style.pointerEvents = "none";
  	}
	if (opened.length === 2 && opened[0].src === opened[1].src) {
		match();
	} else if (opened.length === 2 && opened[0].src != opened[1].src) {
		noMatch();
	}
}// Handle matching cards
function match() {
	setTimeout(function() {
		opened[0].parentElement.classList.add("match");
		opened[1].parentElement.classList.add("match");
		matched.push(...opened);
		document.body.style.pointerEvents = "auto";
		winGame();
		opened = [];
	}, 600);
	movesCounter();
	starRating();
}

// Handle non-matching cards
function noMatch() {
	setTimeout(function() {
		opened[0].parentElement.classList.remove("flip");
		opened[1].parentElement.classList.remove("flip");
		document.body.style.pointerEvents = "auto";
		opened = [];
	}, 700);
	movesCounter();
	starRating();
}

// Add game stats to modal
function AddStats() {
	const stats = document.querySelector(".modal-content");
	for (let i = 1; i <= 3; i++) {
		const statsElement = document.createElement("p");
		statsElement.classList.add("stats");
		stats.appendChild(statsElement);
	}
	let p = stats.querySelectorAll("p.stats");
	p[0].innerHTML = "Tempo: " + minutes + " Minutos e " + seconds + " Segundos";
	p[1].innerHTML = "Movimentos: " + moves;
	p[2].innerHTML = "Sua classificação por estrelas é: " + starCount + " de 3";
}

// Display modal with game results
function displayModal() {
	const modalClose = document.getElementsByClassName("close")[0];
	modal.style.display= "block";

	modalClose.onclick = function() {
		modal.style.display = "none";
	};
	
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	};
}

// Check if all cards are matched and game is won
function winGame() {
	if (matched.length === 10) {
		stopTime();
		AddStats();
		displayModal();
	}
}

// Card click event listener
deck.addEventListener("click", function(evt) {
	if (evt.target.nodeName === "LI") {
		if (timeStart === false) {
			timeStart = true; 
			timer();
		}
		flipCard();
	}

	function flipCard() {
		evt.target.classList.add("flip");
		addToOpened();
	}
	 
	function addToOpened() {
		if (opened.length === 0 || opened.length === 1) {
			opened.push(evt.target.firstElementChild);
		}
		compareTwo();
	}
});
// Reset button listener
reset.addEventListener('click', resetEverything);

// Play again button listener
playAgain.addEventListener('click',function() {
	modal.style.display = "none";
	resetEverything();
});