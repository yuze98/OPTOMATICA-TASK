import { Book } from "./book.model";
import { BookService } from "./book.service";
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    getAllBooks(): Promise<Book[]>;
    postBook(postData: Book): Promise<Book>;
    getBook(id: number): Promise<Book | null>;
    deleteBook(id: number): Promise<Book | null>;
    updateBook(id: number, postData: Book): Promise<Book | null>;
}
