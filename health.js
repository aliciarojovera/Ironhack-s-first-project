class Health {
    constructor(ctx, healthPosX, healthPosY, healthImage) {
      
        this.ctx = ctx;
        this.positionx = healthPosX;
        this.positiony = healthPosY;
        this.healthWith = 20;
        this.healthHeight = 20;
        this.imageName3 = healthImage
        this.healthInstance = undefined
        this.init()

      
    }


    init() {
        this.healthInstance = new Image()
        this.healthInstance.src = `img/${this.imageName3}`
    }
    
    draw() {
        this.ctx.drawImage(this.healthInstance, this.positionx, this.positiony, this.healthWith, this.healthHeight)
    }
}