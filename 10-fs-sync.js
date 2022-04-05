const { readFileSync , writeFileSync } = require ("fs");
console.log("start");
const first = readFileSync ("./content/sub-folder/first.txt", "utf8");
 const second = readFileSync ("./content/second.txt", "utf8");
console.log(first,second)
writeFileSync (
    "./content/sub-folder/result-stnc.txt",
    `Here is the result : ${first} , ${second}`,
    {flag : "a"}
)
console.log("Done with this task");
console.log("Starting the next one");