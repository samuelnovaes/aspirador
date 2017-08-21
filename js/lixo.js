Crafty.c("Lixo", {
	init: function(){
		this.addComponent("2D")
		var barra = Crafty.e("2D, Canvas, Color")
		.attr({
			w: 100,
			h: 30,
			x: 250,
			y: 435
		})
		.color("#004040")

		this.progress = Crafty.e("2D, Canvas, Color, Tween")
		.attr({
			w: 100,
			h: 30,
			x: 250,
			y: 435
		})
		.color("#008080")

		var texto = Crafty.e("2D, Canvas, Text")
		.attr({
			x: 260,
			y: 445
		})
		.text("Lixo")
		.textColor("#FFFFFF")

		this.attach(barra, this.progress, texto)

		this.set(0)
	},
	set: function(val){
		this.progress.w = val
		return this
	},
	esvaziar: function(){
		this.progress.tween({
			w: 0
		}, 3000)
		return this
	}
})