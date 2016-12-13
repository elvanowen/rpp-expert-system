var destinations = require('./destinations.js');
module.exports = {};

module.exports.questions = [{
  about: "destination",
  skip: true,
  options: destinations.data.map(function(destination){ return destination.destination })
}, {
  about: "facility",
  question: "Apa fasilitas yang Anda butuhkan dalam akomodasi ?",
  multi: true,
  options: [
          "ac",
          "wifi",
          "waterHeater",
          "balcon",
          "lcdTv"]
}, {
  about: "stars",
  question: "Hotel bintang berapa yang Anda inginkan ?",
  options: [
          "1",
          "2",
          "3",
          "4",
          "5"]
}, {
  about: "food",
  question: "Jenis makanan apa yang Anda inginkan ?",
  options: [
          "prasmanan",
          "porsi"]
}];

module.exports.data = [{
  accomodation: 'aston favehotel',
  destination: 'bali',
  stars: '3',
  facility: ['ac', 'wifi'],
  food: 'prasmanan'
}, {
  accomodation: ' mulia resort',
  destination: 'bali',
  stars: '5',
  facility: ['ac', 'wifi', 'balcon', 'lcdTv', 'waterHeater'],
  food: 'prasmanan'
}, {
  accomodation: 'hotel hilton',
  destination: 'london',
  stars: '5',
  facility: ['ac', 'wifi', 'balcon', 'lcdTv'],
  food: 'prasmanan'
}
, {
  accomodation: 'mandarin orchard',
  destination: 'singapore',
  stars: '5',
  facility: ['ac', 'wifi', 'balcon', 'lcdTv', 'waterHeater'],
  food: 'prasmanan'
}, {
  accomodation: 'v hotel lavender',
  destination: 'singapore',
  stars: '3',
  facility: ['ac', 'lcdTv', 'waterHeater'],
  food: 'porsi'
}, {
  accomodation: 'york hotel',
  destination: 'singapore',
  stars: '4',
  facility: ['ac', 'lcdTv', 'waterHeater', 'wifi'],
  food: 'prasmanan'
}, {
  accomodation: 'the houstonian hotel',
  destination: 'houston',
  stars: '4',
  facility: ['ac', 'waterHeater', 'lcdTv', 'balcon'],
  food: 'prasmanan'
}, {
  accomodation: 'omni houston',
  destination: 'houston',
  stars: '3',
  facility: ['ac', 'waterHeater', 'lcdTv'],
  food: 'porsi'
}, {
  accomodation: 'four seasons',
  destination: 'houston',
  stars: '5',
  facility: ['ac', 'waterHeater', 'lcdTv', 'balcon', 'wifi'],
  food: 'porsi'
}, {
  accomodation: 'the modern honolulu',
  destination: 'honolulu',
  stars: '5',
  facility: ['ac', 'waterHeater', 'lcdTv', 'balcon', 'wifi'],
  food: 'prasmanan'
}, {
  accomodation: 'hoston waikiki',
  destination: 'honolulu',
  stars: '4',
  facility: ['ac', 'waterHeater', 'balcon', 'wifi'],
  food: 'porsi'
}
, {
  accomodation: 'trump international hotel',
  destination: 'honolulu',
  stars: '5',
  facility: ['ac', 'waterHeater', 'lcdTv', 'balcon', 'wifi'],
  food: 'prasmanan'
}
, {
  accomodation: 'sofitel newyork',
  destination: 'new york',
  stars: '5',
  facility: ['ac', 'waterHeater', 'lcdTv', 'balcon', 'wifi'],
  food: 'prasmanan'
}
, {
  accomodation: 'newyork hilton',
  destination: 'new york',
  stars: '4',
  facility: ['ac', 'waterHeater', 'lcdTv', 'balcon', 'wifi'],
  food: 'prasmanan'
}, {
  accomodation: 'americas best value inn',
  destination: 'los angeles',
  stars: '2',
  facility: ['ac', 'lcdTv'],
  food: 'porsi'
}, {
  accomodation: 'the garland',
  destination: 'los angeles',
  stars: '4',
  facility: ['ac', 'lcdTv', 'wifi', 'waterHeater'],
  food: 'prasmanan'
}, {
  accomodation: 'sheraton los angeles',
  destination: 'los angeles',
  stars: '3',
  facility: ['ac', 'lcdTv', 'waterHeater'],
  food: 'prasmanan'
}, {
  accomodation: 'omni chicago',
  destination: 'chicago',
  stars: '4',
  facility: ['ac', 'lcdTv', 'waterHeater', 'balcon'],
  food: 'prasmanan'
}, {
  accomodation: 'the langham',
  destination: 'chicago',
  stars: '5',
  facility: ['ac', 'lcdTv', 'waterHeater', 'balcon'],
  food: 'prasmanan'
}
, {
  accomodation: 'the talbott',
  destination: 'chicago',
  stars: '4',
  facility: ['ac', 'lcdTv', 'waterHeater', 'wifi'],
  food: 'prasmanan'
}, {
  accomodation: 'handlery union square hotel',
  destination: 'san francisco',
  stars: '3',
  facility: ['ac', 'lcdTv', 'waterHeater', 'wifi'],
  food: 'porsi'
}, {
  accomodation: 'omni san francisco hotel',
  destination: 'san francisco',
  stars: '4',
  facility: ['ac', 'lcdTv', 'waterHeater', 'wifi'],
  food: 'prasmanan'
}, {
  accomodation: 'boston harbor hotel',
  destination: 'boston',
  stars: '5',
  facility: ['ac', 'lcdTv', 'waterHeater', 'wifi', 'balcon'],
  food: 'prasmanan'
}, {
  accomodation: 'boston marriott long wharf',
  destination: 'boston',
  stars: '4',
  facility: ['ac', 'lcdTv', 'waterHeater'],
  food: 'prasmanan'
}, {
  accomodation: 'the verb hotel',
  destination: 'boston',
  stars: '3',
  facility: ['ac', 'lcdTv', 'waterHeater'],
  food: 'porsi'
}, {
  accomodation: 'mandarin oriental',
  destination: 'milan',
  stars: '5',
  facility: ['ac', 'lcdTv', 'waterHeater', 'wifi', 'balcon'],
  food: 'prasmanan'
}, {
  accomodation: 'hotel mozart',
  destination: 'milan',
  stars: '4',
  facility: ['ac', 'lcdTv', 'waterHeater', 'wifi'],
  food: 'prasmanan'
}, {
  accomodation: 'hotel europa',
  destination: 'milan',
  stars: '3',
  facility: ['ac', 'lcdTv'],
  food: 'porsi'
}, {
  accomodation: 'hotel plaza athenee',
  destination: 'paris',
  stars: '5',
  facility: ['ac', 'lcdTv', 'waterHeater', 'wifi', 'balcon'],
  food: 'prasmanan'
}, {
  accomodation: 'europe hotel paris',
  destination: 'paris',
  stars: '3',
  facility: ['ac', 'lcdTv', 'waterHeater'],
  food: 'prasmanan'
}, {
  accomodation: 'best western premier',
  destination: 'paris',
  stars: '4',
  facility: ['ac', 'lcdTv', 'waterHeater', 'wifi'],
  food: 'prasmanan'
}, {
  accomodation: 'wyndham grand istanbul',
  destination: 'istanbul',
  stars: '5',
  facility: ['ac', 'lcdTv', 'waterHeater', 'wifi', 'balcon'],
  food: 'prasmanan'
}, {
  accomodation: 'hotel sultanahmet',
  destination: 'istanbul',
  stars: '3',
  facility: ['ac', 'waterHeater'],
  food: 'porsi'
}, {
  accomodation: 'golden city hotel istanbul',
  destination: 'istanbul',
  stars: '4',
  facility: ['ac', 'waterHeater', 'lcdTv', 'wifi'],
  food: 'prasmanan'
}, {
  accomodation: 'hotel sacher wien',
  destination: 'vienna',
  stars: '5',
  facility: ['ac', 'waterHeater', 'lcdTv', 'wifi'],
  food: 'prasmanan'
}, {
  accomodation: 'the ritz-carlton vienna',
  destination: 'vienna',
  stars: '5',
  facility: ['ac', 'waterHeater', 'lcdTv', 'wifi', 'balcon'],
  food: 'prasmanan'
}, {
  accomodation: 'best western premier',
  destination: 'vienna',
  stars: '3',
  facility: ['ac', 'waterHeater', 'wifi'],
  food: 'porsi'
}, {
  accomodation: 'the ritz-carlton vienna',
  destination: 'moscow',
  stars: '5',
  facility: ['ac', 'waterHeater', 'lcdTv', 'wifi', 'balcon'],
  food: 'prasmanan'
}, {
  accomodation: 'four seasons',
  destination: 'moscow',
  stars: '4',
  facility: ['ac', 'waterHeater', 'lcdTv', 'wifi'],
  food: 'prasmanan'
}, {
  accomodation: 'hotel ibis',
  destination: 'moscow',
  stars: '3',
  facility: ['ac', 'waterHeater', 'wifi'],
  food: 'prasmanan'
}, {
  accomodation: 'the garland',
  destination: 'bucharest',
  stars: '4',
  facility: ['ac', 'lcdTv', 'wifi', 'waterHeater'],
  food: 'prasmanan'
}, {
  accomodation: 'sheraton hotel',
  destination: 'bucharest',
  stars: '3',
  facility: ['ac', 'lcdTv', 'waterHeater'],
  food: 'prasmanan'
}, {
  accomodation: 'omni prague',
  destination: 'prague',
  stars: '4',
  facility: ['ac', 'lcdTv', 'waterHeater', 'balcon'],
  food: 'prasmanan'
}, {
  accomodation: 'the langham',
  destination: 'prague',
  stars: '5',
  facility: ['ac', 'lcdTv', 'waterHeater', 'balcon'],
  food: 'prasmanan'
}, {
  accomodation: 'the talbott',
  destination: 'ecuador',
  stars: '4',
  facility: ['ac', 'lcdTv', 'waterHeater', 'wifi'],
  food: 'prasmanan'
}, {
  accomodation: 'handlery union square hotel',
  destination: 'ecuador',
  stars: '3',
  facility: ['ac', 'lcdTv', 'waterHeater', 'wifi'],
  food: 'porsi'
}, {
  accomodation: 'omni sao paolo hotel',
  destination: 'sao paolo',
  stars: '4',
  facility: ['ac', 'lcdTv', 'waterHeater', 'wifi'],
  food: 'prasmanan'
}, {
  accomodation: 'harbor hotel',
  destination: 'sao paolo',
  stars: '5',
  facility: ['ac', 'lcdTv', 'waterHeater', 'wifi', 'balcon'],
  food: 'prasmanan'
}, {
  accomodation: 'marriott long wharf',
  destination: 'chile',
  stars: '4',
  facility: ['ac', 'lcdTv', 'waterHeater'],
  food: 'prasmanan'
}, {
  accomodation: 'mandarin oriental',
  destination: 'bolivia',
  stars: '5',
  facility: ['ac', 'lcdTv', 'waterHeater', 'wifi', 'balcon'],
  food: 'prasmanan'
}, {
  accomodation: 'hotel mozart',
  destination: 'bolivia',
  stars: '4',
  facility: ['ac', 'lcdTv', 'waterHeater', 'wifi'],
  food: 'prasmanan'
}, {
  accomodation: 'hotel europa',
  destination: 'bolivia',
  stars: '3',
  facility: ['ac', 'lcdTv'],
  food: 'porsi'
}, {
  accomodation: 'hotel plaza athenee',
  destination: 'costarica',
  stars: '5',
  facility: ['ac', 'lcdTv', 'waterHeater', 'wifi', 'balcon'],
  food: 'prasmanan'
}, {
  accomodation: 'europe hotel',
  destination: 'costarica',
  stars: '3',
  facility: ['ac', 'lcdTv', 'waterHeater'],
  food: 'prasmanan'
}, {
  accomodation: 'best western premier',
  destination: 'belize',
  stars: '4',
  facility: ['ac', 'lcdTv', 'waterHeater', 'wifi'],
  food: 'prasmanan'
}, {
  accomodation: 'surf ranch hotel & resort',
  destination: 'nicaragua',
  stars: '3',
  facility: ['ac', 'lcdTv', 'wifi'],
  food: 'prasmanan'
}, {
  accomodation: 'pelican eyes piedras resort',
  destination: 'nicaragua',
  stars: '3',
  facility: ['ac', 'lcdTv', 'wifi'],
  food: 'porsi'
}, {
  accomodation: 'the pavilions phuket',
  destination: 'phuket',
  stars: '5',
  facility: ['ac', 'lcdTv', 'wifi', 'balcon', 'waterHeater'],
  food: 'prasmanan'
}, {
  accomodation: 'hotel novotel phuket resort',
  destination: 'phuket',
  stars: '4',
  facility: ['ac', 'wifi', 'balcon', 'waterHeater'],
  food: 'prasmanan'
}, {
  accomodation: 'hotel mulia',
  destination: 'bali',
  stars: '4',
  facility: ['ac', 'wifi', 'waterHeater'],
  food: 'prasmanan'
}
]