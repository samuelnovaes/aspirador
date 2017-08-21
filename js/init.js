Crafty.init(500, 500, document.getElementById("simulador"))
Crafty.background("#eee")

assets = {
    sprites: {
        "img/tile.jpg": {
            tile: 100,
            tileh: 100,
            map: {
                TileSprite: [0, 0]
            }
        },
        "img/aspirador.png": {
            tile: 26,
            tileh: 50,
            map: {
                AspiradorSprite: [0, 0]
            }
        },
        "img/sujador.png": {
        	tile: 60,
        	tileh: 35,
        	map: {
        		SujadorSprite: [0, 0]
        	}
        }
    }
}

Crafty.scene("Loading", function(){
	Crafty.e("HTML")
		.attr({
			x: 0,
			y: 0,
			w: 500
		})
		.append(`
			<div style="color: #000; font-size: 16pt; font-family: Arial; padding: 50px; width: 100%">
				Carregando...<br>
				Powered by Samuel and Camila
			</div>
		`)

	Crafty.load(assets, function(){
		Crafty.scene("Main")
	})
})

Crafty.scene("Main", function(){
	tiles = [
		Crafty.e("Tile").cell(0, 0),
		Crafty.e("Tile").cell(1, 0),
		Crafty.e("Tile").cell(2, 0),
		Crafty.e("Tile").cell(3, 0),
		Crafty.e("Tile").cell(0, 1),
		Crafty.e("Tile").cell(1, 1),
		Crafty.e("Tile").cell(2, 1),
		Crafty.e("Tile").cell(3, 1),
		Crafty.e("Tile").cell(0, 2),
		Crafty.e("Tile").cell(1, 2),
		Crafty.e("Tile").cell(2, 2),
		Crafty.e("Tile").cell(3, 2),
		Crafty.e("Tile").cell(0, 3),
		Crafty.e("Tile").cell(1, 3),
		Crafty.e("Tile").cell(2, 3),
		Crafty.e("Tile").cell(3, 3)
	]
	bateria = Crafty.e("Bateria")
	lixo = Crafty.e("Lixo")
	aspirador = Crafty.e("Aspirador").setBateria(bateria).setLixo(lixo).setTiles(tiles)
	sujador = Crafty.e("Sujador")
})

Crafty.scene("Loading")