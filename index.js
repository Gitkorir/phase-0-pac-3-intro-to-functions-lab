function shout(string) {
  return string.toUpperCase();
}
module.export = shout;

function whisper(string) {
  return string.toLowerCase();
}
module.export = whisper;
function logShout(string) {
  console.log(string.toUpperCase());
}
module.export = logShout;
function logWhisper(string) {
  console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string === "Let's have dinner together!") {
    return "I would love to!";
  }
}

module.export = sayHiToHeadphonedRoommate;
