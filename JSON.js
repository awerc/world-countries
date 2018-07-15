const fs = require('fs');

function readJSON(file) {
  const filepath = __dirname + '/' + file;
  const result = fs.readFileSync(filepath, 'utf8');
  return JSON.parse(result);
}

function saveJSON(data, filename) {
	fs.writeFile(filename, JSON.stringify(data, null, '\t'), err => {
    err ? console.err(err) : console.log(`${filename} successfuly saved`);
	})
}

module.exports = { readJSON, saveJSON };