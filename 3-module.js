2// export funtion
const names = require("./4-names")
const sayHi = require("./5-utils")
console.log(sayHi(names.Rohit));
console.log(sayHi(names.Sohan))

const data = require("./6-alternative-flavor");
console.log(data.singlePerson.name)

require("./7-mind-grenade");