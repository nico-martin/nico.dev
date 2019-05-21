const fs = require('fs');
const fileName = './package.json';
const file = require(fileName);
const versionNumbers = file.version.split('.');

versionNumbers[versionNumbers.length - 1]++;

const newVersion = versionNumbers.join('.');
file.version = newVersion;
fs.writeFile(fileName, JSON.stringify(file), function (err) {
	if (err) return console.log(err);
	console.log('new Version: ' + newVersion);
});

fs.writeFile('./src/version.json', JSON.stringify({version: newVersion}), function (err) {
	if (err) return console.log(err);
});
