for (let index = 1; index <= 20; index++){
  while (index%3===0) {
    console.log('Fizz')
  };
  while (index%5===0) {
    console.log('Buzz')
  };
  while (index%3===0 && index%5===0) {
    console.log('FizzBuzz')
  };
  while (index%3!==0 ||index%5!==0) {
    console.log(index)
  };
    
  
};