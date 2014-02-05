var Items = function(startItemX, startItemY) {
	var x = startItemX,
		y = startItemY,
		itemDrops = 5,
		items = [];

	for (var i = 0; i < itemDrops; i++) {
		var item = new Object();
		item.width = 16;
		item.height = 20;

		item['image'] = new Image();
		item.image.src = './images/acorn.png';
		item['x'] = Math.random() * 600;
		item['y'] = Math.random() * 1000;
		item["speed"] = [1, 2, 1];
		items.push(item);
	}

	var drawItem = function(ctx) {
		for (var i=0; i<itemDrops; i++) {
			ctx.drawImage(items[i].image, items[i].x, items[i].y);
		}
	};

	return {
		drawItem: drawItem
	}
};

exports.Items = Items;