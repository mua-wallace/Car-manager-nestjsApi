import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Car Manager Api')
    .setDescription(
      'The car manager Api provides the characteristics of different car brands',
    )
    .setVersion('1.0')
    .build();

  // create document using swaggerModule class
  const doc = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, doc);
  await app.listen(5000);
}
bootstrap();
