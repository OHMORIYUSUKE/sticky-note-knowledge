import { v4 as uuid } from "uuid";

import { book, PrismaClient, stickyNote } from "@prisma/client";

const prisma = new PrismaClient();

export const stickyNoteKnowledgeService = {
  async getBookById(id: string): Promise<book | null> {
    const data = await prisma.book.findUnique({
      where: {
        id: id,
      },
    });
    return data;
  },
  async getBookAll(): Promise<book[]> {
    const data = await prisma.book.findMany();
    return data;
  },
  async getStickyNoteByBookId(id: string): Promise<stickyNote[] | null> {
    const dataList = await prisma.stickyNote.findMany({
      where: {
        bookId: id,
      },
    });
    return dataList;
  },
  async getStickyNoteById(
    id: string
  ): Promise<{ data: stickyNote; like: number } | null> {
    const data = await prisma.stickyNote.findUnique({
      where: {
        id: id,
      },
    });
    if (data === null) {
      return null;
    }
    const likesList = await prisma.stickyNoteLike.findMany({
      where: {
        stickyNoteId: id,
      },
    });
    return {
      data: data,
      like: likesList.length,
    };
  },
  async addStickyNoteLikeById(
    stickyNoteId: string,
    userId: string
  ): Promise<{ data: stickyNote; like: number } | null> {
    const data = await prisma.stickyNoteLike.create({
      data: {
        userId: userId,
        stickyNoteId: stickyNoteId,
      },
    });
    const res = await this.getStickyNoteById(stickyNoteId);
    return res;
  },
  async addStickyNote(
    text: string,
    color: string,
    userId: string,
    bookId: string,
    yCoordinates: number,
    xCoordinates: number
  ): Promise<{ data: stickyNote; like: number } | null> {
    const stickyNoteId = uuid();
    const data = await prisma.stickyNote.create({
      data: {
        text: text,
        color: color,
        userId: userId,
        id: stickyNoteId,
        bookId: bookId,
        yCoordinates: yCoordinates,
        xCoordinates: xCoordinates,
      },
    });
    return {
      data: data,
      like: 0,
    };
  },
};

// --------
export type Todo = {
  id: string;
  text: string;
  done: boolean;
};

const db = new Map<string, Todo>();

export const todoService = {
  getById(id: string): Todo | undefined {
    return db.get(id);
  },
  getAll(): Todo[] {
    return Array.from(db.values());
  },
  async addTodo(id: string, text: string): Promise<Todo> {
    const todo = { id, text, done: false };
    db.set(id, todo);
    // prisma
    const one = await prisma.todo.create({
      data: {
        id: todo.id,
        text: todo.text,
        done: todo.done,
      },
    });
    return todo;
  },
  async update(id: string, todo: Todo): Promise<Todo> {
    if (this.getById(id)) {
      const updatedTodo = { ...todo, id };
      db.set(id, updatedTodo);
      return updatedTodo;
    }
    return this.addTodo(id, todo.text);
  },
  delete(id: string): boolean {
    return db.delete(id);
  },
};

export const initDb = (): void => {
  let id = uuid();
  db.set(id, { id, text: "buy milk", done: false });
  id = uuid();
  db.set(id, { id, text: "do laundry", done: false });
  id = uuid();
  db.set(id, { id, text: "pick up books in liburary", done: false });
};
