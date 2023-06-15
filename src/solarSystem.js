import CelestialObject from "./celestialObject";
import {
    sun
} from './solarSystemCelestialObjects';
class SolarSystem {
    p = undefined;
    sun = undefined

    constructor(p) {
        this.p = p;

        this.sun = new CelestialObject(
            p,
            sun.size, 
            sun.name, 
            sun.center, 
            sun.color, 
            sun.satellites,
            sun.rotationSpeed,
            { 
                x: 0, 
                y: 0
            },
            0
        )
    }
    
    draw() {
        this.sun.draw();
    }
}

export default SolarSystem