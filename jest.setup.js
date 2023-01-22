import { teardown } from '@src/services/testing';
import '@src/components/index.js';

afterEach(() => {
  teardown();
})
