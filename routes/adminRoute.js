let express = require('express')

let adminRoute = express.Router();

adminRoute.get('/', (req, res) => {
    console.log(req.query);
    res.send('admin');
})

adminRoute.get('/profile', (req, res) => {
    console.log(req.query);
    res.send('admin profile');

})

module.exports = adminRoute