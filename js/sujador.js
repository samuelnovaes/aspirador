Crafty.c("Sujador", {
	init: function(){
		var parent = this
		this.addComponent("2D, DOM, SujadorSprite, Tween, SpriteAnimation, Collision")
		this.attr({
			w: 60,
			h: 35,
			x: 20,
			y: 34
		})
		this.reel("rotating", 500, [[0,0],[1,0],[2,0],[3,0]])
		this.animate("rotating", -1)
		this.bind("TweenEnd", function(){
			setTimeout(function(){
				parent.stopIn.sujar()
				moveRandom()
			}, 3000)
		})
		this.onHit("Tile", function(e){
			if(e[0].obj.col == this.col && e[0].obj.row == this.row){
				this.stopIn = e[0].obj
			}
		})
		var parent = this
		moveRandom()
		function moveRandom(){
			var col = Math.round(Math.random() * 3)
			var row = Math.round(Math.random() * 3)
			if((parent.col != col && parent.row != row) && (aspirador.col != col && aspirador.row != row)){
				parent.goTo(col, row)
			}
			else{
				moveRandom()
			}
		}
	},
	goTo: function(col, row){
		this.col = col
		this.row = row
		var currentX = this.x
		var currentY = this.y
		var nextX = col * 100 + 20
		var nextY = row * 100 + 34
		var dx = Math.abs(nextX - currentX)
		var dy = Math.abs(nextY - currentY)
		var d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
		this.tween({
			x: nextX,
			y: nextY
		}, d)
		return this
	}
})