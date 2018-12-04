/**
 * Created by lsw on 2018/12/3 0003.
 */
const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
      username:{
        type:String,
        required:true,
        unique:true
      },
      password:{
        type:String,
        required:true
      },
      type:{
        type:String,
        required:true
      }
});

module.exports = mongoose.model('Users',usersSchema);