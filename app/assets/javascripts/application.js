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

  setContentEditable('.idea-title');
  setContentEditable('.idea-body');

  enableEditIdeaOnKey('.idea-title','something went wrong when updating the title');
  enableEditIdeaOnKey('.idea-body', 'something went wrong when updating the body');

  enableEditIdeaOnBlur('.idea-title', 'something went wrong when updating the title');
  enableEditIdeaOnBlur('.idea-body', 'something went wrong when updating the body');

  $('.search-field').delegate('.search-idea', 'click', function(){
    $(this).attr('contentEditable', 'true');
  })

  $('.search-field').delegate('.search-idea', 'keyup', function(e){
    var searchText = $(e.currentTarget).text().trim();
    e.preventDefault();

    var ideas = $('.ideas-list');

    var filterIdeas = $('.ideas-list').each(function(index, idea){

      ideas.filter(function(index, idea){
        var existingText = $(idea).data();

        if( existingText.title.includes(searchText) || existingText.body.includes(searchText)) {
          $(this).show();
        } else{
          $(this).hide();
        }

      });

    })

  });

});
