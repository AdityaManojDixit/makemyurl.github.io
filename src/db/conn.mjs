import { mongoose } from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/urlshortner")
.then(()=>{
    console.log('Connection Established!')
}).catch((error)=>{
    console.log('Failed to connect...');
})