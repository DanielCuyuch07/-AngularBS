'use strict'

const mongoose = require('mongoose');

exports.init=()=>{
    const uriMongo = 'mongodb://127.0.0.1:27017/DBSynapse'
    mongoose.Promise = global.Promise;

    mongoose.connection.on('error', ()=>{
        console.log('MongoDB| Could not connect to mongodb');
        mongoose.disconnect;
    });
    mongoose.connection.on('connecting', ()=>{
        console.log('MongoDB| Try connecting');
    });
    mongoose.connection.on('connected', ()=>{
        console.log('MongoDB| Connected to mongodb');
    });
    mongoose.connection.once('open', ()=>{
        console.log('MongoDB| Connected to database');
    });
   mongoose.connection.on('reconnected', ()=>{
       console.log('MongoDB| Reconnected to mongodb');
   });
   mongoose.connection.on('disconnected', ()=>{
       console.log('MongoDB| Disconnected');
   });

   mongoose.connect(uriMongo, {
    connectTimeoutMS: 2500, // El timepo de conexion
    maxPoolSize: 50,       // El numero maximo de conexiones a mi base de datos
    useNewUrlParser: true
}).catch(err=>console.log(err));

}