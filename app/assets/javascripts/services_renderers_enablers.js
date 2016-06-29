function renderIdeas(){
  $.ajax({
    type: 'GET',
    url: '/api/v1/ideas.json',
    dataType: 'JSON',
    success: orderIdeas,
    error: function( req, status, err ) {
      console.log( 'something went wrong in retrieving ideas index', status, err );
    }
  });
}

function renderNewIdea() {
  $('#create-idea').on('click', function(){
    var newIdeaTitle = $('#new-idea-title').val();
    var newIdeaBody = $('#new-idea-body').val();

    var postData = { title: newIdeaTitle, body: newIdeaBody  };

    createIdeaCall(postData);

    $('#new-idea-title').val("Title");
    $('#new-idea-body').val("Body");

  });
}

function voteIdeaQuality(inputName){
  $('body').on('click', inputName, function(){
    var currentQuality = $(this).parent().data('idea-quality');
    var ideaId = $(this).parent().data('idea-id');

    if (inputName === 'input[name=thumbs-up]') {
      var patchData = { id: ideaId, quality: incrementQualityBasedOn(currentQuality) };
    } else {
      var patchData = { id: ideaId, quality: decrementQualityBasedOn(currentQuality) };
    }

    updateQualityCall(ideaId, patchData, 'something went wrong with the update');
  });
}

function enableEditIdeaOnKey(element, errorMessage){
  $('.ideas-index').delegate(element, 'keydown', function(e){

    if(e.keyCode === 13) {
      var ideaId = $(e.currentTarget).data('idea-id');
      var updateContent = $(e.currentTarget).text();

      e.preventDefault();

      $(this).attr('contentEditable', 'false')

      updateIdeaCall(ideaId, patchData(element, updateContent), errorMessage)
    }
  });
}

function enableEditIdeaOnBlur(element, errorMessage){
  $('.ideas-index').delegate(element, 'blur', function(e){
    var updateContent = $(e.currentTarget).text();
    var ideaId = $(e.currentTarget).data('idea-id');

    $(this).attr('contentEditable', 'false')

    updateIdeaCall(ideaId, patchData(element, updateContent), errorMessage);
  });
}

function enableDeleteIdea(){
  $('.ideas-index').on('click', '.delete-idea', function(e){
    var idea = $(e.currentTarget).closest('tr');
    var ideaId = $(this).data('idea-id');

    deleteIdeaCall(idea, ideaId);
  });
}
