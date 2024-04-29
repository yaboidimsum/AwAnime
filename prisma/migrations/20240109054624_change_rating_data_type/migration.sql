/*
  Warnings:

  - You are about to alter the column `rating` on the `comment` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(3,2)`.

*/
-- AlterTable
ALTER TABLE `comment` MODIFY `rating` DECIMAL(3, 2) NOT NULL;
