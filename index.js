var expert = require("./lib/expert.js"),
    _ = require('underscore'),
    lib = require('./script');

var domain   = expert.Domain(),
    Concept  = domain.Concept,
    Relation = domain.Relation,
    concepts = {},
    relations = {};

// Knowledge Bases
var questionOrder = [{
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
questionOrder.forEach(function(order){
  order.options.forEach(function(option){
    concepts[order.about] = concepts[order.about] || {};
    concepts[order.about][option] = Concept.create({id: order.about + '-' + option})
  })

  relations[order.about] = Relation.create({id: '~' + order.about, inverseFor: Relation.create({id: order.about})})
});

var destinations =  [ "new york",
                      "paris",
                      "berlin",
                      "london",
                      "gold coast australia",
                      "bali",
                      "lombok",
                      "singapore"];

// Create attributes concepts
destinations.forEach(function(destination){
  concepts['destinations'] = concepts['destinations'] || {};
  concepts['destinations'][destination] = Concept.create({id: destination})
})

concepts['destinations']['new york']
  .popularity(concepts['popularity']['sangat populer'])
  .purpose(concepts['purpose']['travelling'])
  .season(concepts['season']['spring'])
  .budget(concepts['budget']['tinggi'])
  .continent(concepts['continent']['north america'])

concepts['destinations']['paris']
  .popularity(concepts['popularity']['cukup populer'])
  .purpose(concepts['purpose']['travelling'])
  .season(concepts['season']['spring'])
  .budget(concepts['budget']['sedang'])
  .continent(concepts['continent']['west europe'])

concepts['destinations']['singapore']
  .popularity(concepts['popularity']['cukup populer'])
  .purpose(concepts['purpose']['studying'])
  .season(concepts['season']['spring'])
  .budget(concepts['budget']['sedang'])
  .continent(concepts['continent']['east asia'])

concepts['destinations']['london']
  .popularity(concepts['popularity']['sangat populer'])
  .purpose(concepts['purpose']['shopping'])
  .season(concepts['season']['winter'])
  .budget(concepts['budget']['tinggi'])
  .continent(concepts['continent']['west europe'])

concepts['destinations']['gold coast australia']
  .popularity(concepts['popularity']['cukup populer'])
  .purpose(concepts['purpose']['surfing'])
  .season(concepts['season']['summer'])
  .budget(concepts['budget']['sedang'])
  .continent(concepts['continent']['east asia'])

concepts['destinations']['bali']
  .popularity(concepts['popularity']['cukup populer'])
  .purpose(concepts['purpose']['surfing'])
  .season(concepts['season']['summer'])
  .budget(concepts['budget']['rendah'])
  .continent(concepts['continent']['east asia'])

var currentQuestionIndex = 0,
    currentAnswers = [],
    showQuestion = function(currentQuestionIndex){
      lib.askQuestion(questionOrder[currentQuestionIndex].question, {
        name: questionOrder[currentQuestionIndex].about,
        values: questionOrder[currentQuestionIndex].options
      }, function(answer){
        var about = questionOrder[currentQuestionIndex].about;

        currentAnswers.push({
          about: about,
          answer: answer
        })

        var results = _.intersection.apply(this, currentAnswers.map(function(currentAnswer){
          return relations[currentAnswer.about](concepts[currentAnswer.about][currentAnswer.answer])
        }))

        if (currentQuestionIndex == questionOrder.length - 1) {
          if (results.length > 0) {
            lib.showAnswer("Tujuan destinasi terbaik adalah", _.map(results, function(c){ return c.id; })[0])
          } else {
            lib.showError("Error", "Destinasi Tidak Ditemukan")
          }
        } else {
          if (results.length > 0) {
            showQuestion(++currentQuestionIndex)
          } else {
            lib.showError("Error", "Destinasi Tidak Ditemukan")
          }
        }
      })
    }

showQuestion(currentQuestionIndex);