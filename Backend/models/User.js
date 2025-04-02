import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    role : {
        type : String,
        default : 'user'
    }
})

const User = mongoose.model('User',UserSchema);

// module.exports = User   //We are using ES module syntax so we cannot export like this instead of this we use 
export default User