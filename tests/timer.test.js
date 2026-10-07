import { describe, it, expect } from 'vitest';
import { createTimer } from '../src/timer.js';

describe('timer', () => {
  it('starts with 25 minutes remaining', () => {
    const timer = createTimer();
    expect(timer.remainingSeconds).toBe(25 * 60);
  });

  it('loses one second per tick', () => {
    const timer = createTimer();
    timer.tick();
    expect(timer.remainingSeconds).toBe(25 * 60 - 1);
  });

  it('never goes below zero', () => {
    const timer = createTimer();
    for (let i = 0; i < 25 * 60 + 5; i++) {
      timer.tick();
    }
    expect(timer.remainingSeconds).toBe(0);
  });
});
