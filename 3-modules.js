// Modules - Encapsulated Code (only share minimum)
// CommonJS - every file is module (by default)
const persons = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternativ-export')
require('./7-mind-grenade')

sayHi('lingga', 24);
sayHi(persons.name[0], persons.age[0]);
sayHi(persons.name[1], persons.age[1]);
sayHi(persons.name[2], persons.age[2]);