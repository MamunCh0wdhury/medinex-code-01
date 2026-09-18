import AppError from "../../utils/AppError.js";
import imageRepository from "./image.repository.js";

class ImageService {
  // create image
  async create(data: any) {
    return await imageRepository.create(data);
  }

  // get all images
    async getAll() {
      return await imageRepository.getAll();
    }

  // get by Id
  async getById(id: number) {
    const image = await imageRepository.getById(id);
    if (!image) {
      throw new AppError("Id not found", 404);
    }
    return image;
  }

  // update image by id
  async updateById(id: number, data: any) {
    const image = await this.getById(id);
    if (!image) {
      throw new AppError("Id not found", 404);
    }
    return await imageRepository.updateById(id, data);
  }

  // delete image by id
  async deleteById(id: number) {
    const image = await this.getById(id);
    if (!image) {
      throw new AppError("Id not found", 404);
    }
    return await imageRepository.deleteById(id);
  }
  // Public route to get all images
  async getAllPublicImages() {
    return await imageRepository.getAllPublicImages();
  }
}

export default new ImageService();
