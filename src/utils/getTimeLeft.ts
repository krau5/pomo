export const getTimeLeft = (duration: number, timer: number) => {
  const minutes = Math.floor((duration - timer) / 60);
  const formattedMinutes = minutes >= 10 ? `${minutes}` : `0${minutes}`;

  const seconds = (duration - timer) % 60;
  const formattedSeconds = seconds >= 10 ? `${seconds}` : `0${seconds}`;

  return { minutes: formattedMinutes, seconds: formattedSeconds };
};
