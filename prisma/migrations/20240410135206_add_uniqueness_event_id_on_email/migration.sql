/*
  Warnings:

  - A unique constraint covering the columns `[eventId,email]` on the table `attendee` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "attendee_eventId_email_key" ON "attendee"("eventId", "email");
