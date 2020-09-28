import mongoose from "mongoose";
import models from "./models";
import config from "./config";
import createUserSeeds from "./seeds/user.seed";

const connectToDatabase = (needSeed) => {
  mongoose.set("useFindAndModify", false);
  mongoose.set("useNewUrlParser", true);
  mongoose.set("useUnifiedTopology", true);
  mongoose.set("useCreateIndex", true);
  mongoose.set("debug", config.mongodb.debug);

  needSeed && clearAndSeed();

  return mongoose.connect(config.app.dbUrl);
};

const clearAndSeed = async () => {
  console.info("Prepare database for testing");
  // clear db
  await Promise.all([models.User.deleteMany({})]);
  // seed data
  await createUserSeeds(models);
};

export default connectToDatabase;
