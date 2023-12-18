import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const fileExists = require('file-exists');

// define URL to Express server app instance
const PATH_URL = '../express/src/app';
//

fileExists(PATH_URL, (err, exists) => {
  if (exists) {
    express = require('../express/src/app');
  } else {
    console.log('PATH URL IS WRONG')
  }
});

let express = require(PATH_URL);


import { ExpressAdapter } from '@nestjs/platform-express';
async function bootstrap() {
  const nestApp = await NestFactory.create(
    AppModule,
    new ExpressAdapter(express), // use expressAdapter to integrate Express.js app
  );
  await nestApp.listen(3000);
}
bootstrap();