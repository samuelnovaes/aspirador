Crafty.c("Tile", {
	init: function(){
		this.addComponent("2D, DOM, TileSprite, SpriteAnimation")
		this.attr({
			w: 100,
			h: 100
		})
		this.reel("Clean", null, [[0, 0]])
		this.reel("Dirty", null, [[1, 0]])
		this.animate("Clean")
		this.css({
			border: "1px solid #eee"
		})
	},
	cell: function(col, row){
		this.col = col
		this.row = row
		this.x = col * 100
		this.y = row * 100
		return this
	},
	sujar: function(){
		this.isDirty = true
		this.animate("Dirty")
	},
	limpar: function(){
		this.isDirty = false
		this.animate("Clean")
	}
})