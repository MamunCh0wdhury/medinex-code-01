import express from 'express';
import categoryController from '../module/category/category.controller.js';
import productController from '../module/product/product.controller.js';
import imageController from '../module/image/image.controller.js';
const router = express.Router();

router.route("/category").post(categoryController.createCategory);
router.route("/category").get(categoryController.getAllCategories);
router.route("/category/:id").get(categoryController.getCategoryById);
router.route("/category/:id").put(categoryController.updateCategoryById);
router.route("/category/:id").delete(categoryController.deleteCategoryById);
// Public Routes
router.route("/categories").get(categoryController.getPublicCategories);

router.route("/product").post(productController.createProduct);
router.route("/product").get(productController.getAllProducts);
router.route("/product/:id").get(productController.getProductById  );
router.route("/product/:id").put(productController.updateProductById);
router.route("/product/:id").delete(productController  .deleteProductById);
// Public Routes
router.route("/products").get(productController.getAllPublicProducts);


router.route("/image").post(imageController.createImage);
router.route("/image").get(imageController.getAllImages);
router.route("/image/:id").get(imageController.getImageById);
router.route("/image/:id").put(imageController.updateImageById);
router.route("/image/:id").delete(imageController.deleteImageById);
// Public Routes
router.route("/images").get(imageController.getAllPublicImages);

export default router;

