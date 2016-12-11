$ = require("./lib/jquery.min.js")

module.exports = {};

module.exports.render = function($el){
  $('#app').empty().append($el)
}

module.exports.askQuestion = function(question, option, callback){
  var $options = [];

  option.values.forEach(function(o){
    $options.push(' \
      <input id="' + o + '" type="radio" name="' + option.name + '" value="' + o + '"> \
      <label class="cap" for="' + o + '">' + o + '</label> \
    ')
  })

  var $form = $('<form id="form"> \
                    <fieldset> \
                    <legend>' + question + '</legend> \
                    ' + $options.join('\n') + ' \
                    <input type="submit" value="Submit" /> \
                    </fieldset> \
                </form>');

  module.exports.render($form)
  $('#form').submit(function(e){
    e.preventDefault();
    var chosen = $('input[name=' + option.name + ']:checked').val();
    console.log(chosen)

    callback(chosen)
    return false;
  })
}

module.exports.showAnswer = function(description, answer){
  var $form = $('<form id="form"> \
                    <fieldset> \
                      <legend>' + description + '</legend> \
                      <b class="cap">' + answer + '</b> \
                    </fieldset> \
                </form>');

  module.exports.render($form)
}

module.exports.showError = function(description, error){
  var $form = $('<form id="form"> \
                    <fieldset> \
                      <legend>' + description + '</legend> \
                      <b>' + error + '</b> \
                    </fieldset> \
                </form>');

  module.exports.render($form)
}