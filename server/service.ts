import { v4 as uuid } from "uuid";

import { book, PrismaClient, stickyNote, user } from "@prisma/client";

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
  // my page
  async getLikedStickyNoteByUserId(id: string): Promise<stickyNote[] | null> {
    const likedList = await prisma.stickyNoteLike.findMany({
      where: {
        userId: id,
      },
    });
    let resultList: stickyNote[] = [];
    for (let i = 0; i < likedList.length; i++) {
      const likeData = likedList[i];
      const stickyNotedata = await this.getStickyNoteById(
        likeData.stickyNoteId
      );
      resultList.push(stickyNotedata?.data!);
    }
    return resultList;
  },
  async getStickyNoteByUserId(id: string): Promise<stickyNote[] | null> {
    const data = await prisma.stickyNote.findMany({
      where: {
        userId: id,
      },
    });
    return data;
  },
  // user info
  async getUserById(id: string): Promise<user | null> {
    const data = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    return data;
  },
};
