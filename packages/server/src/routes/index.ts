import express from "express";
import path from "path";
import helloWorld from "./helloWorld";

const apis = [helloWorld];

const router = express.Router();

apis.forEach((api) => {
  router.use(`/api${api.BASE_URL}`, api.router);
});

const indexHtml = require.resolve("client/dist/index.html");

router.use(express.static(path.dirname(indexHtml)));
router.use("/*", (req, res) => {
  res.sendFile(indexHtml);
});

export default router;
