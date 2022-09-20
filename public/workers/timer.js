const isNumber = (value) => typeof value === 'number' && !isNaN(value);

class Timer {
  constructor () {
    this.count = 0;
  }

  start(duration) {
    this.duration = duration;

    this.interval = setInterval(() => {
      if (this.count < this.duration) {
        this.syncTimer(this.count + 1);
      } else {
        this.resetCount();
        self.postMessage({ action: 'timerHasFinished' });
      }
    }, 1000);
  }

  pause() {
    clearInterval(this.interval);
  }

  resetTimer() {
    this.pause();
    this.resetCount();
  }

  resetCount() {
    this.syncTimer(0);
  }

  syncTimer(count) {
    if (isNumber(count)) {
      this.count = count;
    }

    self.postMessage({ action: 'syncTimer', count: isNumber(count) ? count : this.count });
  }
}

const timer = new Timer();

self.onmessage = (event) => {
  const { action, duration } = event.data;

  if (action === 'start' && isNumber(duration)) {
    timer.start(duration);
  }

  if (action === 'pause') {
    timer.pause();
  }

  if (action === 'reset') {
    timer.resetTimer();
  }
};
