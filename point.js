class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        if(x > y) {
           this.label = 1;
        } else {
            this.label = -1;
        }
    }

    getLabel() {
        return this.label;
    }
}