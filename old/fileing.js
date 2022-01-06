var fs = require("fs");
/////////////////////////
function inputData(name) {
    fs.writeFileSync("newfile.txt", name.toString(), function (err) {
        if (err)
            throw err;
        console.log("File is created successfully.");
    });
}
exports.inputData = inputData;
///////////////////////////
var folderPath = "./newfile.txt";
function readData(name) {
    return fs.readFileSync(folderPath, "utf-8", function (error, content) {
        console.log(content);
    });
}
exports.readData = readData;
///////////////////////////////
