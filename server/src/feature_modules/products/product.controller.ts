import {
  createProductService,
  updateProductService,
  getAllProductService,
  getProductByIdService,
  deleteProductByIdService,
  checkExistProduct,
} from "./product.service";

import { Request, Response } from "express";

import { sendSuccess, sendError } from "../../utils/response.util";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    console.log(name);
    const isProductExist = await checkExistProduct(name);
    if (isProductExist)
      return sendError(
        res,
        isProductExist,
        "This product name already exists",
        409
      );
    const created = await createProductService(req.body);
    if (created)
      return sendSuccess(res, created, "Product successfully created", 201);
    return sendError(res, {}, "Unable to create", 400);
  } catch (error: any) {
    return sendError(res, error, error.message, 500);
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const productID = req.params.id;
    const updated = await updateProductService(productID, req.body);
    if (updated)
      return sendSuccess(res, updated, "Product successfully updated", 200);
    return sendError(res, {}, "Unable to update", 400);
  } catch (error: any) {
    return sendError(res, error, error.message, 500);
  }
};

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const allData = await getAllProductService();
    if (allData) return sendSuccess(res, allData, "record found", 200);
    return sendError(res, {}, "no record found", 404);
  } catch (error: any) {
    return sendError(res, error, error.message, 500);
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const productID = req.params.id;
    const product = await getProductByIdService(productID);
    if (product) return sendSuccess(res, product, "record found", 200);
    return sendError(res, {}, "no record found", 404);
  } catch (error: any) {
    return sendError(res, error, error.message, 500);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const deleteID = req.params.id;
    const deleted = await deleteProductByIdService(deleteID);
    if (deleted)
      return sendSuccess(res, deleted, "Product successfully deleted", 200);
    return sendError(res, {}, "no record found", 404);
  } catch (error: any) {
    return sendError(res, error, error.message, 500);
  }
};
