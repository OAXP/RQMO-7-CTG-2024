import 'reflect-metadata';
import 'module-alias/register';
import { Server } from '@src/server';
import { Container } from 'typedi';

const server: Server = Container.get(Server);
server.init();
