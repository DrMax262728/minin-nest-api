import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
// modules
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://max:38433716@cluster0.tiisd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
