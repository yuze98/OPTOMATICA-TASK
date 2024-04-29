"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const prisma_service_1 = require("../prisma.service");
const common_1 = require("@nestjs/common");
let BookService = class BookService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllBooks() {
        return this.prisma.book.findMany();
    }
    async getBook(id) {
        return this.prisma.book.findUnique({ where: { id: Number(id) } });
    }
    async createBook(data) {
        return this.prisma.book.create({
            data,
        });
    }
    async updateBook(id, data) {
        return this.prisma.book.update({
            where: { id: Number(id) },
            data: {
                title: data.title,
                author: data.author,
                published: data.published,
                description: data.description,
            },
        });
    }
    async deleteBook(id) {
        return this.prisma.book.delete({ where: { id: Number(id) } });
    }
};
exports.BookService = BookService;
exports.BookService = BookService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BookService);
//# sourceMappingURL=book.service.js.map