import express, { urlencoded } from "express";
import cors from "cors";
import helmet from "helmet";
import routes from "./router/routes.js";

const server = express();

server.use(cors());
server.use(helmet());
server.use(urlencoded({ extended: true }));
server.use(express.json());

server.use("/", routes);

server.listen(5000, () => {
  console.log(`Servidor rodando em http://localhost/5000`);
});
