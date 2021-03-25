class Point {
    constructor() {
        this.pToan = this.randomPoint(5, 10);
        this.pLy = this.randomPoint(5, 10);
        this.pHoa = this.randomPoint(5, 10);
    }
    randomPoint(max, min) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    setToan(pToan) {
        this.pToan = pToan;
    };
    getToan() {
        return this.pToan;
    };
    setLy(pLy) {
        this.pLy = pLy;
    };
    getLy() {
        return this.pLy;
    };
    setHoa(pHoa) {
        this.pHoa = pHoa;
    };

    getHoa() {
        return this.pHoa;
    };


};
