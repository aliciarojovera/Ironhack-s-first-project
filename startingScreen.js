
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
        this.createHealth()
        this.hitHeart()
        this.hitEnemy()
        this.hitEnemy2()
        this.createGameOver()
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

createGameOver() {
        this.gameover = new GameOver(this.ctx, 0, 0,'Game-Over.jpg')
    },


    createHealth() {

        this.health1 = new Health(this.ctx, 20, 20, 'vida.png')
        this.health2 = new Health(this.ctx, 45, 20, 'vida.png')
        this.health3 = new Health(this.ctx, 70, 20, 'vida.png')
        this.health4 = new Health(this.ctx, 95, 20, 'vida.png')
        this.health5 = new Health(this.ctx, 120, 20, 'vida.png')
        this.health6 = new Health(this.ctx, 145, 20, 'vida.png')
        this.health7 = new Health(this.ctx, 170, 20, 'vida.png')
        this.health8 = new Health(this.ctx, 195, 20, 'vida.png')
        this.health9 = new Health(this.ctx, 220, 20, 'vida.png')
        this.health10 = new Health(this.ctx, 245, 20, 'vida.png')
        this.nohealth1 = new Health(this.ctx, 20, 20, 'sinvida.png')
        this.nohealth2 = new Health(this.ctx, 45, 20, 'sinvida.png')
        this.nohealth3 = new Health(this.ctx, 70, 20, 'sinvida.png')
        this.nohealth4 = new Health(this.ctx, 95, 20, 'sinvida.png')
        this.nohealth5 = new Health(this.ctx, 120, 20, 'sinvida.png')
        this.nohealth6 = new Health(this.ctx, 145, 20, 'sinvida.png')
        this.nohealth7 = new Health(this.ctx, 170, 20, 'sinvida.png')
        this.nohealth8 = new Health(this.ctx, 195, 20, 'sinvida.png')
        this.nohealth9 = new Health(this.ctx, 220, 20, 'sinvida.png')
        this.nohealth10 = new Health(this.ctx, 245, 20, 'sinvida.png')
    },


    createEnemy() {
        if (this.frames % 340 === 0 && this.levelToDifficulty >= 1001) {

            this.levelToDifficulty -= 1000
        }

        setInterval(() => {
            this.enemy = new Enemys(this.ctx, 3, 'chofer.jpg');

    this.arrayEnemys.push(this.enemy = new Enemys(this.ctx, 3, 'chofer.jpg'));

        }, this.levelToDifficulty)
    },


createEnemy2() {

        setInterval(() => {
            this.enemy2 = new Enemy2(this.ctx, 3, 'gordo.png');

    this.arrayEnemy2.push(this.enemy2 = new Enemy2(this.ctx, 3, 'gordo.png'));

        }, this.levelToDifficulty2)
    },



 createHeart() {

        setInterval(() => {
            this.heart = new Heart(this.ctx, 'corazon.png');

            this.arrayHearts.push(this.heart = new Heart(this.ctx, 'corazon.png'));


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
                 if (this.vidas <= 9){
                     this.vidas += 1
                 }
                 this.arrayHearts.pop(this.arrayHearts[i])
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
                }},70)



               },
      hitEnemy2() {

   setInterval(()=>{ for (i = 0; i < this.arrayEnemys.length; i++){


             if (this.movx < this.arrayEnemy2[i].enemy2PosX + this.arrayEnemy2[i].enemy2Sizew &&
           this.movx + this.hero.heroWith > this.arrayEnemy2[i].enemy2PosX &&
           this.movy< this.arrayEnemy2[i].enemy2PosY + this.arrayEnemy2[i].enemy2Sizeh &&
           this.hero.heroHeight + this.movy > this.arrayEnemy2[i].enemy2PosY) {
                 if (this.vidas >0 ){
                     this.vidas -= 2
                     this.arrayEnemy2.pop()
                 }


             }
                }},70)



               },
    drawHealth(){
        switch (this.vidas) {
            case 1:
                this.nohealth10.draw()
                this.nohealth9.draw()
                this.nohealth8.draw()
                this.nohealth7.draw()
                this.nohealth6.draw()
                this.nohealth5.draw()
                this.nohealth4.draw()
                this.nohealth3.draw()
                this.nohealth2.draw()
                this.health1.draw()
                break
            case 2:
                this.nohealth10.draw()
                this.nohealth9.draw()
                this.nohealth8.draw()
                this.nohealth7.draw()
                this.nohealth6.draw()
                this.nohealth5.draw()
                this.nohealth4.draw()
                this.nohealth3.draw()
                this.health2.draw()
                this.health1.draw()
                break
            case 3:
                this.nohealth10.draw()
                this.nohealth9.draw()
                this.nohealth8.draw()
                this.nohealth7.draw()
                this.nohealth6.draw()
                this.nohealth5.draw()
                this.nohealth4.draw()
                this.health3.draw()
                this.health2.draw()
                this.health1.draw()
                break
            case 4:
                this.nohealth10.draw()
                this.nohealth9.draw()
                this.nohealth8.draw()
                this.nohealth7.draw()
                this.nohealth6.draw()
                this.nohealth5.draw()
                this.health4.draw()
                this.health3.draw()
                this.health2.draw()
                this.health1.draw()
                break
            case 5:
                this.nohealth10.draw()
                this.nohealth9.draw()
                this.nohealth8.draw()
                this.nohealth7.draw()
                this.nohealth6.draw()
                this.health5.draw()
                this.health4.draw()
                this.health3.draw()
                this.health2.draw()
                this.health1.draw()
                break
                case 6:
                this.nohealth10.draw()
                this.nohealth9.draw()
                this.nohealth8.draw()
                this.nohealth7.draw()
                this.health6.draw()
                this.health5.draw()
                this.health4.draw()
                this.health3.draw()
                this.health2.draw()
                this.health1.draw()
                break
            case 7:
                this.nohealth10.draw()
                this.nohealth9.draw()
                this.nohealth8.draw()
                this.health7.draw()
                this.health6.draw()
                this.health5.draw()
                this.health4.draw()
                this.health3.draw()
                this.health2.draw()
                this.health1.draw()
                break
                case 8:
                this.nohealth10.draw()
                this.nohealth9.draw()
                this.health8.draw()
                this.health7.draw()
                this.health6.draw()
                this.health5.draw()
                this.health4.draw()
                this.health3.draw()
                this.health2.draw()
                this.health1.draw()
                break
                case 9:
                this.nohealth10.draw()
                this.health9.draw()
                this.health8.draw()
                this.health7.draw()
                this.health6.draw()
                this.health5.draw()
                this.health4.draw()
                this.health3.draw()
                this.health2.draw()
                this.health1.draw()
                break
                        case 10:
                this.nohealth10.draw()
                this.health9.draw()
                this.health8.draw()
                this.health7.draw()
                this.health6.draw()
                this.health5.draw()
                this.health4.draw()
                this.health3.draw()
                this.health2.draw()
                this.health1.draw()
                break

        }
    },

    gameOver() {
        if (this.vidas <= 0) {
            this.clearScreen()
           this.gameover.draw()
            clearInterval(this.Interval)
            
        }
        
            
        },


    drawAll() {
        this.Interval = setInterval(() => {
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
            this.drawHealth()
            this.gameOver()


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