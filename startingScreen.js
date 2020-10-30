
let startingScreenApp = {
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
    arrayEnemys:[],
       
    



    init(id) {
        this.canvasTag = document.getElementById(id)
        this.ctx = this.canvasTag.getContext('2d')
        this.setDimensions()
        this.createHero()
        this.createEnemy()
        this.drawAll() 
        this.setEventListeners()
        this.getRandomArbitrary()
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


    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
          },
        

    createEnemy() {
        this.enemy = new Enemys(this.ctx, this.getRandomArbitrary(0, this.canvasSize.h), 400, 10, 10, 'chofer.jpg');

        setInterval(() => {
            
            this.arrayEnemys.push(this.enemy); 
            console.log(this.arrayEnemys)
        }, 1000)

    },
 

    setEventListeners() {
        document.onkeydown = e => {
            e.key === this.keys.left ? this.hero.move('left') : null
            e.key === this.keys.right ? this.hero.move('right') : null
            e.key === this.keys.up ? this.hero.move('up') : null
            e.key === this.keys.down ? this.hero.move('down') : null
        }
    },


 drawAll() {
        setInterval(() => {
            this.frames++
            
            this.clearScreen()
            this.arrayEnemys.forEach(elm => elm.draw())
            this.enemy.draw()
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
        startingScreenApp.init('myCanvas');
    };
}