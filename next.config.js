const withImages = require('next-images');
/** @type {import('next').NextConfig} */
const fs = require('fs');

const dotenv = require('dotenv');
const env = dotenv.parse(fs.readFileSync('.env'));

module.exports = withImages({
  reactStrictMode: true,
  esModule: true,
  env: env
});
