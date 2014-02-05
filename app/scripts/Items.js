var Items = function(startItemX, startItemY) {
	var	itemDrops = 5,
		items = [];

	for (var i = 0; i < itemDrops; i++) {
		var item = new Object();
		item.width = 16;
		item.height = 20;

		item['image'] = new Image();
		item.image.src = './images/acorn.png';
		item['x'] = startItemX;
		item['y'] = startItemY;
		item["speed"] = [1, 2, 1];
		items.push(item);

	}

	for (var i=0; i<itemDrops; i++) {
		ctx.drawImage(items[i].image, items[i].x, items[i].y);
	}

};