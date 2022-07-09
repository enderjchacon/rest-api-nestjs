import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /**
   * Inicio Configuracion Swagger
   */
  const config = new DocumentBuilder()
   .setTitle('Blog API')
   .setDescription('Blog API')
   .setVersion('1.0')
   .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  /** Fin de Configuracion Swagger */
 
  await app.listen(3000);
}
bootstrap();
