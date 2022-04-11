const mongoose = require('mongoose');
const { config } = require('../config/secret');

main().catch(err => console.log(err));

async function main() {
  //                            connect to local DB
  // await mongoose.connect('mongodb://localhost:27017/feb22');

  //                         connect to my ATLAS DB
  await mongoose.connect(`mongodb+srv://${config.userMongo}:${config.passMongo}@cluster0.i9y4f.mongodb.net/feb22`);
  console.log("mongo connect feb22  Atlas...")
}










