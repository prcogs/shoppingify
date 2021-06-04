

const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  api_username: process.env.API_USERNAME,
  api_key: process.env.API_KEY,
  app_url_dev: process.env.APP_URL_DEV,
  app_url_production: process.env.APP_URL_PRODUCTION,
};