class Point {
    constructor(x, y, label, answer) {
        this.x = x;
        this.y = y;
        this.label = label;
        this.answer = answer;
    }

    drawPoint() {
        stroke('#76fcfc');
        strokeWeight(1);
        fill('#76fcfc');

        let guess = perceptron.feedforward(this.getInputs());
        if (guess > 0) noFill();

        let x = map(this.x, xmin, xmax, 0, width);
        let y = map(this.y, ymin, ymax, height, 0);
        ellipse(x, y, 8, 8);
    }

    getInputs() {
        return [this.x, this.y, this.label]
    }

    getOutput() {
        return this.answer;
    }
}