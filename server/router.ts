import * as trpc from "@trpc/server";
import { z } from "zod";
import { v4 as uuid } from "uuid";

import { Todo, todoService, stickyNoteKnowledgeService } from "./service";
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
  .query("getBookAll", {
    async resolve(): Promise<book[]> {
      const data = await stickyNoteKnowledgeService.getBookAll();
      return data;
    },
  })
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
  })
  // ---------------------------------------------
  .query(
    "getTodoList", // エンドポイント名: getTodoList
    {
      // resolve() 内に実装を書いていく
      async resolve(): Promise<Todo[]> {
        await sleep(1);
        return await todoService.getAll(); // todoService　の実装は割愛
      },
    }
  )
  .mutation(
    "addTodo", // エンドポイント名: addTodo
    {
      // input 内にユーザーインプットのバリデーションを書いていく
      // この例では zod を使って　{ text: string} をバリデーション
      input: z.object({
        text: z.string(),
      }),
      // 上で定義した input が req に格納されている
      // 不正な input であった場合は、この手前で HTTP400 エラーが返される
      async resolve(req): Promise<Todo> {
        const { text } = req.input;
        const id = uuid();
        return await todoService.addTodo(id, text);
      },
    }
  );

export type AppRouter = typeof appRouter;
