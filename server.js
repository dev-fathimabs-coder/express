let express = require('express')
let mongoose = require('mongoose')
let app = express()

app.use(express.json())




mongoose.connect('mongodb://localhost:27017/myDatabase')
    .then(() => console.log("Connected to MongoDB with Mongoose"))
    .catch(err => console.error("Connection error:", err));


// mongodb schema
let userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

let User = mongoose.model('users', userSchema)


let userRoute = express.Router();
let adminRoute = express.Router();


// Attach user router at /user
app.use('/user', userRoute);
app.use('/admin', adminRoute);

adminRoute.get('/', (req, res) => {
    console.log(req.query);
    res.send('admin');
})

adminRoute.get('/profile', (req, res) => {
    console.log(req.query);
    res.send('admin profile');

})



userRoute.post('/profile', async (req, res) => {
    console.log(req.body);
    let { username, email, password } = req.body


    


    let user = new User({
        username,
        email,
        password
    });

    try {
        let result = await user.save()
        console.log(result);
        res.send('user registerd successful')
    } catch (error) {
        console.log(error);

    }




})

userRoute.get('/all', async (req, res) => {

    try {
        let result = await User.find()
        console.log(result);
        res.send(result)
    } catch (error) {

    }

})



let arr = [];
userRoute.post('/add-user', (req, res) => {



    let { email } = req.body

    if (arr.length == 0) {
        console.log('hjkafhaef');

        arr.push(req.body)
        res.send(arr)
        return
    }


    let isExist = false
    for (let i = 0; i < arr.length; i++) {

        // console.log(arr[i]?.email);
        // console.log(email);

        if (arr[i]?.email == email) {
            isExist = true
            break
        }
    }

    if (isExist) {
        res.send('email already exist')
    } else {
        arr.push(req.body)
        res.send(arr)
    }

})




app.listen(3000, () => {
    console.log('server connected');

})