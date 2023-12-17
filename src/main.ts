import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import express = require('../express/src/app');
import { ExpressAdapter } from '@nestjs/platform-express';
async function bootstrap() {
  console.log(express, 'express')
  const nestApp = await NestFactory.create(
    AppModule,
    new ExpressAdapter(express), // use expressAdapter to integrate Express.js app
  );
  await nestApp.listen(3000);
}
bootstrap();