async function studentSignup(req, res) {
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




}


async function getAllUsers(req, res) {

    try {
        let result = await User.find()
        console.log(result);
        res.send(result)
    } catch (error) {

    }

}

let createUser = async (req, res) => {

    let arr = [];

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

}

module.exports = { getAllUsers, studentSignup, createUser }