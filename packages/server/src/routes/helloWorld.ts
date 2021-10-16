import { Router } from "express";
import { asyncWrapper } from "../util/request";

const router = Router();

const BASE_URL = "/hello-world";

router.get(
  "/",
  asyncWrapper(async () => {
    return "Hello world! From backend";
  })
);

export default {
  BASE_URL,
  router,
};
