import { describe, it, expect } from 'vitest';
import { createTimer } from '../src/timer.js';

describe('timer', () => {
  it('starts with 25 minutes remaining', () => {
    const timer = createTimer();
    expect(timer.remainingSeconds).toBe(25 * 60);
  });
});
