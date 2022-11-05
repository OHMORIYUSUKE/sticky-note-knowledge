import { book, PrismaClient, stickyNote, user } from "@prisma/client";
import { trpc } from "../trpc";

const getBookAndstickyNote = (
  bookId: string
): { book: book; stickyNote: stickyNote[] } => {
  const stickyNotedata = trpc.useQuery([
    "getStickyNoteByBookId",
    { id: bookId },
  ]);
  const bookData = trpc.useQuery(["getBookById", { id: bookId }]);
  return {
    book: bookData.data!,
    stickyNote: stickyNotedata.data!,
  };
};

export default getBookAndstickyNote;
