import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Makes the app use the built in Validation Pipe that checks if the request body is of the correct format
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
