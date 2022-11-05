import { v4 as uuid } from "uuid";

import { book, PrismaClient, stickyNote } from "@prisma/client";
import { type } from "os";
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
