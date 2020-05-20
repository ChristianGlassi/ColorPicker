# See Colors
 
 A beginner Reactjs project that uses React concepts like State and Components in order to create an app that allows you to enter and see a color, temporarily store that color as a set button you can switch between. 
 
## Motivation
I needed something to build and did not want to copy the Reactjs Tic Tac Toe tutorial. I also really like seeing different colors.
 
 
## Tech/framework used
 
<b>Built with</b>
- [Reactjs](https://reactjs.org/)
 
## Features
In order for a button to be created and the color box to show color, the input needs to be an actual color. In order to solve that problem, I used the existing HTML DOM to check if the user input is a color. I set the backgroundColor of the app's root to the input if the input returns null then that color does not exist.
 
 
## Installation
Once you have pulled or downloaded the code
 
**To install packages**
 
```npm install ``` 
 
**To run a development build**
 
```npm start``` 
 
### To run a production build locally
 
```npm run build```
 
```npm i -g serve```
 
```serve -s build```
 
 
## License
MIT License

MIT © [2020] [Christian Glassiognon]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.