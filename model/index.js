/**
 * Created by lsw on 2018/12/3 0003.
 */
const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({

});

module.exports = mongoose.model('Users',usersSchema)