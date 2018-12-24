// A list of points we will use to "train" the perceptron
let trainingPoints = new Array(2000);

// A Perceptron object
let perceptron;

// We will train the perceptron with one "Point" object at a time
let count = 0;

// Coordinate space
let xmin = -1;
let ymin = -1;
let xmax = 1;
let ymax = 1;

// The function to describe a line
function lineDescription(x) {
    let y = 0.3 * x + 0.4;
    return y;
}

function setup() {
    createCanvas(600, 600);

    registerButtons();

    // The perceptron has 3 inputs -- x, y, and bias
    // Second value is "Learning Constant"
    perceptron = new Perceptron(3, 0.001); // Learning Constant is low just b/c it's fun to watch, this is not necessarily optimal

    createRandomPointSet();
}

function createRandomPointSet() {
    // Create a random set of training points and calculate the "known" answer
    for (let i = 0; i < trainingPoints.length; i++) {
        let x = random(xmin, xmax);
        let y = random(ymin, ymax);
        let answer = 1;

        if (y < lineDescription(x)) answer = -1;
        trainingPoints[i] = new Point(x, y, 1, answer);
    }
}


function draw() {
    background(0);

    drawLine();
    drawCurrentWeightsLine();

    trainPerceptron();

    drawPoints();

    drawStatusText();
}

function drawStatusText() {
    document.getElementById('count-status-text').innerText = 'Count: ' + count.toString() + '/2000';
}

function trainPerceptron() {
    // Train the Perceptron with one "training" point at a time
    perceptron.train(trainingPoints[count].getInputs(), trainingPoints[count].getOutput());
    count = (count + 1) % trainingPoints.length;
}

function drawLine() {
    // Draw the line
    strokeWeight(1);
    stroke(255);
    let x1 = map(xmin, xmin, xmax, 0, width);
    let y1 = map(lineDescription(xmin), ymin, ymax, height, 0);
    let x2 = map(xmax, xmin, xmax, 0, width);
    let y2 = map(lineDescription(xmax), ymin, ymax, height, 0);
    line(x1, y1, x2, y2);
}

function drawCurrentWeightsLine() {
    // Draw the line based on the current weights
    // Formula is weights[0]*x + weights[1]*y + weights[2] = 0
    stroke(255);
    strokeWeight(2);

    let weights = perceptron.getWeights();
    x1 = xmin;
    y1 = (-weights[2] - weights[0] * x1) / weights[1];
    x2 = xmax;
    y2 = (-weights[2] - weights[0] * x2) / weights[1];

    x1 = map(x1, xmin, xmax, 0, width);
    y1 = map(y1, ymin, ymax, height, 0);
    x2 = map(x2, xmin, xmax, 0, width);
    y2 = map(y2, ymin, ymax, height, 0);
    line(x1, y1, x2, y2);
}

function drawPoints() {
    // Draw all the points based on what the Perceptron would "guess"
    // Does not use the "known" correct answer
    for (let i = 0; i < count; i++) {
        trainingPoints[i].drawPoint();
    }
}