class FlashLamp {
    constructor() {
        this.status = false;
        this.battery = Battery;
    }


    setBattery (battery) {
        this.battery = battery;
    };
    getBattery() {
        return this.battery.getEnergy();
    };
    light() {
        if (this.status) {
            alert("BAT")
        } else {
            alert("TAT")
        }
    };
    turnOn(){
        this.status = true;
    };
    turnOff(){
        this.status = false;
    }
};