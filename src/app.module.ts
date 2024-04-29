import { BookModule } from './book/book.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [BookModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
