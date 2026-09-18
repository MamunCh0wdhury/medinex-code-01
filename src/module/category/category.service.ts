import AppError from "../../utils/AppError.js";
import categoryRepository from "./category.repository.js";

class CategoryService {
  // create category
  async create(data: any) {
    return await categoryRepository.create(data);
  }

  // get all category
  async getAll() {
    return await categoryRepository.getAll();
  }

  // get by Id
  async getById(id: number) {
    const category = await categoryRepository.getById(id);
    if (!category) {
      throw new AppError("Id not found", 404);
    }
    return category;
  }

  // update category by id
  async updateById(id: number, data: any) {
    const category = await this.getById(id);
    if (!category) {
      throw new AppError("Id not found", 404);
    }
    return await categoryRepository.updateById(id, data);
  }

  // delete category by id
  async deleteById(id: number) {
    const category = await this.getById(id);
    if (!category) {
      throw new AppError("Id not found", 404);
    }
    return await categoryRepository.deleteById(id);
  }

  // Public Routes
  async getAllPublicCategories() {
    return await categoryRepository.getAllPublic();
  }
}

export default new CategoryService();
