import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const fileExists = require('file-exists');
let express;
fileExists('../express/src/app', (err, exists) => {
  if (exists) {
    express = require('../express/src/app');
  } else {
    express = require('../express/src/index');
  }
});

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