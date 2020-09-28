const dev = process.env.NODE_ENV === "development";
const test = process.env.NODE_ENV === "test";

const defaultBaseUrl = `http://localhost:${process.env.PORT || 3000}`;

const dbUrl = test ? process.env.TEST_DATABASE_URL : process.env.DATABASE_URL;
/**
 * app
 * general configs for the whole apps
 */
const app = {
  port: process.env.PORT || 3000,
  baseUrl: dev ? defaultBaseUrl : process.env.BASE_URL,
  dbUrl
};
/**
 * mongodb
 * configs to set some parameter before connect
 */
const mongodb = {
  debug: process.env.MONGODB_DEBUG || false
};
/**
 * express
 * configs to set some middlewares parameter
 */
const express = {
  requestLimit: {
    // limit http request to the server
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 900 // limit each IP to 900 requests per windowMs (60 request / minute)
  }
};
/**
 * githubOAuth
 * configs to be authenticated to github apis
 */
// const githubOAuth = {
//   githubClient: process.env.GITHUB_KEY,
//   githubSecret: process.env.GITHUB_SECRET,
//   baseURL: app.baseUrl,
//   loginURI: "/auth/github",
//   callbackURI: "/auth/github/callback",
//   scope: "user:email",
//   allow_signup: true
// };

const redis = {
  port: process.env.REDIS_PORT || 6379, // replace with your port
  host: process.env.REDIS_HOST || "120.0.0.1", // replace with your hostanme or IP address
  password: process.env.REDIS_PASSWORD || "your password" // replace with your password
};

// register sub config
const config = {
  app,
  mongodb,
  express,
  redis
};
// one point to exports all config
export default config;
