import p5 from 'p5';
import SolarSystem from './solarSystem';

class Sketch {
    canvasHeight = 0;
    canvasWidth = 0;
    p = null;
    solarSystem = null;

    constructor() {
        this.canvasWidth = window.innerWidth;
        this.canvasHeight = window.innerHeight;
        this.run();
        this.addResizeListener();
    }

    setup() {
        this.p.createCanvas(this.canvasWidth, this.canvasHeight);
        this.solarSystem = new SolarSystem(this.p);
    }

    draw() {
        this.p.push();
        this.p.translate(this.p.width / 2, this.p.height / 2);
        this.p.background(0);
        this.solarSystem.draw();
    }

    run() {
        this.p = new p5((p) => {
            this.p = p;
            this.p.setup = this.setup.bind(this);
            this.p.draw = this.draw.bind(this);
        });
    }

    addResizeListener() {
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    handleResize() {
        this.canvasWidth = window.innerWidth;
        this.canvasHeight = window.innerHeight;
        this.p.resizeCanvas(this.canvasWidth, this.canvasHeight);
    }
}

export default Sketch;
