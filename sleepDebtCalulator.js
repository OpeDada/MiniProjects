//fnc that returns any given number of hours of rest
const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 7;
      break;
    case "wednesday":
      return 6;
      break;
    case "thursday":
      return 7;
      break;
    case "friday":
      return 5;
      break;
    case "saturday":
      return 7;
      break;
    case "sunday":
      return 6;
      break;
    default:
  }
};

// console.log(getSleepHours('tuesday'))

//fnc to  get the total sleep hours that you actually slept
const getActualSleepHours = () => {
  let sumOfHours = 8 + 7 + 6 + 7 + 5 + 7 + 6;
  return sumOfHours;
};

// fnc to get the ideal sleep hours that you prefer
const getIdealSleepHours = (idealHours) => idealHours * 7;

//fnc to calculate sleep debt.
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();

  let idealSleepHours = getIdealSleepHours(7);

  if (actualSleepHours === idealSleepHours) {
    console.log("Perfect amount of sleep");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `You got  ${
        actualSleepHours - idealSleepHours
      } hour(s) more sleep than you needed this week.`
    );
  } else {
    console.log(
      `You got ${
        idealSleepHours - actualSleepHours
      } hour(s) less sleep than you needed this week. Get some rest.`
    );
  }
};

calculateSleepDebt();
