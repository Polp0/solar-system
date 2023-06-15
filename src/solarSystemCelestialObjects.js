const sun = {
    name: "Sun",
    size: 1.5,
    center: {
        x: 0,
        y: 0
    },
    color: '#FFFF00',
    satellites: [],
    rotationSpeed: 0 // Sun doesn't rotate
};

const mercury = {
    name: "Mercury",
    size: 0.2,
    color: "#C0C0C0",
    center: {
        x: 2,
        y: 0
    },
    satellites: [],
    rotationSpeed: 1.2 // Approximately 1.2 times faster than Earth
};

const venus = {
    name: "Venus",
    size: 0.3,
    color: "#FFD700",
    center: {
        x: 4,
        y: 0
    },
    satellites: [],
    rotationSpeed: 1.03 // Approximately 1.03 times faster than Earth
};

const moon = {
    name: "Moon",
    size: 0.08,
    color: "#C0C0C0",
    center: {
        x: 6.4,
        y: 0
    },
    satellites: [],
    rotationSpeed: 27.32 // Approximately 27.32 times faster than Earth
};

const earth = {
    name: "Earth",
    size: 0.4,
    color: "#008000",
    center: {
        x: 6,
        y: 0
    },
    satellites: [moon],
    rotationSpeed: 1 // Earth's rotation speed around the Sun
};

const mars = {
    name: "Mars",
    size: 0.35,
    color: "#FF4500",
    center: {
        x: 8,
        y: 0
    },
    satellites: [],
    rotationSpeed: 0.97 // Approximately 0.97 times slower than Earth
};

const jupiter = {
    name: "Jupiter",
    size: 0.8,
    color: "#FFA500",
    center: {
        x: 10,
        y: 0
    },
    satellites: [],
    rotationSpeed: 0.41 // Approximately 0.41 times slower than Earth
};

const moonIo = {
    name: "Io",
    size: 0.15,
    color: "#FFF8DC",
    center: {
        x: 10.5,
        y: 0
    },
    satellites: [],
    rotationSpeed: 1.77 // Approximately 1.77 times faster than Earth
};

const moonEuropa = {
    name: "Europa",
    size: 0.12,
    color: "#DAA520",
    center: {
        x: 11,
        y: 0
    },
    satellites: [],
    rotationSpeed: 1.49 // Approximately 1.49 times faster than Earth
};

const moonGanymede = {
    name: "Ganymede",
    size: 0.2,
    color: "#CD853F",
    center: {
        x: 11.5,
        y: 0
    },
    satellites: [],
    rotationSpeed: 1.08 // Approximately 1.08 times faster than Earth
};

const moonCallisto = {
    name: "Callisto",
    size: 0.18,
    color: "#C0C0C0",
    center: {
        x: 12,
        y: 0
    },
    satellites: [],
    rotationSpeed: 0.56 // Approximately 0.56 times slower than Earth
};

jupiter.satellites = [moonIo, moonEuropa, moonGanymede, moonCallisto];

const saturn = {
    name: "Saturn",
    size: 0.7,
    color: "#F0E68C",
    center: {
        x: 14,
        y: 0
    },
    satellites: [],
    rotationSpeed: 0.34 // Approximately 0.34 times slower than Earth
};

const moonTitan = {
    name: "Titan",
    size: 0.25,
    color: "#D2B48C",
    center: {
        x: 14.5,
        y: 0
    },
    satellites: [],
    rotationSpeed: 0.34 // Approximately 0.34 times slower than Earth
};

saturn.satellites = [moonTitan];

const uranus = {
    name: "Uranus",
    size: 0.5,
    color: "#00BFFF",
    center: {
        x: 16,
        y: 0
    },
    satellites: [],
    rotationSpeed: 0.23 // Approximately 0.23 times slower than Earth
};

const moonTitania = {
    name: "Titania",
    size: 0.18,
    color: "#FAFAD2",
    center: {
        x: 16.5,
        y: 0
    },
    satellites: [],
    rotationSpeed: 0.23 // Approximately 0.23 times slower than Earth
};

uranus.satellites = [moonTitania];

const neptune = {
    name: "Neptune",
    size: 0.6,
    color: "#000080",
    center: {
        x: 18,
        y: 0
    },
    satellites: [],
    rotationSpeed: 0.18 // Approximately 0.18 times slower than Earth
};

const moonTriton = {
    name: "Triton",
    size: 0.15,
    color: "#ADD8E6",
    center: {
        x: 18.5,
        y: 0
    },
    satellites: [],
    rotationSpeed: 0.18 // Approximately 0.18 times slower than Earth
};

neptune.satellites = [moonTriton];

const pluto = {
    name: "Pluto",
    size: 0.2,
    color: "#A9A9A9",
    center: {
        x: 20,
        y: 0
    },
    satellites: [],
    rotationSpeed: 0.13 // Approximately 0.13 times slower than Earth
};

const moonCharon = {
    name: "Charon",
    size: 0.12,
    color: "#FFFAFA",
    center: {
        x: 20.5,
        y: 0
    },
    satellites: [],
    rotationSpeed: 0.13 // Approximately 0.13 times slower than Earth
};

pluto.satellites = [moonCharon];

sun.satellites = [
    mercury,
    venus,
    earth,
    mars,
    jupiter,
    saturn,
    uranus,
    neptune,
    pluto
];

export {
    sun,
    mercury,
    venus,
    earth,
    moon,
    mars,
    jupiter,
    moonIo,
    moonEuropa,
    moonGanymede,
    moonCallisto,
    saturn,
    moonTitan,
    uranus,
    moonTitania,
    neptune,
    moonTriton,
    pluto,
    moonCharon
};
