// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
  let range = Math.abs(start - destination) * 264;
  if (range <= 400) {
    return 0;
  } else if (range > 400 && range <= 2000) {
    return (range - 400) * 0.02;
  } else if (range > 2000 && range < 2500) {
    return 25;
  } else if (range > 2500) {
    return "cannot travel that far";
  }
}
