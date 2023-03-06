import mongoose from 'mongoose'

async function connectToMongo() {
  const connString = process.env.MONGO_URI

  if (!connString) {
    throw new Error('Missing environment variable: "MONGO_URI"')
  }

  return mongoose.connect(connString)
}

export default connectToMongo