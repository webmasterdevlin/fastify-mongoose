require("dotenv").config();
import fastify from "fastify";
import mongoose from "mongoose";
import { Options } from "./config/swagger";
import env from "./config";
import fastifySwagger from "fastify-swagger";
import routes from "./routes";

// configure HTTP server
const app = fastify({ logger: true });

// register Swagger UI
app.register(fastifySwagger, Options);

// require("./routes/")(app);
routes.forEach(r => app.route(r));

const start = async (): Promise<void> => {
  try {
    await app.listen(env.APP_PORT);
    app.swagger();
  } catch (e) {
    app.log.error(e);
    process.exit(1);
  }
};

start()
  .then(() => {
    // configure DB
    if (process.env.NODE_ENV !== "test") {
      mongoose
        .connect(`mongodb://${env.DB_HOST}:${env.DB_NAME}`, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        })
        .then(() => app.log.info("MongoDB connected..."))
        .catch(e => app.log.error(e));
    }
  })
  .catch(e => app.log.error(e));
