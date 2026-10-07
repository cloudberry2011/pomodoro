export function createTimer() {
  return {
    remainingSeconds: 25 * 60,
    tick() {
      this.remainingSeconds = Math.max(0, this.remainingSeconds - 1);
    },
  };
}
