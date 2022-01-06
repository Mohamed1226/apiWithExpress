const http = require("http");
//const readline = require("readline");
const readlineSync = require("readline-sync");
const fileing = require("./fileing");

///////////////////////
let userName: string = readlineSync.question("May I have your name? ");
console.log("Hi " + userName + "!");

//////////////////////////
fileing.inputData(userName);
let data: string;

data = fileing.readData();
//////////////////////////
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      name: data,
    })
  );
});

server.listen(8000);

//////////////////////////
/*
fs.writeFileSync("newfile.txt", userName.toString(), function (err) {
  if (err) throw err;
  console.log("File is created successfully.");
});

///////////////////////////
const folderPath = "C:\\Users\\altawkeel\\simpleProject\\newfile.txt";
let data: string;

data = fs.readFileSync(folderPath, "utf-8", (error, content) => {
  console.log(content);
});
///////////////////////////////
*/
