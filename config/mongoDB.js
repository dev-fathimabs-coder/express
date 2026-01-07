

function mongoDBConnect() {

    mongoose.connect('mongodb://localhost:27017/myDatabase')
        .then(() => console.log("Connected to MongoDB with Mongoose"))
        .catch(err => console.error("Connection error:", err));
}

module.exports = mongoDBConnect