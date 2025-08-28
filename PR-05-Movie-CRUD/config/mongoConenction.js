

    const mongoose = require('mongoose');

    const database = () =>{
        mongoose.connect('mongodb+srv://vivekprajapati:Vivek4882@cluster0.8gt3oqs.mongodb.net/movies', { 
        }).then(() => {
            console.log('Connected to the database');
        }).catch((err) => {
            console.log('Error connecting to the database', err);   
        }
        )    
    }

    module.exports = database;
    
    