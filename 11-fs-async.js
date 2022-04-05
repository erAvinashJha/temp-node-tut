const { readFile, writeFile } = require("fs");
console.log("Start");
readFile("./content/second.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/sub-folder/result-async.txt",
      `Here is the result : ${first} , ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Done with the task");
      }
    );
  });
});
console.log("Starting new task")
