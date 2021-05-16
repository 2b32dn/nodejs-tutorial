const sayHi = require('./2-utils')
const name = require('./3-names');

sayHi(name.Susan);
sayHi(name.Bob);
sayHi(name.Peter);

// Output:
// Hello Susan
// Hello Bob
// Hello Peter


const data = require('./4-alternative')
console.log(data)

// Output
// {
//   items: [ 'item1', 'item2' ],
//   singleCar: { model: 'Subaru', color: 'blue' }
// }

require('./5-mind-grenade')
// Output
// the sum is: 15