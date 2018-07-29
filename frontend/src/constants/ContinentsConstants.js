const continents = [
  'Азия',
  'Европа',
  'Южная Америка',
  'Северная Америка',
  'Австралия',
  'Африка',
];

const options = continents.map(continent => ({ value: continent, name: continent }));
options.unshift({ value: '', name: 'Все' });

export { continents, options };
