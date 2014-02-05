var Player = function(startX, startY) {
	var x = startX,
		y = startY,
		id,
		moveAmount = 2;
	
	playerImage = new Image();
	playerImage.src = './images/player.png';

	var mySprite = {
		width: 32,
		height: 32,
		image: playerImage
	};

	var getX = function() {
		return x;
	};

	var getY = function() {
		return y;
	};

	var setX = function(newX) {
		x = newX;
	};

	var setY = function(newY) {
		y = newY;
	};

	var update = function(keys) {
		var prevX = x,
			prevY = y;

		if (keys.up) {
			y -= moveAmount;
		} else if (keys.down) {
			y += moveAmount;
		};

		if (keys.left) {
			x -= moveAmount;
		} else if (keys.right) {
			x += moveAmount;
		};

		return (prevX != x || prevY != y) ? true : false;
	};

	var draw = function(ctx) {
		ctx.drawImage(mySprite.image, x,y); 
	};

	return {
		getX: getX,
		getY: getY,
		setX: setX,
		setY: setY,
		update: update,
		draw: draw
	}
};