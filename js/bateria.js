Crafty.c("Bateria", {
	init: function(){
		this.addComponent("2D")
		var barra = Crafty.e("2D, Canvas, Color")
		.attr({
			w: 100,
			h: 30,
			x: 50,
			y: 435
		})
		.color("#004040")

		this.progress = Crafty.e("2D, Canvas, Color, Tween")
		.attr({
			w: 100,
			h: 30,
			x: 50,
			y: 435
		})
		.color("#008080")

		var texto = Crafty.e("2D, Canvas, Text")
		.attr({
			x: 60,
			y: 445
		})
		.text("Bateria")
		.textColor("#FFFFFF")

		this.attach(barra, this.progress, texto)

		this.set(100)
	},
	set: function(val){
		this.progress.w = val
		return this
	},
	recarregar: function(){
		this.progress.tween({
			w: 100
		}, 3000)
		return this
	}
})