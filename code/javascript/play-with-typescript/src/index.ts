

interface Wheel {
    rotate: () => void
}

class MRFWheel implements Wheel {
    rotate() {
        console.log("MRF Wheel rotating");
    }
}

class CEATWheel implements Wheel {
    rotate() {
        console.log("MRF Wheel rotating");
    }
}

class Car {
    wheel: Wheel;
    setWheel(wheel: Wheel) {
        this.wheel = wheel;
    }
    move() {
        this.wheel.rotate()
        console.log("car moving");
    }
}


const car: Car = new Car();
car.setWheel(new MRFWheel())
car.move();
car.setWheel(new CEATWheel())
car.move();