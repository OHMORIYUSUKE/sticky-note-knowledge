import { book, PrismaClient, stickyNote, user } from "@prisma/client";
import { trpc } from "../trpc";

const getStickyNote = (
  stickyNoteId: string
): {
  data: stickyNote;
  like: number;
} => {
  const stickyNoteData = trpc.useQuery([
    "getStickyNoteByStickyNoteId",
    { id: stickyNoteId },
  ]);
  return stickyNoteData.data!;
};

export default getStickyNote;
