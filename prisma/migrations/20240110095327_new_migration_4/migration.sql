/*
  Warnings:

  - Added the required column `description` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `version` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Application" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "size" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "version" TEXT NOT NULL;
