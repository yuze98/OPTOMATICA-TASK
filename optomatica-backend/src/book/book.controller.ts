import { Body, Controller, Delete, Get, Param, Post, Put, } from "@nestjs/common";
import { Book } from "./book.model";
import { BookService } from "./book.service";

@Controller('api/v1/books')
export class BookController{

    constructor(private readonly bookService: BookService){

    }
     
    @Get()
    async getAllBooks():Promise<Book[]>{
        return this.bookService.getAllBooks()
    }    
    @Post()
    async postBook(@Body() postData:Book):Promise<Book>{
        return this.bookService.createBook(postData)
    }
    @Get(':id')
    async getBook(@Param('id') id:number):Promise<Book | null>{
        return this.getBook(id)
    }
    @Delete(':id')
    async deleteBook(@Param('id') id:number):Promise<Book | null>{
        return this.deleteBook(id)
    }
    @Put(':id')
    async updateBook(@Param('id') id:number,@Body() postData:Book):Promise<Book | null>{
        return this.updateBook(id,postData)
    }
}