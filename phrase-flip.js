$(document).ready(function(){ 
  var flipDelay = 3000;
  phraseFlip($('.flip-container'));
   
  function phraseFlip($lines) {
    $lines.each(function(){
      var line = $(this);
      //trigger animation
      setTimeout(function(){ hidePhrase( line.find('.show-me') ) }, flipDelay);
      //other checks here ...
    });
  }

  function hidePhrase($phrase) {
    var nextPhrase = getNextPhrase($phrase);
    switchPhrase($phrase, nextPhrase);
    setTimeout(function(){ hidePhrase(nextPhrase) }, flipDelay);
  }
   
  function getNextPhrase($phrase) {
    return ($phrase.is(':last-child')) ? $phrase.parent().find(':first-child') : $phrase.next();
  }
   
  function switchPhrase($oldPhrase, $newPhrase) {
    $oldPhrase.removeClass('show-me').addClass('hide-me');
    $newPhrase.removeClass('hide-me').addClass('show-me');
  }
});