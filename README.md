# JS-Calculator
 Here is link to my Calculator [Click here](https://abishekjames.github.io/JS-Calculator/)

![This is a image](https://github.com/abishekjames/JS-Calculator/blob/main/images/Screenshot%20(249).png)

<h2>Features</h2>

### Buttons ###

The calculator consists of the following:

* 10 buttons for numbers (0 to 9)
* 5 buttons to perform mathematical operations, which are:
     * Addition (+)
     * Subtract (-)
     * Multiply (x)
     * Divide (÷)
     * Calculate percentage (%)
* 1 button to display the results (=)
* 2 buttons to clear the calculator screen, one removes everything (AC) and the other removes only the last number (←).
* 1 button to change the sign of a number (+/-).
* 1 button to add decimals (.).

### Functionality ###
This calculator has these functions:

* Performs simple calculations.
* It has keyboard support.
* It is responsive, adapting to mobile devices.
* The calculator screen shows the operations you are performing, and also displays a special message if you try to divide a number by 0.

<h2> Technologies Used </h2>

### Languages ###

* HTML 5
* CSS 3
* JavaScript

### Libraries ###

* Font Awesome version 6.1.1
* Google Fonts

### Tools Used ###

* VS Code
* GitHub
* Git
* Adobe Photoshop portable version 13.0.0
* Affinity designer version 1.7.4

<h2>User Stories</h2>

Here are some use cases (abilities your project needs to have):

1. Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.

* add
* subtract
* multiply
* divide

2  Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

3. Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.

* Do not worry about wiring up the JS just yet.
* There should also be a display for the calculator. Go ahead and fill it with some dummy numbers so it looks correct.
* Add a “clear” button.

4. Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.

5. Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then operate() on them when the user presses the “=” key.

* You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.
* This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.

6. Gotchas: watch out for and fix these bugs if they show up in your code:

* Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, 12 + 7 - 5 * 3 = should yield 42. An example of the behavior we’re looking for would be this student solution.
* Your calculator should not evaluate more than a single pair of numbers at a time. Example: you press a number button (12), followed by an operator button (+), a second number button (7), and finally a second operator button (-). Your calculator should then do the following: first, evaluate the first pair of numbers (12 + 7), second, display the result of that calculation (19), and finally, use that result (19) as the first number in your new calculation, along with the next operator (-).
* You should round answers with long decimals so that they don’t overflow the screen.
* Pressing = before entering all of the numbers or an operator could cause problems!
* Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”
* Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!

<b>Extra Credit</b>

* Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though: 12.3.56.5. It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display)
* Make it look nice! This is a great project to practice your CSS skills. At least make the operations a different color from the keypad buttons.
* Add a “backspace” button, so the user can undo if they click the wrong number.
* Add keyboard support!

