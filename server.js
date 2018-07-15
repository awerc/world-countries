const express = require('express');
const path = require('path');
const _ = require('lodash');
const bodyParser = require('body-parser');
const { readJSON, saveJSON } = require('./JSON');

const app = express();

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 5000;

const database = 'countries.json';
let countries = readJSON(database);

const getShortCountryInfo = ({ id, flag, name, capital, area, population, continent }) => (
	{ id, flag, name, capital, area, population, continent }
);

const addCountry = ({ flag, name, capital, area, population, continent, description }) => {
	let id = countries[countries.length - 1].id + 1 || 0;
	countries.push({ id, flag, name, capital, area, population, continent, description })
	return id;
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/countries', (req, res) => {
  res.send({ total: countries.length, data: countries.map(getShortCountryInfo) });
});

app.post('/api/countries', (req, res) => {
	const id = addCountry(req.body);
	// saveJSON(database, countries);
	res.send({ id });
});

app.delete('/api/country/:id', (req, res) => {
	const id = Number(req.params.id);
	countries = countries.filter(country => country.id !== id);
	// saveJSON(database, countries);
	res.send(200);
});

app.get('/api/country/:id', (req, res) => {
	const id = Number(req.params.id);
	const result = _.find(countries, { id });
  res.send({ ...result });
});

if (env === 'production') {
  app.use(express.static(path.join(__dirname, 'Dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'Dist', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
