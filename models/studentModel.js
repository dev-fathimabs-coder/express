let mongoose = require('mongoose')

let studentSchema=new mongoose.Schema({
    name:String,
    age:Number,
    grade:Number,
    subjects:[String],
    isActive:Boolean,
    marks:Number
});

let Student=new mongoose.model('student',studentSchema)

module.exports=Student;

