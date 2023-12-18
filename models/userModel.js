import  mongoose, { mongo } from "mongoose";

const userSchema = mongoose.Schema({
    userName:{
        type: String,
        required: [true, "must provide a username"],
        unique: [true, "must be unique"]
    },
    email:{
        type: String,
        required: [true, "must provide an email"],
        unique: [true, "must be unique"]
    },
    password: {
        type: String,
        required: [true, "must provide a password"],
    },
},
{
    timestamps: true
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;