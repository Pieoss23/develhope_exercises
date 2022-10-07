/*
  Warnings:

  - You are about to drop the column `updateAt` on the `Planet` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Planet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Planet" DROP COLUMN "updateAt",
ADD COLUMN     "photoFilename" VARCHAR(255),
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
