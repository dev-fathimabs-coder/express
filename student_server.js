let express = require('express');

//IMPORT CONNECTION CODE & SCHEMA 

let Student = require('./student');
let connectDb = require('./newDb')


let app = express();
app.use(express.json());


//CONNECT DB

connectDb();

//ADD STUDENTS INTO COLLECTION

app.post("/student", async (req, res) => {
    let student = await Student.create(req.body);
    res.json(student);
});

// GET ALL STUDENTS

app.get('/allStudents', async (req, res) => {
    try {
        let details = await Student.find()
        // console.log(details);
        res.send(details)
    } catch (error) {
        console.error(error);
    }
})

//UPDATE STUDENT DETAILS
app.patch('/update/:id', async () => {
    let { id } = req.params
    let { name } = req.body



})

app.listen(3000, () => {
    console.log("Server Connected");

})