
const fs = require("fs");


/////////////////////////
function inputData(name:string){
    fs.writeFileSync("newfile.txt", name.toString(), function (err) {
        if (err) throw err;
        console.log("File is created successfully.");
      });
}
exports.inputData=inputData

   ///////////////////////////
  const folderPath = "./newfile.txt";
 
  function readData(name:string){
      return fs.readFileSync(folderPath, "utf-8", (error, content) => {
        console.log(content);
      });
  }

  exports.readData=readData;

  ///////////////////////////////

  