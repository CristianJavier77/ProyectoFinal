import mongoose from 'mongoose'


async function init() {

     await mongoose.connect(process.env.STRING_CONNECTION_ONLINE, {
          useNewUrlParser: true,
          useUnifiedTopology: true
     })
     console.log('Database is connected sucefully');
}


export default init
