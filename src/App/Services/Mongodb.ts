import mongoose, { Connection } from "mongoose"

export const connection = () => new Promise((resolve, reject) => {
  mongoose.connect(process.env.URL_MONGODB as string || 'mongodb://paiva:96521183zZ@192.168.1.79:27017/rifas')
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));

  const db: Connection = mongoose.connection
  db.on('error', error => {
    console.log('Error connecting to database.`')
    reject(error)
  })
  db.once('open', () => {
    console.log(`Connection to dabatase successfull.`);
    resolve(mongoose);
  })
})
export const close = (): Promise<void> => mongoose.connection.close()
