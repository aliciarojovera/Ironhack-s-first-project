
let akaneApp = {
    ctx: undefined,
    canvasTag: undefined,
    frames: 0,
    canvasSize: {
        w: undefined,
        h: undefined
    },
    keys: {
        left: 'a',
        right: 'd',
        up: 'w',
        down: 's'   

    }, 
    arrayEnemys: [],
    arrayEnemy2: [],
    arrayHearts: [],
    movx : 300,
    movy: 300,
    levelToDifficulty: 4000,
    levelToDifficulty2: 10000,
    vidas:5,
       
    



    init(id) {
        this.canvasTag = document.getElementById(id)
        this.ctx = this.canvasTag.getContext('2d')
        this.setDimensions()
        this.createHero()
        this.createEnemy()
        this.createEnemy2()
        this.createHeart()
        
        this.hitHeart()
        this.hitEnemy()
        this.drawAll()
      this.setEventListeners()
       
    },


    setDimensions() {
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        this.canvasTag.setAttribute('width', this.canvasSize.w)
        this.canvasTag.setAttribute('height', this.canvasSize.h)
        
    },

createHero() {
        this.hero = new Hero(this.ctx, 300, 300,'tioDeRojo.png')
    },


   

    createEnemy() {
        if (this.frames % 340 === 0 && this.levelToDifficulty >= 1001) {
                       
            this.levelToDifficulty -= 1000
        }
        
        setInterval(() => {
            this.enemy = new Enemys(this.ctx, 3, 'chofer.jpg');

    this.arrayEnemys.push(this.enemy = new Enemys(this.ctx, 3, 'chofer.jpg'));

     console.log(this.arrayEnemys)
        }, this.levelToDifficulty)       
    },


createEnemy2() {
        // if (this.frames % 340 === 0 && this.levelToDifficulty >= 1001) {
                       
        //     this.levelToDifficulty -= 1000
        // }
        
        setInterval(() => {
            this.enemy2 = new Enemy2(this.ctx, 3, 'gordo.png');

    this.arrayEnemy2.push(this.enemy2 = new Enemy2(this.ctx, 3, 'gordo.png'));

     console.log(this.arrayEnemy2)
        }, this.levelToDifficulty2)       
    },



 createHeart() {

        setInterval(() => {
            this.heart = new Heart(this.ctx, 'corazon.png');

            this.arrayHearts.push(this.heart = new Heart(this.ctx, 'corazon.png'));


        console.log(this.arrayHearts)
        }, 6000)
         
        
    },
    
 
 
 
setEventListeners() {
        document.onkeydown = e => {
            e.key === this.keys.left ? this.hero.move('left') : null
            e.key === this.keys.left ? this.movx -= 20 : null
            e.key === this.keys.right ? this.hero.move('right') : null
            e.key === this.keys.right ? this.movx += 20 : null
            e.key === this.keys.up ? this.hero.move('up') : null
            e.key === this.keys.up ? this.movy-=20 : null
            e.key === this.keys.down ? this.hero.move('down') : null
            e.key === this.keys.down ? this.movy+=20 : null
        }
    },
  

    hitHeart() {
            
                
   setInterval(()=>{ for (i = 0; i < this.arrayHearts.length; i++){
             
      
             if (this.movx < this.arrayHearts[i].heartPosX + this.arrayHearts[i].heartSizew &&
           this.movx + this.hero.heroWith > this.arrayHearts[i].heartPosX &&
           this.movy< this.arrayHearts[i].heartPosY + this.arrayHearts[i].heartSizeh &&
           this.hero.heroHeight + this.movy > this.arrayHearts[i].heartPosY) {
                 console.log('¡colision detectada!')
                 if (this.vidas <= 9){
                     this.vidas += 1
                 }
                 this.arrayHearts.pop(this.arrayHearts[i])
                 console.log(this.vidas)
             }
                   
                }},70)
    
               
                
    },   
    hitEnemy() {
          
   setInterval(()=>{ for (i = 0; i < this.arrayEnemys.length; i++){
             
   
             if (this.movx < this.arrayEnemys[i].enemyPosX + this.arrayEnemys[i].enemySizew &&
           this.movx + this.hero.heroWith > this.arrayEnemys[i].enemyPosX &&
           this.movy< this.arrayEnemys[i].enemyPosY + this.arrayEnemys[i].enemySizeh &&
           this.hero.heroHeight + this.movy > this.arrayEnemys[i].enemyPosY) {
                 if (this.vidas >0 ){
                     this.vidas -= 1
                     this.arrayEnemys.pop()
                 }
                 
                 
             }
                    else { console.log("no choca")}
                }},70)
    
               
                
               },   
  
              

        
  

    drawAll() {
        setInterval(() => {
            this.frames++
       
            this.clearScreen()
           
             for (i = 0; i < this.arrayEnemys.length; i++){
                 this.arrayEnemys[i].draw()
             }
            
             for (i = 0; i < this.arrayEnemy2.length; i++){
                 this.arrayEnemy2[i].draw()
             }
            
            for (i = 0; i < this.arrayHearts.length; i++) {
                this.heart.draw()
             
            } 
            this.hero.draw()
           
            
        }, 70)   
    },
 clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },


 



}

window.onload = () => {
    let button = document.querySelector('button')
    document.querySelector('.start-button').onclick = () => {
        button.classList.add('button')
        button.classList.remove('start-button')
        akaneApp.init('myCanvas');
    };
}