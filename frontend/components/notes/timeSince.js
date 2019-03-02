//Credit: https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site


function timeSince(updatedAt) {
  const timePeriods = {
    minutes: 60,
    hours: 60 * 60,
    days: 24 * 60 * 60,
    weeks: 7 * 24 * 60 * 60,
    months: 30 * 24 * 60 * 60,
    years: 365 * 24 * 60 * 60
  };

  const seconds = Math.floor((Date.now() - Date.parse(updatedAt)) / 1000);

  let interval = Math.floor(seconds / timePeriods.years);

  if (interval > 1) {
    return interval + " years ago";
  }

  interval = Math.floor(seconds / timePeriods.months);
  if (interval > 1) {
    return interval + " months ago";
  }

  interval = Math.floor(seconds / timePeriods.weeks);
  if (interval > 1) {
    return interval + " weeks ago";
  }

  interval = Math.floor(seconds / timePeriods.days);
  if (interval > 1) {
    return interval + " days ago";
  }

  interval = Math.floor(seconds / timePeriods.hours);
  if (interval > 1) {
    return interval + " hours ago";
  }

  interval = Math.floor(seconds / timePeriods.minutes);
  if (interval > 1) {
    return interval + " minutes ago";
  }

  return Math.floor(seconds) + " seconds ago";
}

export default timeSince;