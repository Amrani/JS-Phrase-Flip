$(document).ready(function(){
  var count = 0;
  clearTimeout(window.letterTimeout);
  var phrases = ["First", "Second", "Third"];
  var numberOfPhrases = phrases.length;
  function typeIt(){
    type();
  }
  function flipup(){
    $('.box-text').css('transform', 'scaleY(-1)');
    $('.box-text').css('-ms-filter', 'flipv');
    $('.box-text').css('filter', 'flipv');
  }
  function flipdown(){
    $('.box-text').text(phrases[count % numberOfPhrases]);
    $('.box-text').css('transform', 'scaleY(1)');
    $('.box-text').css('-ms-filter', 'flipv');
    $('.box-text').css('filter', 'flipv');
  }
  function type(){
    window.letterTimeout = setTimeout(type, 3000);
    setTimeout(flipup, 700);
    setTimeout(flipdown, 730);
    count++;
  }
  typeIt(phrases[0]);
});