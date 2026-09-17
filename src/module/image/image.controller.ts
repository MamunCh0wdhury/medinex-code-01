import AppError from "../../utils/AppError";
import { catchAsync } from "../../utils/catchAsync";
import imageService from "./image.service";
import { imageValidation } from "./image.validation";

const requireParamId = (id: string | string[] | undefined): number => {
  if (typeof id !== "string" || !id.trim()) {
    throw new AppError("Image id is required", 400);
  }

  const parsedId = Number(id);
  if (!Number.isInteger(parsedId) || parsedId <= 0) {
    throw new AppError("Image id must be a valid number", 400);
  }

  return parsedId;
};

class ImageController {
  // create
  createImage = catchAsync(async (req, res) => {
    const validatedData = await imageValidation.validateAsync(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });
    await imageService.create(validatedData);
    res
      .status(201)
      .json({ success: true, message: "Image Created successfully" });
  });

  // get all
  getAllImages = catchAsync(async (req, res) => {
    const images = await imageService.getAll();
    res.status(200).json({
      success: true,
      message: "Images fetched successfully",
      data: images,
    });
  });

  // get by id
  getImageById = catchAsync(async (req, res) => {
    const id = requireParamId(req.params.id);
    const images = await imageService.getById(id);
    res.status(200).json({
      success: true,
      message: "Images retrieved successfully",
      data: images,
    });
  });

  // update by id
  updateImageById = catchAsync(async (req, res) => {
    const id = requireParamId(req.params.id);
    const validatedData = await imageValidation.validateAsync(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });
    const image = await imageService.updateById(id, validatedData);
    res.status(200).json({
      success: true,
      message: "Images updated successfully",
      data: image,
    });
  });

  // delete by id
  deleteImageById = catchAsync(async (req, res) => {
    const id = requireParamId(req.params.id);
    await imageService.deleteById(id);
    res.status(200).json({
      success: true,
      message: "Image deleted successfully",
    });
  });
  // Public route to get all images
  getAllPublicImages = catchAsync(async (req, res) => {
    const images = await imageService.getAllPublicImages();
    res.status(200).json({
      success: true,
      message: "Images fetched successfully",
      data: images,
    });
  })
}

export default new ImageController();
