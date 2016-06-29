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
