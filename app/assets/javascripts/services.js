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

function createIdeaCall(postData){
  $.ajax({
    type: 'POST',
    url: '/api/v1/ideas.json',
    dataType: 'JSON',
    data: postData,
    success: prependNewIdea,
    error: function (req, status, err ){
      console.log('something went wrong when posting', status, err);
    }
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

function updateQualityCall (ideaId, patchData, errorMessage){
  $.ajax({
    method: 'PATCH',
    url: '/api/v1/ideas/' + ideaId + ".json",
    data: patchData,
    dataType: "JSON",
    success: updateQuality,
    failure: function(req, status, err) {
      console.log(errorMessage, status, err);
    }
  });
}

function updateIdeaCall(ideaId, patchData, errorMessage){
  $.ajax({
    method: "PATCH",
    url: "/api/v1/ideas/" + ideaId + ".json",
    dataType: "JSON",
    data: patchData,
    success: function(){
      console.log("success!")
    },
    error: function(req, status, err){
      console.log(errorMessage, status, err);
    }
  });
}

function enableDeleteIdea(){
  $('.ideas-index').on('click', '.delete-idea', function(e){
    var idea = $(e.currentTarget).closest('tr');
    var ideaId = $(this).data('idea-id');

    deleteIdeaCall(idea, ideaId);
  });
}

function deleteIdeaCall(idea, ideaId){
  $.ajax({
    method: 'DELETE',
    url: "/api/v1/ideas/" + ideaId + ".json",
    dataType: "JSON",
    success: function(){
      idea.remove();
    },
    error: function(req, status, err){
      console.log('something went wrong when deleting idea', status, err);
    }
  });
}
