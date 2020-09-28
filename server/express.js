import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import morgan from "morgan";
import config from "./config";

// init the express app
const expressApp = express();
// create a limiter middleware
const limiter = rateLimit(config.express.requestLimit);

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// expressApp.set('trust proxy', 1);

//  apply to all requests
expressApp.use(limiter);

expressApp.use(cors());

// security header
expressApp.use(helmet());

// logger
expressApp.use(morgan("tiny"));

export default expressApp;
