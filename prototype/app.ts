import { GameObject } from './prototype';

const alien = new GameObject('alien.png', 0);
alien.describe();

const clonedAlien = alien.clone();
clonedAlien.describe();
