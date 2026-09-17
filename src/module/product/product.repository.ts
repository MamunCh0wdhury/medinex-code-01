import prisma from "../../config/db";

class productRepository {
  //create product
  async create(data: any) {
    return prisma.product.create({ data });
  }

  // get all product
  async getAll() {
    return prisma.product.findMany({
      select: {
        id: true,
        name: true,
        model: true,
        description: true,
        imageUrl: true,
        isActive: true,
        category: true,
      },
    });
  }

  // get product by id
  async getById(id: number) {
    return prisma.product.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        model: true,
        description: true,
        imageUrl: true,
        isActive: true,
        category: true,
      },
    });
  }

  // update product by id
  async updateById(id: number, data: any) {
    return prisma.product.update({ where: { id }, data });
  }

  // delete product by id
  async deleteById(id: number) {
    return prisma.product.delete({ where: { id } });
  }
  // Public route to get all products
  async getAllPublicProducts() {
    return prisma.product.findMany({
      where: { isActive: true },
      select: {
        id: true,
        name: true,
        model: true,
        description: true,
        imageUrl: true,
        isActive: true,
        category:true
      },
    });
  }
}

export default new productRepository();
