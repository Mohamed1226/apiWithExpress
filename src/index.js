const express = require("express");
const router = express.Router();

const { Employee } = require("./employee.js");
const jwt = require("jsonwebtoken");

//get all employees
router.get(`/api/employees`, (req, res) => {
  Employee.find({}, (err, data) => {
    if (!err) {
      console.log(data);
      res.send(data);
    } else {
      console.log(err);
    }
  });
});


//add new employee
router.post(`/api/employees/add`, async(req, res) => {
  const newEmp = Employee({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    salary: req.body.salary,
  });

try{

 const newUser= await newEmp.save((err, data) => {
    res.status(200).json({
      code: 200,
      message: "employee added succesfully",
      addEmployee: data,
    });
  });

}catch(err){
  console.log(err);
     res.status(400).send("error")
}

});

//get  employee by ID
router.get(`/api/employees/:id`, (req, res) => {
  Employee.findById(req.params.id, (err, data) => {
    if (!err) {
      console.log(data);
      res.send(data);
    } else {
      console.log(err);
    }
  });
});

//update
router.put(`/api/employees/edit/:id`, (req, res) => {
  const updateEmp = {
    name: req.body.name,
    email: req.body.email,

    salary: req.body.salary,
  };

  Employee.findByIdAndUpdate(
    req.params.id,
    { $set: updateEmp },
    { new: true },
    (err, data) => {
      if (!err) {
        res.status(200).json({
          code: 200,
          message: "employee updated succesfully",
          updateEmployee: data,
        });
      } else {
        console.log(err);
      }
    }
  );
});

//delete
router.delete(`/api/employees/:id`, (req, res) => {
  Employee.findByIdAndDelete(req.params.id, (err, data) => {
    if (!err) {
      res.status(200).json({
        code: 200,
        message: "employee deleted succesfully",
        updateEmployee: data,
      });
    } else {
      console.log(err);
    }
  });
});

//////////new//////////////////////

const maxTime=2*24*60*60;
const createToken=(id)=>{

  return jwt.sign({id},"secrt password",{
    expiresIn:maxTime
  });
}

//signUP
router.post(`/api/employees/signup`, async(req, res) => {
  const {name,email,password,salary} = req.body

try{

 let newUser= await Employee.create({name,email,password,salary});
 const token=createToken(newUser._id);
 res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000})
    res.status(200).json({user:newUser._id});
 

}catch(err){
 
     res.status(400).send("error employee is created before")
}

});



module.exports = router;
