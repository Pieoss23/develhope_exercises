
-- AlterTable
ALTER TABLE "Planet" DROP COLUMN "updateAt",
ADD COLUMN     "photoFilename" VARCHAR(255),
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
