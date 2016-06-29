var patchQualityData = function(inputName, ideaId, currentQuality){
  if (inputName === 'input[name=thumbs-up]') {
    return { id: ideaId, quality: incrementQualityBasedOn(currentQuality) };
  } else {
    return { id: ideaId, quality: decrementQualityBasedOn(currentQuality) };
  }
}
