class Battery {
    constructor() {
        this.energy = 100;
    }

    setEnergy(energy) {
        this.energy = energy;
    };

    getEnergy() {
        return this.energy;
    };
    decreaseEnergy(energy) {
        if (this.energy > 0) {
            this.energy--;
        }
        ;
    }
}