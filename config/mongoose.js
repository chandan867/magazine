const mongoose = require('mongoose');
const dotenv=require('dotenv')
dotenv.config();

//
const url=process.env.MONGODB_URL
const ConnectDb = async () => {
  
     try {
       const conn = await mongoose.connect(url, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
   
         useCreateIndex: true,
       });
     //  console.log(`mongodb connected `);
     } catch (error) {
       console.error(`Error ${error.message}`);
       process.exit(1);
     }
   };
   
   module.exports = ConnectDb;
   