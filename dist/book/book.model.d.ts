import { Prisma } from "@prisma/client";
export declare class Book implements Prisma.BookCreateInput {
    id: number;
    title: string;
    author: string;
    published: Date;
    description?: string;
}
