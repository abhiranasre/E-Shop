require('custom-env').env('local');
const app = require('./app')
const mongoose = require('./config/mongoose');
const PORT = process.env.PORT


async function StartServer() {
  try {
    await mongoose();
    server = app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  } catch (error) {
    console.error(`Failed to start server: ${error}`);
    process.exit(-1);
  }
}

StartServer();