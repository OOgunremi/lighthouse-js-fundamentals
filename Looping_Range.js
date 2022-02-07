

let start = 10;
let end = 30;
let step = 5;

let range = function (start, end, step) {


  if (step <= 0 || start > end || start === undefined || end === undefined || step === undefined) {
    return []
  }
  else {
    let num = start;
    let loopingArray = [];
    while (num <= end) {

      loopingArray.push(num);
      num = num + step;

    }
    return loopingArray;
  }
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
