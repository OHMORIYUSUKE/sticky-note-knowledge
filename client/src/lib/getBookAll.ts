import { book } from "@prisma/client";
import { trpc } from "../trpc";

const getBookAll = (): book[] => {
  const bookAll = trpc.useQuery(["getBookAll"]).data;
  return bookAll!;
};

export default getBookAll;
