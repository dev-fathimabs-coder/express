let express = require('express')
let mongoose = require('mongoose');
const userRoute = require('./routes/studentRoute');
const adminRoute = require('./routes/adminRoute');
const mongoDBConnect = require('./config/mongoDB');
let app = express()

app.use(express.json())



mongoDBConnect()










// Attach user router at /user
app.use('/user', userRoute);
app.use('/admin', adminRoute);






app.listen(3000, () => {
    console.log('server connected');

})