/*
  Warnings:

  - You are about to drop the column `url` on the `Image` table. All the data in the column will be lost.
  - Added the required column `body` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eyebrow` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `heading` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Image" DROP COLUMN "url",
ADD COLUMN     "body" TEXT NOT NULL,
ADD COLUMN     "eyebrow" TEXT NOT NULL,
ADD COLUMN     "heading" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;
