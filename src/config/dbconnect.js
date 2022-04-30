import mongoose from "mongoose";

mongoose.connect('mongodb+srv://maumau:mau123mau@cluster0.glne3.mongodb.net/api-maumau')

let db = mongoose.connection;

export default db