class Enemys {
    constructor(ctx, enemyPosX, enemyPosY, enemyVelX, enemyVelY, enemyImage ) {
       this.ctx = ctx  
this.enemyPos = {
            x: enemyPosX,
            y: enemyPosY
}
        this.enemySizew = 70;
        this.enemySizeh = 70;
               this.enemyVel = {
            x: enemyVelX,
            y: enemyVelY
        }
        this.imageName = enemyImage;
        this.enemyInstance = undefined        
        this.init()

              
    }


      init(){ 
        this.enemyInstance = new Image()
        this.enemyInstance.src = `img/${this.imageName}`          
        }
        
         draw() {
        this.ctx.drawImage(this.enemyInstance, this.enemyPos.x, this.enemyPos.y, this.enemySizew, this.enemySizeh)
    }
}