-- Add new columns to Skill table
ALTER TABLE "Skill" ADD COLUMN "category" TEXT;
ALTER TABLE "Skill" ADD COLUMN "proficiency" INTEGER;

-- Add new columns to Project table
ALTER TABLE "Project" ADD COLUMN "long_description" TEXT;
ALTER TABLE "Project" ADD COLUMN "category" TEXT;
ALTER TABLE "Project" ADD COLUMN "featured" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "Project" ADD COLUMN "date" TIMESTAMP(3);

-- CreateIndex for faster queries
CREATE INDEX "Skill_category_idx" ON "Skill"("category");
CREATE INDEX "Project_category_idx" ON "Project"("category");
CREATE INDEX "Project_featured_idx" ON "Project"("featured");
