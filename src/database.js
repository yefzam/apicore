import mongoose from 'mongoose';

mongoose
  .connect('mongodb://localhost:27017/testdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('Db is connected'))
  .catch((err) => console.log(err));
