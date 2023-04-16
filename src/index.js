import './css/style.css';
import { screenController } from './screenController';
import { library } from './app';
import { createTestData } from './testData';

let app = library();
createTestData(app);

let sc = screenController(app);

