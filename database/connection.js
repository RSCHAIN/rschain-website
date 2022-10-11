const MONGO_URL="mongodb+srv://LombRoot:Admin%40%40123@cluster0.exlah24.mongodb.net/?retryWrites=true&w=majority"
                 

import mongoose from "mongoose";

const connectMongo = async() => {
    try{

        const{connection}= await mongoose.connect(MONGO_URL)

        if (connection.readyState == 1){
            console.log("Database Connected")
        }

    }catch(errors) {

        return Promise.reject(errors)   

    }
}

export default connectMongo ;