function setContentEditable(element){
  $('.ideas-index').delegate(element, 'click', function(e){
    $(this).attr('contentEditable', 'true');
  });
}

var patchData = function(element, updateContent){
  if (element === '.idea-title'){
    return { title: updateContent };
  } else {
    return { body: updateContent };
  }
}
