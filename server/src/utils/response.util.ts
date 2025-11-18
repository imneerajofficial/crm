import { Response } from "express";

export const sendSuccess = <T>(
  res: Response,
  data: T,
  msg = "Success",
  status = 200
) => {
  return res.status(status).json({
    status: true,
    response: data,
    msg: msg,
  });
};

export const sendError = <T>(
  res: Response,
  data: T,
  msg = "Failed",
  status = 500
) => {
  return res.status(status).json({
    status: false,
    response: data,
    msg: msg,
  });
};
