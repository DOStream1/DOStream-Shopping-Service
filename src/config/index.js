const dotEnv = require("dotenv");

if (process.env.NODE_ENV !== "prod") {
  const configFile = `./.env.${process.env.NODE_ENV}`;
  dotEnv.config({ path: configFile });
} else {
  dotEnv.config();
}

console.log("Loaded environment variables:", process.env);

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
  PORT: 8003,
  DB_URL: 'mongodb://nosql-db-service:27017/msytt_shopping',
  APP_SECRET: jg_youtube_tutorial,
  BASE_URL: process.env.BASE_URL,
  EXCHANGE_NAME: 'ONLINE_STORE',
  MSG_QUEUE_URL: 'amqp://guest:guest@rabbitmq-service/',
  CUSTOMER_SERVICE: "customer_service",
  SHOPPING_SERVICE: "shopping_service",
};
