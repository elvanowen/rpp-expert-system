module.exports = {};

module.exports.questions = [{
  about: "purpose",
  question: "Apa tujuan Anda dalam melakukan travelling ?",
  options: [
          "business",
          "travelling",
          "honeymoon",
          "shopping",
          "surfing",
          "studying"]
}, {
  about: "budget",
  question: "Berapa budget yang Anda sediakan untuk perjalanan ini ?",
  options: [
          "tinggi",
          "sedang",
          "rendah"]
}, {
  about: "continent",
  question: "Benua manakah yang ingin Anda kunjungi ?",
  options: [
          "east asia",
          "north america",
          "south america",
          "east europe",
          "west europe"]
}, {
  about: "popularity",
  question: "Seberapa populer tujuan travel Anda yang Anda harapkan ?",
  options: [
          "sangat populer",
          "cukup populer",
          "tidak populer"]
}, {
  about: "season",
  question: "Musim apakah yang Anda inginkan pada saat melakukan travelling ?",
  options: [
          "spring",
          "summer",
          "autumn",
          "winter"]
}];

module.exports.data = [{
  destination: 'new york',
  popularity: 'sangat populer',
  purpose: 'travelling',
  season: 'spring',
  budget: 'tinggi',
  continent: 'north america'
}, {
  destination: 'paris',
  popularity: 'cukup populer',
  purpose: 'travelling',
  season: 'spring',
  budget: 'sedang',
  continent: 'west europe'
}, {
  destination: 'singapore',
  popularity: 'cukup populer',
  purpose: 'studying',
  season: 'spring',
  budget: 'sedang',
  continent: 'east asia'
}, {
  destination: 'london',
  popularity: 'sangat populer',
  purpose: 'shopping',
  season: 'winter',
  budget: 'tinggi',
  continent: 'west europe'
}, {
  destination: 'gold coast australia',
  popularity: 'cukup populer',
  purpose: 'surfing',
  season: 'summer',
  budget: 'sedang',
  continent: 'east asia'
}, {
  destination: 'bali',
  popularity: 'cukup populer',
  purpose: 'surfing',
  season: 'summer',
  budget: 'rendah',
  continent: 'east asia'
}]