const mongoose = require('mongoose');

const URI = "mongodb+srv://dbUser:dbUser@cluster0.x9334.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async() => {
    await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('db connected...!');

}

module.exports = connectDB;