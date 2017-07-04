memoryGame = {};

memoryGame.imagesEasy = ["Memory_game_images/1.jpg", "Memory_game_images/1.jpg",  
					"Memory_game_images/2.jpg", "Memory_game_images/2.jpg", 
					"Memory_game_images/3.jpg", "Memory_game_images/3.jpg", 
					"Memory_game_images/4.jpg", "Memory_game_images/4.jpg", 
					"Memory_game_images/5.jpg","Memory_game_images/5.jpg", 
					"Memory_game_images/6.jpg","Memory_game_images/6.jpg"];
//image array containing 2 of six different images

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
var choice1;
var choice2;
memoryGame.reveal = function(event) {
	var choice = event.target;
	var choiceId = choice.id;
	choice.style.backgroundImage = "url("+memoryGame.imagesEasy[choiceId]+")";
	choice.style.backgroundOrigin = "content-box";
	choice.style.backgroundPosition = "center";
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

