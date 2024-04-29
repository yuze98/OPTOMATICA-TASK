import { Book } from './book.model';
import { PrismaService } from '../prisma.service';
export declare class BookService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllBooks(): Promise<Book[]>;
    getBook(id: number): Promise<Book | null>;
    createBook(data: Book): Promise<Book>;
    updateBook(id: number, data: Book): Promise<Book>;
    deleteBook(id: number): Promise<Book>;
}
