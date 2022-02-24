import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  if(process.env.NODE_ENV == "production")
  {
    app.setGlobalPrefix('api');
    await app.listen(parseInt(process.env.PORT) || 4000);
  }
  else
  {
    await app.listen(4000);
  }
  
}
bootstrap();
