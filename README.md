# P5_Perceptron

## Description
Simple pattern recognition using a perceptron and supervised learning.

In the modern sense, the perceptron is an algorithm for learning a binary classifier: a function that maps its input **x** (a real-valued vector) to an output value **f(x)** (a single binary value):

f(x) = 1 if w*x + b > 0 | = 0 otherwise

Basically, a perceptron recieves an input and computes a guess (output).

- Point living over the line = Output of +1

- Point living under the line = Output of -1

![Capture1](docs/capture1.png?raw=true "Capture1")

Error = desired output - guessed output

| Desired  | Guessed  | Error |
| :------------ |:---------------:| -----:|
| -1      | -1 | 0 |
| -1      | +1        |   -2 |
| +1 | -1        |    +2 |
| +1 | +1        |    0 |

So the possible error values are: -2, 0, +2

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