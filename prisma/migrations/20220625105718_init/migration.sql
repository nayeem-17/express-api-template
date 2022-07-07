-- CreateTable
CREATE TABLE "users" (
    "user_id" SERIAL NOT NULL,
    "login" VARCHAR(512),
    "password" VARCHAR(512),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT timezone('UTC+6'::text, CURRENT_TIMESTAMP),
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT timezone('UTC+6'::text, CURRENT_TIMESTAMP),

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);
