// const mongoose =   require("mongoose")

// const DB_connection = async (req, res) => {
//     await mongoose.connect("mongodb+srv://vivekprajapati:Vivek4882@cluster0.8gt3oqs.mongodb.net/Admin_panel")
//     .then( 
//         console.log("connection successfully ")
//     )
//     .catch((err) =>  console.log(err))
// }

// module.exports = DB_connection;



const mongoose = require("mongoose");

const database = () => {
  mongoose.connect(
      "mongodb+srv://vivekprajapati:Vivek4882@cluster0.8gt3oqs.mongodb.net/Admin_panel",{
    })
    .then(() => {
      console.log("Connected to the database");
    })
    .catch((err) => {
      console.log("Error connecting to the database", err);
    });
};

module.exports = database();
