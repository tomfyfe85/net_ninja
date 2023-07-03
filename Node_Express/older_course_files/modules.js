// const peeps = require('./people')

// console.log(peeps.people)
// console.log(peeps.ages)

// const { people } = require('./people');

// console.log(people)

const { people, ages } = require('./people');
 
console.log(people, ages)

const os = require('os');
//  os - core Node module. Operating system
console.log(os.platform(), os.homedir())