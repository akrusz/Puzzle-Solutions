
// INPUT:  board   -> [RxC] multidimensional array with each element being either 
//                    "null" (empty space), 
//                    "P"    (your bot)
//                    "C"    (opponent bot),
//                    "XP"   (visited space by your bot),
//                    "XC"   (visited space by opponent bot) 
//         bot_loc -> [r,c] where r=row and c=col of your bot on board
//         opp_loc -> [r,c] where r=row and c=col of opponent on board    
// OUTPUT: N, E, S, W which signifies which direction to move 

(function bot(board, bot_loc, opp_loc) {
	var directions = ['N','E','S','W'];
	var max = 10000;

	var count = Math.floor(Math.random() * 4);
	var direction = directions[count];
	var destination = move(bot_loc, direction);
	for(var i = 0; i < 4 && !isEmpty(destination); i++){
		direction = directions[(count + i) % 4];
		destination = move(bot_loc, direction);
	}
	return direction;


	function move(coords, direction){
		switch(direction){
			case 'N':
			return [coords[0]-1, coords[1]];
			case 'E':
			return [coords[0], coords[1]+1];
			case 'S':
			return [coords[0]+1, coords[1]];
			case 'W':
			return [coords[0], coords[1]-1];
		}
	}

	function isEmpty(coords){
		return isOnBoard(coords) && board[coords[0]][coords[1]] === 'null';
	}

	function isOnBoard(coords){
		if(coords[0] < 0 || coords[0] > 15){
			return false;
		}
		if(coords[1] < 0 || coords[1] > 15){
			return false;
		}
		return true;
	}

})(readline());

