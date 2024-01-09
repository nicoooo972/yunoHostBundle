-- CreateTable
CREATE TABLE "Bundle" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "nbApp" INTEGER NOT NULL,

    CONSTRAINT "Bundle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Application" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "logo" TEXT,
    "size" INTEGER NOT NULL,
    "version" INTEGER NOT NULL,
    "bundleId" INTEGER NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bundle_title_key" ON "Bundle"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Application_title_key" ON "Application"("title");

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_bundleId_fkey" FOREIGN KEY ("bundleId") REFERENCES "Bundle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
