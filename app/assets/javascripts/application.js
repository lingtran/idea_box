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

  $.ajax({
    type: 'GET',
    url: '/api/v1/ideas.json',
    dataType: 'JSON',
    success: renderIdeas,
    error: function( req, status, err ) {
      console.log( 'something went wrong in retrieving ideas index', status, err );
    }

  });

  function renderIdeas(ideas){
    console.table(ideas);
    var ideasSortedByDate = ideas.sort(function(a, b){
      var dateA = new Date(a.created_at).getTime();
      var dateB = new Date(b.created_at).getTime();
      return dateA > dateB ? -1 : dateA < dateB ? 1 : 0
    });

    $(ideasSortedByDate).each(function(index, object){
      $('.ideas-table').append(
        "<tr class='ideas-list'>" +
        "<td class='idea-title' data-idea-id='" + object.id + "'>" + object.title + "</td>" +
        "<td class='ideas-body' data-idea-id='" + object.id + "'>" + formatBody(object.body) + "</td>" +
        "<td class='ideas-quality' data-idea-id='" + object.id + "'>" + object.quality +
        "</td>" +
        "<td><a href='#' class='delete-idea' data-idea-id='" + object.id + "'>Delete</a></td>" +
        "</tr>"
      );
    });
  }

  function formatBody(bodyText){
    if (bodyText.length > 100) {
      var lastWhiteSpace = bodyText.lastIndexOf(" ")
      return bodyText.substr(0, lastWhiteSpace);
    }
    else {
      return bodyText;
    }
  };

  $('#create-idea').on('click', function(){
    var newIdeaTitle = $('#new-idea-title').val();
    var newIdeaBody = $('#new-idea-body').val();
    var postData = { title: newIdeaTitle, body: newIdeaBody  };

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

    $('#new-idea-title').val("Title");
    $('#new-idea-body').val("Body");

  });

  function prependNewIdea(newIdea){
    $('.ideas-table tr:first').after(
      "<tr class='ideas-list'>" +
      "<td class='idea-title' data-idea-id='" + newIdea.id + "'>" + newIdea.title + "</td>" +
      "<td class='ideas-body' data-idea-id='" + newIdea.id + "'>" + formatBody(newIdea.body) + "</td>" +
      "<td class='ideas-quality' data-idea-id='" + newIdea.id + "'>" + newIdea.quality +
      "</td>" +
      "<td><a href='#' class='delete-idea' data-idea-id='" + newIdea.id + "'>Delete</a></td>" +
      "</tr>"
    );
  };

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

})
