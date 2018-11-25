function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(let i = 0; i < musicians.length; i++){
    array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts){
  exclaimedFacts = []
  let i = 0;
  while (i < facts.length){
    exclaimedFacts.push(facts[i] + "!!!");
    i++;
  }
  return exclaimedFacts;
}

function iLoveTheBeatles (number){
  var array = [];
  var i = 0;
  do {
    array.push('I love the Beatles!');
    i++;
  } while (i <= number && number < 15);
  return array;
}