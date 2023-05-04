const mongoose = require('mongoose');


module.exports = async () =>{

    try {
        await mongoose.connect(process.env.DB_URL);
        console.log(`MongoDb successfully connected`);
    } catch (err) {
        console.log(`MongoDb failed to connect -${err}`);
        throw new Error(err);
    }
}
