# P5_Perceptron

## Description
Simple pattern recognition using a perceptron and supervised learning.

## Supervised learning algorithm

1. Give inputs to the perceptron for which there are known answers.

2. Perceptron guess an answer.

3. Compute the error.

4. Adjust all the weights according to the error.

5. Return to 1. and repeat.

## Perceptron

In the modern sense, the perceptron is an algorithm for learning a binary classifier: a function that maps its input **x** (a real-valued vector) to an output value **f(x)** (a single binary value):

```
f(x) = 1 if w*x + b > 0 | = 0
```

Basically, a perceptron recieves an input and computes a guess (output).

- Point living over the line = Output of +1

- Point living under the line = Output of -1

![Capture1](docs/capture1.png?raw=true "Capture1")

## Error correction

Error is calculated with this formula:
```
Error = desired output - guessed output
```

| Desired  | Guessed  | Error |
| :------------ |:---------------:| -----:|
| -1      | -1 | 0 |
| -1      | +1        |   -2 |
| +1 | -1        |    +2 |
| +1 | +1        |    0 |

So the possible error values are: -2, 0, +2

Error correction is done by using the error value in the weight formula:

```
delta weight = error * input
new weight = weight + error * input * learning rate
```

## Previews

![Preview1](docs/preview/preview1.png?raw=true "Preview1")

## Setup
- Open project with the Webstorm ide and open the index.html file.

- On the top right corner select Chrome browser to open the project in Google Chrome.

## Built With
- [p5.js](https://p5js.org/)

## Links
- [The Nature of Code](http://natureofcode.com)
- [Simple Pattern Recognition Using a Perceptron](https://natureofcode.com/book/chapter-10-neural-networks/)
- [Perceptron](https://en.wikipedia.org/wiki/Perceptron)
- [Neural Networks](https://github.com/shiffman/NOC-S17-2-Intelligence-Learning/tree/master/week4-neural-networks)