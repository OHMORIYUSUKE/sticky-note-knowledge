import { v4 as uuid } from "uuid";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

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
