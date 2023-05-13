const time = new Date();
let hours = time.getHours();

export const setTime = () => {
  let dayNow = "";
  if (hours < 12 && hours > 3) {
    dayNow = "Morning";
  } else if (hours > 11 && hours < 18) {
    dayNow = "Afternoon";
  } else {
    dayNow = "Evening";
  }
  return dayNow;
}