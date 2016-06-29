// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function(){

  renderIdeas();
  renderNewIdea();


// thumbs up
  $('body').on('click', 'input[name=thumbs-up]', function(){
    var currentQuality = $(this).parent().data('idea-quality');
    var ideaId = $(this).parent().data('idea-id');
    var patchData = { id: ideaId, quality: incrementQualityBasedOn(currentQuality) };

    function incrementQualityBasedOn(currentState){
      if (currentState === "swill") {
        return "plausible";
      } else if (currentState === "plausible") {
        return "genius";
      } else {
        return currentState;
      }
    }

    $.ajax({
      method: 'PATCH',
      url: '/api/v1/ideas/' + ideaId + ".json",
      data: patchData,
      dataType: "JSON",
      success: updateQuality,
      failure: function(req, status, err) {
        console.log('something went wrong with the update', status, err);
      }
    });

  });

// thumbs down
  $('body').on('click', 'input[name=thumbs-down]', function(){
    var currentQuality = $(this).parent().data('idea-quality');
    var ideaId = $(this).parent().data('idea-id');
    var patchData = { id: ideaId, quality: decrementQualityBasedOn(currentQuality) };

    function decrementQualityBasedOn(currentState) {
      if (currentState === "genius") {
        return "plausible";
      } else if (currentState === "plausible") {
        return "swill";
      } else {
        return currentState;
      }
    }

    $.ajax({
      method: 'PATCH',
      url: '/api/v1/ideas/' + ideaId + ".json",
      data: patchData,
      dataType: "JSON",
      success: updateQuality,
      failure: function(req, status, err) {
        console.log('something went wrong with the update', status, err);
      }
    });

  });

  function updateQuality(updateResponse){
    var newQuality = updateResponse.quality;
    var changeQualityText =  $('[data-idea-id=' + updateResponse.id + ']').parent().children('.idea-quality').text(newQuality);

    var currentQuality = $('this, [data-idea-id=' + updateResponse.id + ']').parent().data('idea-quality', newQuality);

    // writing to DOM for debugging purposes;
    var currentQuality = $('this, [data-idea-id=' + updateResponse.id + ']').parent().attr('data-idea-quality', newQuality);

  }

  $('.ideas-index').on('click', '.delete-idea', function(e){
    var idea = $(e.currentTarget).closest('tr');
    var ideaId = $(this).data('idea-id');
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
  });

// idea title

  $('.ideas-index').delegate('.idea-title', 'click', function(e){
    $(this).attr('contentEditable', 'true');
  });

  $('.ideas-index').delegate('.idea-title', 'keydown', function(e){
    if(e.keyCode === 13) {
      var updateTitle = $(e.currentTarget).text();
      var ideaId = $(e.currentTarget).data('idea-id');
      var patchData = { title: updateTitle };
      e.preventDefault();

      $(this).attr('contentEditable', 'false')

      updateIdea(ideaId, patchData)
    }
  });

  $('.ideas-index').delegate('.idea-title', 'blur', function(e){
    var updateTitle = $(e.currentTarget).text();
    var ideaId = $(e.currentTarget).data('idea-id');
    var patchData = { title: updateTitle };
    e.preventDefault();

    $(this).attr('contentEditable', 'false')

    updateIdea(ideaId, patchData)
  });

  // update idea body
  $('.ideas-index').delegate('.idea-body', 'click', function(){
    $(this).attr('contentEditable', 'true');
  });

  $('.ideas-index').delegate('.idea-body', 'keydown', function(e){
    if(e.keyCode === 13) {
      var updateBody = $(e.currentTarget).text();
      var ideaId = $(e.currentTarget).data('idea-id');
      var patchData = { body: updateBody };
      e.preventDefault();

      $(this).attr('contentEditable', 'false')

      updateIdea(ideaId, patchData)
    }
  });

  $('.ideas-index').delegate('.idea-body', 'blur', function(e){
    var updateBody = $(e.currentTarget).text();
    var ideaId = $(e.currentTarget).data('idea-id');
    var patchData = { body: updateBody };

    $(this).attr('contentEditable', 'false')

    updateIdea(ideaId, patchData)
  });


  function updateIdea(ideaId, patchData){
    $.ajax({
      method: "PATCH",
      url: "/api/v1/ideas/" + ideaId + ".json",
      dataType: "JSON",
      data: patchData,
      success: function(){
      },
      error: function(req, status, err){
        console.log("something went wrong when updating title", status, err);
      }
    });
  }

});
