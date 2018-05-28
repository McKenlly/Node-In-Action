

var fs = require('fs');
var stream = fs.createReadStream('./resource.json');
// Событие Data вызывается после появления нового фрагмента данных
stream.on('data', function (chunk) {
console.log(chunk);
})
stream.on('end', function () {
console.log('finished');
})