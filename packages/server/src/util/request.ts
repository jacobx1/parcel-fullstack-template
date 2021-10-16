import { Request, Response } from "express";

type HandlerFunc<T> = (req: Request, res: Response) => Promise<T>;

export class RequestError extends Error {
  constructor(public errorMessage: string, public statusCode: number = 400) {
    super(`${statusCode}: ${errorMessage}`);
  }
}

export const asyncWrapper =
  <T>(handler: HandlerFunc<T>) =>
  (req: Request, res: Response) => {
    handler(req, res)
      .then((result) => {
        if (result === undefined) {
          res.send();
        } else {
          res.json(result);
        }
      })
      .catch((error) => {
        console.error(error);
        if (error instanceof RequestError) {
          res.status(error.statusCode).send({
            message: error.errorMessage,
          });
        } else {
          res.status(500).json({
            error: `${error}`,
          });
        }
      });
  };
