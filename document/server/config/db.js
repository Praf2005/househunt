const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

module.exports = async () => {
  const mongoUri = process.env.MONGO_URI;

  if (mongoUri) {
    await mongoose.connect(mongoUri);
    console.log('MongoDB connected');
    return;
  }

  const mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  await mongoose.connect(uri);
  console.log('MongoDB connected via in-memory server');
};
