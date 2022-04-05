// Info about current user
const os = require("os");
const user = os.userInfo();
console.log(user);
// Info system uptime
console.log(`The system uptime is ${os.uptime/(60*60)} hours `)

const currentOs = {
    name : os.type(),
    release : os.release(),
    tMemory : os.totalmem(),
    fMemory : os.freemem()
}
console.log(currentOs)