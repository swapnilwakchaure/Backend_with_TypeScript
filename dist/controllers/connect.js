import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
// const mongoURL: string = String(process.env.mongoURL);
const mongoURL = 'mongodb://swapnilwakchaure:mongodb@ac-hozldxs-shard-00-00.pgstk4w.mongodb.net:27017,ac-hozldxs-shard-00-01.pgstk4w.mongodb.net:27017,ac-hozldxs-shard-00-02.pgstk4w.mongodb.net:27017/eventapp?ssl=true&replicaSet=atlas-rk5qgc-shard-0&authSource=admin&retryWrites=true&w=majority';
console.log('mongoURL: ', mongoURL);
const connection = mongoose.connect(mongoURL);
export { connection };
