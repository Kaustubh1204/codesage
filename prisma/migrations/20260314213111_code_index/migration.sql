-- CreateTable
CREATE TABLE "CodeFile" (
    "id" SERIAL NOT NULL,
    "repoName" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CodeFile_pkey" PRIMARY KEY ("id")
);
