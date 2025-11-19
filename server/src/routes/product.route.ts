import { createRouter } from "../utils/router.util";
import {
  createProduct,
  updateProduct,
  getAllProduct,
  getProductById,
  deleteProduct,
} from "../feature_modules/products/product.controller";
export const productRouter = createRouter();

productRouter.get("/", getAllProduct);
productRouter.post("/", createProduct);
productRouter.get("/:id", getProductById);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);
