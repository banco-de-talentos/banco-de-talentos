import { App } from './App';
import 'dotenv/config';

const PORT = process.env.APP_PORT || 3001;

new App().start(PORT);