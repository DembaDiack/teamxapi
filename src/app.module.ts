import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ProductsModule} from "./products/products.module";
import {MongooseModule} from "@nestjs/mongoose";
import CONFIG from "./config";
import { UsersModule } from './users/users.module';
import { resolve,join } from 'path';
import {ServeStaticModule} from "@nestjs/serve-static";


let serveStatic = ServeStaticModule.forRoot({
  rootPath: resolve(__dirname, "Client", "build", "index.html"),
  });
let imports = [ProductsModule,UsersModule,MongooseModule.forRoot(CONFIG.db_uri)];
if(process.env.NODE_ENV == "production")
{
  imports.push(serveStatic);
}
@Module({
  imports: imports,
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
