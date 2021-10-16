import { json } from "body-parser";
import express from "express";
import routes from "./routes";
import { Server } from "http";
import { AddressInfo } from "net";
import open from "open";

const App = express();

App.use(json());
App.use(routes);

const startWebserver = () =>
  new Promise<Server>((resolve, reject) => {
    try {
      const server = App.listen(0, "localhost", () => {
        const { address, port } = server.address() as AddressInfo;
        const url = `http://${address}:${port}`;
        console.log("Running:", url);
        open(url);
        resolve(server);
      });

      server.keepAliveTimeout = 60000 * 2;
    } catch (error) {
      reject(error);
    }
  });

startWebserver().catch(console.error);
