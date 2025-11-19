import { Router, RouterOptions } from "express";

export const createRouter = (options?: RouterOptions): Router => {
  return Router(options);
};
