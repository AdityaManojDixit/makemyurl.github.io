import { mongoose } from "mongoose";

const URI = "mongodb+srv://AdityaDixit:SlveUMFEALfdC2Av@cluster0.v5dgwa9.mongodb.net/urlshortner?retryWrites=true&w=majority"

mongoose.connect(URI)
.then(()=>{
    console.log('Connection Established!')
}).catch((error)=>{
    console.log('Failed to connect...');
})