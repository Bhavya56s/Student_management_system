import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }));
  const config = new DocumentBuilder()
  .setTitle('Student Management System')
  .setDescription('Student Functionalities')
  .setVersion('1.0')
  .addBearerAuth({
    type:"http",
    scheme:"bearer",
    bearerFormat:"jwt",
    name:"jwt",
    description:"Enter JWT token",
    in:"header"
  },"JWT-Auth")
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('apis', app, document);
  await app.listen(3000);
}
bootstrap();
