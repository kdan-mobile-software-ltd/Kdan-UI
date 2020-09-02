const chalk = require('chalk');

const happyCamel = [
  'allows you to live... This time.',
  'fell in love with you.',
  'steps aside, and lets you continue... But is always watching',
  "opens a trap door, but it's just to your left... lucky"
];
const angryCamel = [
  "blocks your path, and he's really hard to move",
  'tells John wick that you stole his car... run',
  'hired Liam neeson to find you... uh oh',
  'says "I aM vERy rAndOM"... *holds up spork*'
];
const randomCamel = (array) => {
  const camelChoice = Math.floor(Math.random() * array.length);
  return `Code camel ${array[camelChoice]}`;
};
const camelText = (quote, message, camelEye = 'o') => {
  return `
              ,,__
    ..  ..   / ${camelEye}._)                   .---.
   /--'/--\\  \\-'||        .----.    .'     '.
  /        \\_/ / |      .'      '..'         '-.
.'\\  \\__\\  __.'.'     .'          '-._
  )\\ |  )\\ |      _.'
 // \\\\ // \\\\   ${quote}
||_  \\\\|_  \\\\_ 
'--' '--'' '--'
${message}
`;
};

module.exports = {
  success: (message) => {
    message = chalk.bgGreen.bold(message ? `SUCCESS: ${message}` : '');
    const quote = chalk.green.bold(randomCamel(happyCamel));
    console.log(camelText(quote, message, chalk.green.bold('o')));
  },
  error: (message) => {
    message = chalk.bgRed.white.bold(message ? `ERROR: ${message}` : '');
    const quote = randomCamel(angryCamel);
    console.log(chalk.red.bold(camelText(quote, message)));
  }
};
