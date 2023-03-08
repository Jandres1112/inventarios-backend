const mongoose = require('mongoose');

const getConnection = async () => {

    try {

        const url = 'mongodb://admin:Jandres1112@ac-qejkzfa-shard-00-00.frezm2j.mongodb.net:27017,ac-qejkzfa-shard-00-01.frezm2j.mongodb.net:27017,ac-qejkzfa-shard-00-02.frezm2j.mongodb.net:27017/inventarios?ssl=true&replicaSet=atlas-xfqwyj-shard-0&authSource=admin&retryWrites=true&w=majority';
        await mongoose.connect (url);
        console.log('conexión exitosa'); 
    } catch (error) {

        console.log(error); 

    }

}

module.exports = {
    getConnection,
   }