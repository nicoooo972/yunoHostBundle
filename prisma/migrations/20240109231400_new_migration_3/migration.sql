/*
  Warnings:

  - You are about to drop the column `description` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `logo` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `version` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `nbApp` on the `Bundle` table. All the data in the column will be lost.
  - Added the required column `admin` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `appName` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `domain` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `path` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Application_title_key";

-- AlterTable
ALTER TABLE "Application" DROP COLUMN "description",
DROP COLUMN "logo",
DROP COLUMN "size",
DROP COLUMN "title",
DROP COLUMN "version",
ADD COLUMN     "admin" TEXT NOT NULL,
ADD COLUMN     "appName" TEXT NOT NULL,
ADD COLUMN     "domain" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "path" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Bundle" DROP COLUMN "nbApp";
