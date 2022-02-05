const whichSchool = function (age) {

  if (age < 13) {
    return ('Elementary School');
  } else if (age <= 18) {
    return ('Secondary School');

  } else {
    return ('Lighthouse Labs');

  }

};

/*const whichSchool = function (age) {
  // Your code in here ...
  for (age = 1; age < 13; age++) {
    whichSchool(age) = 'Elementary School';
    console.log(whichSchool(age));
  }
  for (age = 13; age <= 18; age++) {
    whichSchool(age) = 'Secondary School';
    console.log(whichSchool(age));
  }
  for (age = 19; age < 100; age++) {
    whichSchool(age) = 'Lighthouse Labs'
    console.log(whichSchool(age));
  }
};

*/

