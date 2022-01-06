const mongoose = require("mongoose");
const bcrypt=require("bcrypt");
let userSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true, lowercase: true },
    password: { type: String, require: true, minLength: 6 },
    salary: { type: String, require: true },
  },
  { collection: "employee" }
);


//fire function after docs saved in db
userSchema.post("save", function (doc, next) {
  console.log("new user added here", doc);
  next();
});

//fire function before docs saved in db
userSchema.pre("save", async function ( next) {
  console.log("user about to created and saved",this);
  const salt= await bcrypt.genSalt();
  this.password=await bcrypt.hash(this.password,salt);
  next();
});



const Employee = mongoose.model("Employee", userSchema);




module.exports = { Employee };
