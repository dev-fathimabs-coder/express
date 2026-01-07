let express = require('express');
const { studentSignup, getAllUsers, createUser } = require('../controllers/studentsController');

let userRoute = express.Router();

userRoute.post('/profile', studentSignup)

userRoute.get('/all', getAllUsers)



userRoute.post('/add-user', createUser)

module.exports = userRoute