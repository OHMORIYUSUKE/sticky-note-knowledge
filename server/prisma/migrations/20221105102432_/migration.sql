-- CreateTable
CREATE TABLE `stickyNoteLike` (
    `userId` VARCHAR(191) NOT NULL,
    `stickyNoteId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `stickyNoteLike_userId_stickyNoteId_key`(`userId`, `stickyNoteId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
