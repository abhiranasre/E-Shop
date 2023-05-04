const mongoose = require('mongoose');

const testMod = new mongoose.Schema({
    name:{type:String}
});

module.exports = mongoose.model('testSchema', testMod);