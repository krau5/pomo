type GetRemainingTimeReturnType = {
  minutes: string;
  seconds: string;
};

/**
 * Calculates and formats the remaining time given a total duration and a timer value.
 * Both duration and timer should be specified in seconds.
 *
 * @param {number} duration - The total duration in seconds.
 * @param {number} timer - The elapsed time in seconds.
 * @returns {GetRemainingTimeReturnType} An object containing formatted strings for minutes and seconds left.
 * */
export const getRemainingTime = (
  duration: number,
  timer: number,
): GetRemainingTimeReturnType => {
  if (duration <= 0 || duration <= timer) {
    return { minutes: '00', seconds: '00' };
  }

  const minutes = Math.floor((duration - timer) / 60);
  const formattedMinutes = minutes >= 10 ? `${minutes}` : `0${minutes}`;

  const seconds = (duration - timer) % 60;
  const formattedSeconds = seconds >= 10 ? `${seconds}` : `0${seconds}`;

  return { minutes: formattedMinutes, seconds: formattedSeconds };
};
