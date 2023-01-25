import { teardown } from './src/services/testing';
import './src/index.js';

afterEach(() => {
  teardown();
})
