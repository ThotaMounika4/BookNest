const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/BookStore')
  .then(() => {
    console.log('Successfully connected to MongoDB!');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// You can also listen for connection events after the initial connection attempt
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to DB');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected from DB');
});

// Optional: Close the Mongoose connection if the Node process ends
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('Mongoose connection disconnected through app termination');
  process.exit(0);
});