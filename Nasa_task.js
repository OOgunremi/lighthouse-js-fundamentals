/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

//My Solution

var time = 60;
while (time >= 0) {
  if (time === 50) {
    console.log('Orbiter transfers from ground to internal power');
  } else if (time === 31) {
    console.log('Ground launch sequencer is go for auto sequence start');
  } else if (time === 16) {
    console.log('Activate launch pad sound suppression system');

  } else if (time === 10) {
    console.log('Activate main engine hydrogen burnoff system');

  } else if (time === 6) {
    console.log('Main engine start');

  } else if (time === 0) {
    console.log('Solid rocket booster ignition and liftoff!');

  } else {
    console.log(`T-${time} seconds`);

  }
  time = time - 1;
}


/*

// Let us take an iteration variable, that represent the remaining Time in seconds
n = 60

// While loop with a stop condition
while (n >= 0) {
    if (n === 50) {
        console.log("Orbiter transfers from ground to internal power");
    }
    else if (n === 31) {
        console.log("Ground launch sequencer is go for auto sequence start");
    }
    else if (n === 16) {
        console.log("Activate launch pad sound suppression system");
    }
    else if (n === 10) {
        console.log("Activate main engine hydrogen burnoff system");
    }
    else if (n === 6) {
        console.log("Main engine start");
    }
    else if (n === 0) {
        console.log("Solid rocket booster ignition and liftoff!");
    }
    else{
        console.log("T-"+n+" seconds");
    }

    //Never forget to decrement/increment the iteration variable in a while loop
    // Otherwise, you loop will run infinite iterations
    n = n-1;
}
*/