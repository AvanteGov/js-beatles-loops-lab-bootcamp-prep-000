// add solution here
function theBeatlesPlay(musicians,instruments){
  var beatles = []
  for (i = 0; i < 5; i++){
    beatles.unshift("${musicians} plays ${instruments}")
    
  }
  return beatles;
}
