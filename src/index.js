import './css/style.css';
import './css/switch.css';
import './css/tile.css';
import './css/modal.css';

import { Book } from './app/book.js';
import { Library } from './app/library.js';
import { BookGenerator } from './app/bookGenerator.js';
import { ScreenController } from './ui/screenController.js';

const library = new Library();
//BookGenerator.generateBooks(library);

const screenController = new ScreenController(library);
