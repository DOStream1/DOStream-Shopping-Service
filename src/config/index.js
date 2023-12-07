const dotEnv = require("dotenv");
const fs = require('fs');

// const loadConfigFromK8S = () => {
//   try {
//     const configMapPath = '/etc/config/shopping-config.json'; // Adjust the path accordingly
//     const configMapData = fs.readFileSync(configMapPath, 'utf8');
//     const configMapJson = JSON.parse(configMapData);

//     process.env.PORT = configMapJson.PORT;
//     process.env.MONGODB_URI = configMapJson.MONGODB_URI;
//     process.env.APP_SECRET = configMapJson.APP_SECRET;
//     process.env.BASE_URL = configMapJson.BASE_URL;
//     process.env.EXCHANGE_NAME = configMapJson.EXCHANGE_NAME;
//     process.env.MSG_QUEUE_URL = configMapJson.MSG_QUEUE_URL;
//   } catch (error) {
//     console.error('Error loading configuration from ConfigMap:', error);
//     // Handle the error as needed
//   }
// };

// Load configuration from Kubernetes ConfigMap
// loadConfigFromK8S();

if (process.env.NODE_ENV !== "prod") {
  const configFile = `./.env.${process.env.NODE_ENV}`;
  dotEnv.config({ path: configFile });
} else {
  dotEnv.config();
}

// module.exports = {
//   PORT: process.env.PORT,
//   DB_URL: process.env.MONGODB_URI,
//   APP_SECRET: process.env.APP_SECRET,
//   BASE_URL: process.env.BASE_URL,
//   EXCHANGE_NAME: process.env.EXCHANGE_NAME,
//   MSG_QUEUE_URL: process.env.MSG_QUEUE_URL,
//   CUSTOMER_SERVICE: "customer_service",
//   SHOPPING_SERVICE: "shopping_service",
// };

module.exports = {
  PORT: process.env.PORT,
  DB_URL: 'mongodb://mongodb/msytt_shopping',
  APP_SECRET: 'jg_youtube_tutorial',
  EXCHANGE_NAME: 'ONLINE_STORE',
  PORT: 8003,
  MSG_QUEUE_URL: 'amqp://guest:guest@rabbitmq-service:5672',
  CUSTOMER_SERVICE: "customer_service",
  SHOPPING_SERVICE: "shopping_service",
};