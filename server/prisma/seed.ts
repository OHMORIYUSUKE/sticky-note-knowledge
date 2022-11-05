import { PrismaClient } from "@prisma/client";
import { text } from "stream/consumers";
import { v4 as uuid } from "uuid";

const fs = require("fs");

const prisma = new PrismaClient();

async function main() {
  //  note
  const userId01 = uuid();
  const book01 = uuid();
  const oneNote = await prisma.stickyNote.create({
    data: {
      id: uuid(),
      bookId: book01,
      text: "AAAA",
      color: "red",
      userId: userId01,
      yCoordinates: 100,
      xCoordinates: 200,
    },
  });

  const userId02 = uuid();
  const book02 = uuid();
  const twoNote = await prisma.stickyNote.create({
    data: {
      id: uuid(),
      text: "BBBB",
      color: "red",
      bookId: book02,
      userId: userId02,
      yCoordinates: 100,
      xCoordinates: 200,
    },
  });

  const userId03 = uuid();
  const book03 = uuid();
  const threeNote = await prisma.stickyNote.create({
    data: {
      id: uuid(),
      text: "CCCC",
      bookId: book03,
      color: "red",
      userId: userId03,
      yCoordinates: 100,
      xCoordinates: 200,
    },
  });

  //   user
  const oneUser = await prisma.user.create({
    data: {
      id: userId01,
      name: "user01",
    },
  });

  const twoUser = await prisma.user.create({
    data: {
      id: userId02,
      name: "user02",
    },
  });

  const threeUser = await prisma.user.create({
    data: {
      id: userId03,
      name: "user03",
    },
  });

  // book
  try {
    const buff = fs.readFileSync("strage/book1.html", "utf8");
    const book = await prisma.book.create({
      data: {
        id: book01,
        title: "book1",
        text: buff,
      },
    });
  } catch (e) {
    console.log(e);
  }
  //
  try {
    const buff = fs.readFileSync("strage/book2.html", "utf8");
    const book = await prisma.book.create({
      data: {
        id: book02,
        title: "book2",
        text: buff,
      },
    });
  } catch (e) {
    console.log(e);
  }
  //
  try {
    const buff = fs.readFileSync("strage/book3.html", "utf8");
    const book = await prisma.book.create({
      data: {
        id: book03,
        title: "book3",
        text: buff,
      },
    });
  } catch (e) {
    console.log(e);
  }
}
main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
