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
  voteIdeaQuality('input[name=thumbs-up]');
  voteIdeaQuality('input[name=thumbs-down]');
  enableDeleteIdea();


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

      updateIdeaCall(ideaId, patchData, 'something went wrong when updating the title')
    }
  });

  $('.ideas-index').delegate('.idea-title', 'blur', function(e){
    var updateTitle = $(e.currentTarget).text();
    var ideaId = $(e.currentTarget).data('idea-id');
    var patchData = { title: updateTitle };
    e.preventDefault();

    $(this).attr('contentEditable', 'false')

    updateIdeaCall(ideaId, patchData, 'something went wrong when updating the title')
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

      updateIdeaCall(ideaId, patchData, 'something went wrong when updating the body')
    }
  });

  $('.ideas-index').delegate('.idea-body', 'blur', function(e){
    var updateBody = $(e.currentTarget).text();
    var ideaId = $(e.currentTarget).data('idea-id');
    var patchData = { body: updateBody };

    $(this).attr('contentEditable', 'false')

    updateIdeaCall(ideaId, patchData, 'something went wrong when updating the body')
  });


});
