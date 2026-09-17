import AppError from "../../utils/AppError";
import { catchAsync } from "../../utils/catchAsync";
import categoryService from "./category.service";
import { categoryValidation } from "./category.validation";

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

class CategoryController {
  // create
  createCategory = catchAsync(async (req, res) => {
    const validatedData = await categoryValidation.validateAsync(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });
    await categoryService.create(validatedData);
    res
      .status(201)
      .json({ success: true, message: "Category Created successfully" });
  });

  // get all
  getAllCategories = catchAsync(async (req, res) => {
    const categories = await categoryService.getAll();
    res.status(200).json({
      success: true,
      message: "Categories fetched successfully",
      data: categories,
    });
  });

  // get by id
  getCategoryById = catchAsync(async (req, res) => {
    const id = requireParamId(req.params.id);
    const category = await categoryService.getById(id);
    res.status(200).json({
      success: true,
      message: "Category retrieved successfully",
      data: category,
    });
  });

  // update by id
  updateCategoryById = catchAsync(async (req, res) => {
    const id = requireParamId(req.params.id);
    const validatedData = await categoryValidation.validateAsync(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });
    const category = await categoryService.updateById(id, validatedData);
    res.status(200).json({
      success: true,
      message: "Category updated successfully",
      data: category,
    });
  });

  // delete by id
  deleteCategoryById = catchAsync(async (req, res) => {
    const id = requireParamId(req.params.id);
    await categoryService.deleteById(id);
    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
    });
  });

  // Public Routes
  getPublicCategories = catchAsync(async (req, res) => {
    const categories = await categoryService.getAllPublicCategories();
    res.status(200).json({
      success: true,
      message: "Public categories fetched successfully",
      data: categories,
    });
  })
}

export default new CategoryController();
