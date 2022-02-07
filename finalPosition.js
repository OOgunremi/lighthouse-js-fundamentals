const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];



function finalPosition(moves) {
  const cordinates = []
  let numberOfNorth = 0;
  let numberOfSouth = 0;
  let numberOfEast = 0;
  let numberOfWest = 0;
  for (const direction of moves) {
    //counts the directions 

    if (direction === 'north') { numberOfNorth++; }
    if (direction === 'south') { numberOfSouth++; }
    if (direction === 'east') { numberOfEast++; }
    if (direction === 'west') { numberOfWest++; }


  }
  //calculates the XY cordinates from the directions
  const Y = + numberOfNorth - numberOfSouth;
  const X = + numberOfEast - numberOfWest;
  cordinates.push(X, Y);
  return cordinates;

}