memoryGame = {};

memoryGame.dealCards = function() {
	var table = document.getElementById("game");
	//creating game table and function for distributing cards

	for (var i = 0; i < 4; i++) {
		var rows = document.createElement("div");
		rows.className ="row";
		//creating the rows that will hold cards
			for (var j = 0; j < 3; j++) {
				var card = document.createElement("div");
				card.className ="col-xs-3";
				card.id =(4*j+i);
				card.style.backgroundImage="url('Memory_game_images/texture.jpg')";
				rows.appendChild(card);
				//creating the cards and assigning them id's and aligning them with bootstrap. also adding them to the rows
			}
			table.appendChild(rows);
			//adding the rows to the game table
	}
};

memoryGame.start = function() {
	var table = document.getElementById("game");
	while (table.firstChild) {
		table.removeChild(table.firstChild);
		//removing the cards previous game if existing
	}
	memoryGame.dealCards()
	//dealing new cards for a new game
}