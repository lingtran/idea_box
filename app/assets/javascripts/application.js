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
    dataType: 'json',
    success: renderIdeas,
    error: function( req, status, err ) {
      console.log( 'something went wrong', status, err );
    }
  });

  function renderIdeas(response){
    console.table(response);
    $(response).each(function(index, object){
      $('.ideas-table').append(
        "<tr class='ideas-list'>" +
        "<td class='idea-title' data-idea-id='" + object.id + "'>" + object.title + "</td>" +
        "<td class='ideas-body' data-idea-id='" + object.id + "'>" + object.body + "</td>" +
        "<td class='ideas-quality' data-idea-id='" + object.id + "'>" + object.quality +
        "</td>" +
        "</tr>"
      );
    });
  }

  function formatBody(bodyText){
    var = bodyText;

    function nearestWord(bodyText){
      if (body)
    }
    ;
    return bodyText.substr(0, nearestWord())
  }

})
