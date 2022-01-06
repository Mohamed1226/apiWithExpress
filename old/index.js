var http = require("http");
//const readline = require("readline");
var readlineSync = require("readline-sync");
var fileing = require("./fileing");
///////////////////////
var userName = readlineSync.question("May I have your name? ");
console.log("Hi " + userName + "!");
//////////////////////////
fileing.inputData(userName);
var data;
data = fileing.readData();
//////////////////////////
var server = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        name: data
    }));
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
