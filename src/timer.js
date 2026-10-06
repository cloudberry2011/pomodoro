export function createTimer() {
  return {
    remainingSeconds: 25 * 60,
    tick() {
      this.remainingSeconds -= 1;
    },
  };
}
