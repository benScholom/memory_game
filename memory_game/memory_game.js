memoryGame = {};
//the one namespace to rule them all

memoryGame.imagesEasy = ["Memory_game_images/1.jpg", "Memory_game_images/1.jpg",  
					"Memory_game_images/2.jpg", "Memory_game_images/2.jpg", 
					"Memory_game_images/3.jpg", "Memory_game_images/3.jpg", 
					"Memory_game_images/4.jpg", "Memory_game_images/4.jpg", 
					"Memory_game_images/5.jpg","Memory_game_images/5.jpg", 
					"Memory_game_images/6.jpg","Memory_game_images/6.jpg"];
//image array containing 2 of six different images

memoryGame.imagesMedium = ["Memory_game_images/1.jpg", "Memory_game_images/1.jpg",  
					"Memory_game_images/2.jpg", "Memory_game_images/2.jpg", 
					"Memory_game_images/3.jpg", "Memory_game_images/3.jpg", 
					"Memory_game_images/4.jpg", "Memory_game_images/4.jpg", 
					"Memory_game_images/5.jpg","Memory_game_images/5.jpg",
					"Memory_game_images/6.jpg","Memory_game_images/6.jpg",
					"Memory_game_images/7.jpg","Memory_game_images/7.jpg",
					"Memory_game_images/8.jpg","Memory_game_images/8.jpg", 
					"Memory_game_images/9.jpg","Memory_game_images/9.jpg"];
//image array containing 2 of nine different images

memoryGame.imagesHard = ["Memory_game_images/1.jpg", "Memory_game_images/1.jpg",  
					"Memory_game_images/2.jpg", "Memory_game_images/2.jpg", 
					"Memory_game_images/3.jpg", "Memory_game_images/3.jpg", 
					"Memory_game_images/4.jpg", "Memory_game_images/4.jpg", 
					"Memory_game_images/5.jpg","Memory_game_images/5.jpg",
					"Memory_game_images/6.jpg","Memory_game_images/6.jpg", 
					"Memory_game_images/7.jpg","Memory_game_images/7.jpg",
					"Memory_game_images/8.jpg","Memory_game_images/8.jpg",
					"Memory_game_images/9.jpg","Memory_game_images/9.jpg",
					"Memory_game_images/10.jpg","Memory_game_images/10.jpg",
					"Memory_game_images/11.jpg","Memory_game_images/11.jpg",
					"Memory_game_images/12.jpg","Memory_game_images/12.jpg"];
//image array containing 2 of twelve different images

memoryGame.random = function(array) {
	var j, x, i;
	for(i = array.length; i; i--) {
		j = Math.floor(Math.random() * i);
		x = array[i - 1];
		array[i - 1] = array[j];
		array[j] = x;
	}
	return array;
};
//algorithm for rancomizing an array, to be used with the image array

memoryGame.dealCards = function() {
	var table = document.getElementById("game");
	//creating game table and function for distributing cards

	for (var i = 0; i < 4; i++) {
		var rows = document.createElement("div");
		rows.className ="row";
		//creating the rows that will hold cards
			for (var j = 0; j < 3; j++) {
				var card = document.createElement("div");
				card.className ="col-xs-4";
				card.id =(4*j+i);
				card.style.backgroundImage="url('Memory_game_images/texture.jpg')";
				rows.appendChild(card);
				card.addEventListener("click", memoryGame.reveal);
				//creating the cards and assigning them id's and aligning them with bootstrap. also adding them to the rows
				// assigning event listener to trigger matching process
			}
			table.appendChild(rows);
			//adding the rows to the game table
	}
};



memoryGame.clicked = 0;
memoryGame.correct = 0;
memoryGame.wrong = 0;
memoryGame.stop = false;
var choice1;
var choice2;
//seting game logic variables include card click tracker, choice variables, pause variable and score variables
memoryGame.reveal = function(event) {
	if(memoryGame.stop == false) {	
	var choice = event.target;
	var choiceId = choice.id;
	choice.style.backgroundImage = "url("+memoryGame.imagesEasy[choiceId]+")";
	choice.style.backgroundOrigin = "content-box";
	choice.style.backgroundRepeat = "no-repeat";
	//event listener linked to clicking a card that changes background image to one of the animal pictures
	if (memoryGame.clicked == 0) {
		choice1 = choice;
		memoryGame.clicked = 1;
	}
	//if no card has been clicked (is face up), this the card chosen is choice 1
	else {
		choice2 = choice;
		if (choice1.style.backgroundImage == choice2.style.backgroundImage) {
			memoryGame.correct++;
			memoryGame.clicked = 0;
		}
		// if there is one face up card, this click is the second card. the images displayed are compared
		// if the images are the same, we have a match and the cards will stay face up and the tracker goes to zero
		// player gets a point for the match
		else {
			memoryGame.stop = true;
			//pause so you cant click cards while the 2 you already selected are displayed
			setTimeout(function() {
			memoryGame.clicked = 0;
			memoryGame.wrong++;
			choice1.style.backgroundImage = "url('Memory_game_images/texture.jpg')";
			choice2.style.backgroundImage = "url('Memory_game_images/texture.jpg')";
			memoryGame.stop = false;
			//restart the game
		}, 1250);
		// if the images are not the same, the cards will remain face up for a short time before going back to background
		// player gets a failure point. this is not a good thing.
		// the click tracker resets
		}
	}
}
};


memoryGame.startEasy = function() {
	var table = document.getElementById("game");
	while (table.firstChild) {
		table.removeChild(table.firstChild);
		//removing the cards previous game if existing
	}
	memoryGame.dealCards();
	//dealing new cards for a new game
	memoryGame.imagesEasy = memoryGame.random(memoryGame.imagesEasy);
	//randomizing images of cards
	
}

