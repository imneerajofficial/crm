import { Router } from "express";

import {
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getUserById,
} from "../feature_modules/users/user.controller";

export const userRouter = Router();
userRouter.get("/", getAllUsers);
userRouter.post("/", createUser);
userRouter.put("/:id", updateUser);
userRouter.get("/:id", getUserById);
userRouter.delete("/:id", deleteUser);
