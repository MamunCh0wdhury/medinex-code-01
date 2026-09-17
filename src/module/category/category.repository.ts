import prisma from "../../config/db";

class CategoryRepository {
  //create category
  async create(data: any) {
    // return Category.create(data);
    return prisma.category.create({ data });
  }

  // get all category
  async getAll() {
    return prisma.category.findMany({
      select: { id: true, name: true, isActive: true },
    });
  }

  // get category by id
  async getById(id: number) {
    // return db.orm.public.Category.where({id}).first()
    return prisma.category.findUnique({
      where: { id },
      select: { id: true, name: true, isActive: true },
    });
  }

  // update category by id
  async updateById(id: number, data: any) {
    // return db.orm.public.Category.where({id}).update(data);
    return prisma.category.update({ where: { id }, data });
  }

  // delete category by id
  async deleteById(id: number) {
    // return db.orm.public.Category.where({id}).delete();
    return prisma.category.delete({ where: { id } });
  }

  // Public Routes
    async getAllPublic() {
    return prisma.category.findMany({
      where: { isActive: true },
      select: { id: true, name: true, isActive: true },
    });
  }
}

export default new CategoryRepository();
