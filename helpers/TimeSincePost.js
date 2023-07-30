export const timeSincePost = (postTimeInUTC) => {
    const currentTimeUTC = new Date().toISOString();
    const givenTime = new Date(postTimeInUTC);
  
    const timeDifferenceMs = new Date(currentTimeUTC) - givenTime;


    const differenceInMinutes = Math.floor(timeDifferenceMs / (1000 * 60));
    const differenceInSeconds = Math.floor(timeDifferenceMs / 1000);
    const differenceInHours = Math.floor(differenceInMinutes / 60);
    const differenceInDays = Math.floor(differenceInHours / 24);
    const differenceInYears = Math.floor(differenceInDays / 365);

    if (differenceInYears >= 1) {
        return `${differenceInYears} year${differenceInYears === 1 ? '' : 's'} ago`;
      } else if (differenceInDays >= 1) {
        return `${differenceInDays} day${differenceInDays === 1 ? '' : 's'} ago`;
      } else if (differenceInHours >= 1) {
        return `${differenceInHours} hour${differenceInHours === 1 ? '' : 's'} ago`;
      } else if (differenceInMinutes >= 1) {
        return `${differenceInMinutes} minute${differenceInMinutes === 1 ? '' : 's'} ago`;
      } else {
        return "Just now";
      }
}