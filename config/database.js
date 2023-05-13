const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://demo:demo@favmovies.zc3p8yh.mongodb.net/', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectDB