let currentRotation = 0;

class CelestialObject {
    p = undefined;
    name = undefined;
    size = undefined;
    radius = undefined;
    rotationRadius = undefined;
    center= undefined
    parentCenter = undefined
    coordinates = undefined
    currentParentCoordinates = undefined
    color = undefined;
    satellites = undefined
    rotationSpeed = undefined;
    parentRotationRadius = undefined
    parentRotationSpeed = undefined;
    zoom = 50
    scatter = 40
    speedModifier = 2

    constructor(p, size, name, center, color, satellites, rotationSpeed, parentCenter, parentRotationSpeed, parentColor) {
        this.p = p;
        this.size = size * this.zoom;
        this.radius = size * this.zoom / 2;
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
        this.color = this.p.color(color);
        this.satellites = satellites;
        this.rotationSpeed = rotationSpeed;
        this.parentRotationSpeed = parentRotationSpeed;
        this.rotationRadius = center.x * this.scatter - parentCenter.x;
        this.parentRotationRadius = parentCenter.x
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
                    this.rotationSpeed,
                    this.color
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
            
            this.currentParentCoordinates = {
                x: this.parentRotationRadius * Math.cos(parentAngleInRadians),
                y: this.parentRotationRadius * Math.sin(parentAngleInRadians)
            }
            
            this.coordinates.x = this.currentParentCoordinates.x + this.rotationRadius * Math.cos(angleInRadians);
            this.coordinates.y = this.currentParentCoordinates.y + this.rotationRadius * Math.sin(angleInRadians);
    }
}

export default CelestialObject;
