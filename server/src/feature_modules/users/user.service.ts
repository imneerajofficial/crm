import { UserModel } from "./user.model";
export const getAllDataService = async () => {
  return await UserModel.find();
};

export const getDataByIdService = async <T>(id: string) => {
  // console.log(id);
  return await UserModel.findById(id);
};

export const createUserService = async <T>(data: T) => {
  return await UserModel.create(data);
};

export const updateUserService = async <T>(id: string, data: Partial<T>) => {
  return await UserModel.findByIdAndUpdate(id, data, { new: true });
};

export const deleteByIdService = async <T>(id: string) => {
  return await UserModel.findByIdAndDelete(id);
};

export const checkExistUser = async <T>(email: string) => {
  return await UserModel.findOne({ email: email });
};
