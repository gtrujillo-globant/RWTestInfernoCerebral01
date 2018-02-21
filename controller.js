import { Controller } from 'cerebral';
import rootModule from './module';
import Devtools from 'cerebral/devtools'

const controller = Controller(rootModule, {
  devtools: process.env.NODE_ENV === 'production' ? null : Devtools({
    host: 'localhost:8085'
  })
});

export default controller;
