function setContentEditable(element){
  $('.ideas-index').delegate(element, 'click', function(e){
    $(this).attr('contentEditable', 'true');
  });
}
