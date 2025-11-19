import {
  getAllDataService,
  getDataByIdService,
  createUserService,
  updateUserService,
  deleteByIdService,
  checkExistUser,
} from "./user.service";
import { Request, Response } from "express";
import { sendSuccess, sendError } from "../../utils/response.util";

export const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const { email } = userData;
    const checkExist = await checkExistUser(email);
    if (checkExist)
      return sendError(
        res,
        checkExist,
        "User already exist with this email",
        409
      );
    const created = await createUserService(userData);
    if (created)
      return sendSuccess(res, created, "User successfully created", 201);
    return sendError(res, {}, "User creation failed", 400);
  } catch (error: any) {
    return sendError(res, error, error.message, 500);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const updated = await updateUserService(userId, req.body);
    if (updated)
      return sendSuccess(res, updated, "User successfully updated", 200);
    return sendError(res, {}, "User Updation Failed", 400);
  } catch (error: any) {
    return sendError(res, error, error.message, 500);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const userData = await getDataByIdService(userId);
    if (userData) return sendSuccess(res, userData, "User record found", 200);
    return sendError(res, {}, "no record found", 404);
  } catch (error: any) {
    return sendError(res, error, error.message, 500);
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await getAllDataService();
    if (allUsers) return sendSuccess(res, allUsers, "Record found", 200);
    return sendError(res, {}, "no record found", 404);
  } catch (error: any) {
    return sendError(res, error, error.message, 500);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const deleted = await deleteByIdService(userId);
    if (deleted)
      return sendSuccess(res, deleted, "User successfully deleted", 200);
    return sendError(res, {}, "User not found", 400);
  } catch (error: any) {
    return sendError(res, error, error.message, 500);
  }
};
