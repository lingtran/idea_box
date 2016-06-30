function setContentEditable(parentElement, childElement){
  $(parentElement).delegate(childElement, 'click', function(){
    $(this).attr('contentEditable', 'true');
  });
}

var patchData = function(element, updateContent){
  if (element === '.idea-title'){
    return { title: updateContent };
  } else {
    return { body: updateContent };
  }
};
