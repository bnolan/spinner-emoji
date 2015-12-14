// Loading spinner that displays a random emoji. Uses the `tm-loading` declaration so the spinner is
// hidden when angular has started.

var emoji = require('emoji-named-characters');
var fs = require('fs');
var path = require('path');

function randomEmoji () {
    var keys = Object.keys(emoji);
    var key = keys[Math.floor(Math.random() * keys.length)];
    return emoji[key].character;
}

var html = fs.readFileSync(path.join(__dirname, 'spinner.html')).toString();

module.exports = function () {
    return html.replace('{emoji}', randomEmoji());
}
