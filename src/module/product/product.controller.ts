import AppError from "../../utils/AppError.js";
import { catchAsync } from "../../utils/catchAsync.js";
import productService from "./product.service.js";
import { productValidation } from "./product.validation.js";

const requireParamId = (id: string | string[] | undefined): number => {
  if (typeof id !== "string" || !id.trim()) {
    throw new AppError("Category id is required", 400);
  }

  const parsedId = Number(id);
  if (!Number.isInteger(parsedId) || parsedId <= 0) {
    throw new AppError("Category id must be a valid number", 400);
  }

  return parsedId;
};

class ProductController {
  // create
  createProduct = catchAsync(async (req, res) => {
    const validatedData = await productValidation.validateAsync(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });
    await productService.create(validatedData);
    res
      .status(201)
      .json({ success: true, message: "Product Created successfully" });
  });

  // get all
  getAllProducts = catchAsync(async (req, res) => {
    const products = await productService.getAll();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: products,
    });
  });

  // get by id
  getProductById = catchAsync(async (req, res) => {
    const id = requireParamId(req.params.id);
    const products = await productService.getById(id);
    res.status(200).json({
      success: true,
      message: "Products retrieved successfully",
      data: products,
    });
  });

  // update by id
  updateProductById = catchAsync(async (req, res) => {
    const id = requireParamId(req.params.id);
    const validatedData = await productValidation.validateAsync(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });
    const product = await productService.updateById(id, validatedData);
    res.status(200).json({
      success: true,
      message: "Products updated successfully",
      data: product,
    });
  });

  // delete by id
  deleteProductById = catchAsync(async (req, res) => {
    const id = requireParamId(req.params.id);
    await productService.deleteById(id);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  });
  // Public route to get all products
  getAllPublicProducts = catchAsync(async (req, res) => {
    const products = await productService.getAllPublicProducts();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: products,
    });
  })
}

export default new ProductController();
