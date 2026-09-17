import prisma from "../../config/db";

class ImageRepository {
  //create image
  async create(data: any) {
    return prisma.image.create({ data });
  }

  // get all images
  async getAll() {
    return prisma.image.findMany({
      select: {
        id: true,
        eyebrow: true,
        heading: true,
        body: true,
        imageUrl: true,
        isActive: true,
      },
    });
  }

  // get image by id
  async getById(id: number) {
    return prisma.image.findUnique({
      where: { id },
      select: {
        id: true,
        eyebrow: true,
        heading: true,
        body: true,
        imageUrl: true,
        isActive: true,
      },
    });
  }

  // update image by id
  async updateById(id: number, data: any) {
    return prisma.image.update({ where: { id }, data });
  }

  // delete image by id
  async deleteById(id: number) {
    return prisma.image.delete({ where: { id } });
  }
  // Public route to get all images

  async getAllPublicImages() {
    return prisma.image.findMany({
      where: { isActive: true },
      select: {
        id: true,
        eyebrow: true,
        heading: true,
        body: true,
        imageUrl: true,
      },
    });
  }
}

export default new ImageRepository();
