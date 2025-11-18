import { Router } from "express";
import {
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getUserById,
} from "../feature_modules/users/user.controller";

const useUsers = Router();

useUsers.get("/", getAllUsers);
useUsers.post("/", createUser);
useUsers.put("/:id", updateUser);
useUsers.get("/:id", getUserById);
useUsers.delete("/:id", deleteUser);

export default useUsers;
