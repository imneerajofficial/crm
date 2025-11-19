import { ProductModel } from "./product.model";

export const getAllProductService = async () => {
  return await ProductModel.find();
};

export const getProductByIdService = async <T>(id: T) => {
  return await ProductModel.findById(id);
};

export const createProductService = async <T>(data: T) => {
  return await ProductModel.create(data);
};

export const updateProductService = async <T>(
  id: T,
  update_data: Partial<T>
) => {
  return await ProductModel.findByIdAndUpdate(id, update_data, { new: true });
};

export const deleteProductByIdService = async <T>(id: T) => {
  return await ProductModel.findByIdAndDelete(id);
};

export const checkExistProduct = async <T>(email: T) => {
  return await ProductModel.findOne({ email: email });
};
