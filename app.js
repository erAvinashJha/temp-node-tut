1// name funtion
/*const Amit = "Amit";
const Rohit = "Rohit";
const Sohan = "Sohan";
const sayHi = (name) => {
    let x = `Hey I am ${name}`
    return x;
}
*/

// npm - npm global command, comes with NodeList;
// npm - --version;

// local dependency - use it only in the perticular PromiseRejectionEvent;
// npm i <packageName>;

// global dependency - use it any PromiseRejectionEvent;
// npm install -g <packageName>;
// sudo npm install -g <packageName> (mac)

// package.jason - mainfest file (stores important info about project/package);
// manual approach - (create package.jason in the root , create properties etc);
// npm init (step by step, press enter to skip);
// npm init -y (everything default);

const _ = require("lodash");
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems)
