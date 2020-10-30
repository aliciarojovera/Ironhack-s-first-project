class Hero {

    constructor(ctx, heroPosX, heroPosY, heroImage){
      
        this.ctx = ctx;
        this.positionx = heroPosX;
        this.positiony = heroPosY;
        this.heroWith = 90;
        this.heroHeight = 90;
        this.imageName = heroImage
        this.heroInstance = undefined        
        this.init()

      


    }


      init(){ 
        this.heroInstance = new Image()
        this.heroInstance.src = `img/${this.imageName}`          
      }
    
    draw() {
        this.ctx.drawImage(this.heroInstance, this.positionx, this.positiony, this.heroWith, this.heroHeight)
    }
  
move(dir) {
        dir === 'left' ? this.positionx -= 20 : null
        dir === 'right' ? this.positionx += 20 : null
        dir === 'up' ? this.positiony -= 20 : null
        dir === 'down' ? this.positiony += 20 : null
    }
}
