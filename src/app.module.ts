import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ProductsModule} from "./products/products.module";
import {MongooseModule} from "@nestjs/mongoose";
import CONFIG from "./config";
import { UsersModule } from './users/users.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import {resolve} from "path";


// ServeStaticModule.forRoot({
//   rootPath: resolve(__dirname, "client", "build"),
// }),


@Module({
  imports: [ProductsModule,UsersModule,MongooseModule.forRoot(CONFIG.db_uri)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
