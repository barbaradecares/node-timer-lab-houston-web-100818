process.argv.shift();
process.argv.shift();
let timeInSeconds;
if (process.argv[0].includes("min")) {
  timeInSeconds = parseInt(process.argv[0], 10) * 60;
} else timeInSeconds = parseInt(process.argv[0], 10);

function timer() {
  if (timeInSeconds > 0) {
    setTimeout(function() {
      timeInSeconds -= 1;
      console.log(`Left: ${timeInSeconds}s`);
      timer();
    }, 1000);
  } else {
    process.exit();
  }
}

timer();
