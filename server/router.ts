import * as trpc from "@trpc/server";
import { z } from "zod";
import { stickyNoteKnowledgeService } from "./service";
import { book } from "@prisma/client";

const sleep = async (sec: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(null);
    }, sec * 1000);
  });
};

export const appRouter = trpc
  .router() // ルーターの生成
  .query("getBook", {
    input: z.object({
      id: z.string(),
    }),
    resolve: async ({ input }) => {
      const data = await stickyNoteKnowledgeService.getBookById(input.id);
      return data;
    },
  })
  // top page
  .query("getBookAll", {
    async resolve(): Promise<book[]> {
      const data = await stickyNoteKnowledgeService.getBookAll();
      return data;
    },
  })
  // view page
  .query("getStickyNoteByBookId", {
    input: z.object({
      id: z.string(),
    }),
    resolve: async ({ input }) => {
      const data = await stickyNoteKnowledgeService.getStickyNoteByBookId(
        input.id
      );
      return data;
    },
  })
  .query("getStickyNoteByStickyNoteId", {
    input: z.object({
      id: z.string(),
    }),
    resolve: async ({ input }) => {
      const data = await stickyNoteKnowledgeService.getStickyNoteById(input.id);
      return data;
    },
  })
  // my page
  .query("getLikedStickyNoteByUserId", {
    input: z.object({
      id: z.string(),
    }),
    resolve: async ({ input }) => {
      const data = await stickyNoteKnowledgeService.getLikedStickyNoteByUserId(
        input.id
      );
      return data;
    },
  })
  .query("getStickyNoteByUserId", {
    input: z.object({
      id: z.string(),
    }),
    resolve: async ({ input }) => {
      const data = await stickyNoteKnowledgeService.getStickyNoteByUserId(
        input.id
      );
      return data;
    },
  })
  .query("getUserById", {
    input: z.object({
      id: z.string(),
    }),
    resolve: async ({ input }) => {
      const data = await stickyNoteKnowledgeService.getUserById(input.id);
      return data;
    },
  })
  // post
  .mutation("stickyNoteLike", {
    input: z.object({
      stickyNoteId: z.string(),
      userId: z.string(),
    }),
    resolve: async ({ input }) => {
      const data = await stickyNoteKnowledgeService.addStickyNoteLikeById(
        input.stickyNoteId,
        input.userId
      );
      return data;
    },
  })
  .mutation("stickyNote", {
    input: z.object({
      text: z.string(),
      color: z.string(),
      userId: z.string(),
      bookId: z.string(),
      yCoordinates: z.number(),
      xCoordinates: z.number(),
    }),
    resolve: async ({ input }) => {
      const data = await stickyNoteKnowledgeService.addStickyNote(
        input.text,
        input.color,
        input.userId,
        input.bookId,
        input.yCoordinates,
        input.xCoordinates
      );
      return data;
    },
  });

export type AppRouter = typeof appRouter;
