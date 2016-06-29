function updateQuality(updateResponse){
  var newQuality = updateResponse.quality;
  var changeQualityText =  $('[data-idea-id=' + updateResponse.id + ']').parent().children('.idea-quality').text(newQuality);

  var currentQuality = $('this, [data-idea-id=' + updateResponse.id + ']').parent().data('idea-quality', newQuality);

  // writing to DOM for debugging purposes;
  var currentQuality = $('this, [data-idea-id=' + updateResponse.id + ']').parent().attr('data-idea-quality', newQuality);
}

function incrementQualityBasedOn(currentState){
  if (currentState === "swill") {
    return "plausible";
  } else if (currentState === "plausible") {
    return "genius";
  } else {
    return currentState;
  }
}

function decrementQualityBasedOn(currentState) {
  if (currentState === "genius") {
    return "plausible";
  } else if (currentState === "plausible") {
    return "swill";
  } else {
    return currentState;
  }
}
