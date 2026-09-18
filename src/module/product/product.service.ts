import AppError from "../../utils/AppError.js";
import productRepository from "./product.repository.js";

class ProductService {
  // create category
  async create(data: any) {
    return await productRepository.create(data);
  }

  // get all category
    async getAll() {
      return await productRepository.getAll();
    }

  // get by Id
  async getById(id: number) {
    const category = await productRepository.getById(id);
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
    return await productRepository.updateById(id, data);
  }

  // delete category by id
  async deleteById(id: number) {
    const category = await this.getById(id);
    if (!category) {
      throw new AppError("Id not found", 404);
    }
    return await productRepository.deleteById(id);
  }
  // Public route to get all products
  async getAllPublicProducts() {
    return await productRepository.getAllPublicProducts();
  }
}

export default new ProductService();
