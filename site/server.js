import { name } from './package.json';
import config from 'config';
import app from './app';

let server = app().listen(
    config.get('port'),
    config.get('host'),
    () => console.log(`${name} started ${JSON.stringify(server.address())}`)
);

