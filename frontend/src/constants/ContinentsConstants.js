const Continents = [
  'Азия',
  'Европа',
  'Южная Америка',
  'Северная Америка',
  'Австралия',
  'Африка',
];

const Options = Continents.map(continent => ({ value: continent, name: continent }));
Options.unshift({ value: '', name: 'Все' });

export { Continents, Options };
