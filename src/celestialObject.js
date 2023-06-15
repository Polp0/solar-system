let currentRotation = 0;

class CelestialObject {
    p = undefined;
    name = '';
    size = 0;
    radius = 0;
    rotationRadius = 0;
    center= undefined
    parentCenter = undefined
    coordinates = undefined
    color = undefined;
    satellites = []
    rotationSpeed = undefined;
    parentRotationSpeed = undefined;
    zoom = 40
    scatter = 40
    speedModifier = 1

    constructor(p, size, name, center, color, satellites, rotationSpeed, parentCenter, parentRotationSpeed) {
        this.p = p;
        this.size = size * this.zoom;
        this.radius = this.size / 2;
        this.name = name;
        this.center = {
            x: center.x * this.scatter,
            y: center.y * this.scatter
        }
        this.parentCenter = {
            x: parentCenter.x,
            y: parentCenter.y
        }
        this.coordinates = {
            x: center.x * this.scatter,
            y: center.y * this.scatter
        }
        this.rotationRadius = center.x * this.scatter / 2
        this.color = this.p.color(color);
        this.satellites = satellites;
        this.rotationSpeed = rotationSpeed;
        this.parentRotationSpeed = parentRotationSpeed;
    }

    draw() {
        currentRotation = currentRotation + 0.016 * this.speedModifier
        
        this.drawCelestialObject();
        
        if (this.satellites.length > 0) {
            this.satellites.forEach(satellite => {
                const celestialObject = new CelestialObject(
                    this.p,
                    satellite.size,
                    satellite.name,
                    satellite.center,
                    satellite.color,
                    satellite.satellites,
                    satellite.rotationSpeed,
                    this.center,
                    this.rotationSpeed
                )

                celestialObject.draw();
            });
        }
    }

    drawCelestialObject() {
        this.p.fill(this.color);
        this.updateCoordinates()

        this.p.ellipse(
            this.coordinates.x,
            this.coordinates.y,
            this.size)
    }

    updateCoordinates() {
            const angleInRadians = (currentRotation * this.rotationSpeed * Math.PI) / 360;
            const parentAngleInRadians = (currentRotation * this.parentRotationSpeed * Math.PI) / 360;
            const rotationRadius = this.center.x - this.parentCenter.x;
            const parentRotationRadius = this.parentCenter.x;
            
            const currentParentCoordinates = {
                x: parentRotationRadius * Math.cos(parentAngleInRadians),
                y: parentRotationRadius * Math.sin(parentAngleInRadians)
            }
            
            this.coordinates.x = currentParentCoordinates.x + rotationRadius * Math.cos(angleInRadians);
            this.coordinates.y = currentParentCoordinates.y + rotationRadius * Math.sin(angleInRadians);
    }
}

export default CelestialObject;
