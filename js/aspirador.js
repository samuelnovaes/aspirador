Crafty.c("Aspirador", {
	caminho: [
		[3,3],[2,3],[1,3],[0,3],
		[0,2],[1,2],[2,2],[3,2],
		[3,1],[2,1],[1,1],[0,1],
		[0,0],[1,0],[2,0],[3,0],
		[3,1],[2,1],[1,1],[0,1],
		[0,2],[1,2],[2,2],[3,2]
	],
	index: 0,
	init: function(){
		this.addComponent("2D, DOM, AspiradorSprite, Tween, Collision")
		this.attr({
			w: 26,
			h: 50,
			x: 437,
			y: 325
		})
		this.bind("TweenEnd", function(e){
			var parent = this
			switch(e.para){
			case "avancar":
				if(this.bateria.progress.w > 10 && this.lixo.progress.w < 100 && !this.dormindo){
					this.bateria.progress.w -= 100/22
					if(this.stopIn.isDirty){
						setTimeout(function(){
							if(!parent.dormindo){
								parent.stopIn.limpar()
								parent.lixo.progress.w += 100/6
								parent.avancar()
							}
						}, 2000)
					}
					else{
						setTimeout(function(){
							if(!parent.dormindo){
								parent.avancar()
							}
						}, 1000/4)
					}
				}
				else if(this.bateria.progress.w <= 10 && !this.dormindo){
					this.goTo(4, 3, "recarregar")
				}
				else if(this.lixo.progress.w >= 100 && !this.dormindo){
					this.goTo(4, 3, "removerLixo")
				}
				break

			case "recarregar":
				parent.bateria.recarregar()
				setTimeout(function(){
					if(!parent.dormindo && !parent.checarLimpeza()){
						parent.avancar()
					}
				}, 3000)
				break

			case "removerLixo":
				parent.lixo.esvaziar()
				setTimeout(function(){
					if(!parent.dormindo && !parent.checarLimpeza()){
						parent.avancar()
					}
				}, 3000)
				break

			case "dormir":
				this.dormindo = true
				setTimeout(function(){
					parent.dormindo = false
					parent.avancar()
				}, 6000)
				break
			}
		})
		this.onHit("Tile", function(e){
			this.stopIn = e[0].obj
		})
		this.avancar()
	},
	goTo: function(col, row, para){
		this.col = col
		this.row = row
		var currentX = this.x
		var currentY = this.y
		var nextX = col * 100 + 37
		var nextY = row * 100 + 25
		var dx = Math.abs(nextX - currentX)
		var dy = Math.abs(nextY - currentY)
		var d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
		this.tween({
			x: nextX,
			y: nextY,
			para: para
		}, d)
		return this
	},
	avancar: function(){
		this.goTo(this.caminho[this.index][0], this.caminho[this.index][1], "avancar")
		if(this.index == 23){
			this.index = 0
		}
		else{
			this.index++
		}
		return this
	},
	setBateria: function(bat){
		this.bateria = bat
		return this
	},
	setLixo: function(lix){
		this.lixo = lix
		return this
	},
	setTiles: function(til){
		this.tiles = til
		return this
	},
	checarLimpeza: function(){
		var limpo = true
		this.tiles.forEach(function(item){
			if(item.isDirty){
				limpo = false
			}
		})
		if (limpo) {
			this.goTo(4, 3, "dormir")
		}
		return limpo
	}
})