function enableFilteredSearch(){

  $('.search-field').delegate('.search-idea', 'keyup', function(e){
    e.preventDefault();

    var ideas = $('.ideas-list');
    var searchText = $(e.currentTarget).text().trim().toLowerCase();

    $('.new-idea').hide();

    filterIdeas(ideas, searchText);

    escapeSearch(ideas, 'keyup');
    escapeSearch(ideas, 'blur')

  });
}

function escapeSearch(ideas, behavior) {
  $('.search-field').delegate('.search-idea', behavior, function(e){
    if (behavior === 'keyup'){
      $('.search-field').attr('contentEditable', 'false');
      if (e.keyCode === 27){
        $(this).empty();
        $('.new-idea').show();
        ideas.show();
      }
    } else {
      $(this).empty();
      $('.new-idea').show();
      ideas.show();
    }
  })
}

function filterIdeas(ideas, searchText) {
  ideas.filter(function(index, idea){
    var existingText = $(idea).data();
    var titleText = existingText.title.toLowerCase();
    var bodyText = existingText.body.toLowerCase();

    if( titleText.includes(searchText) || bodyText.includes(searchText)) {
      $(this).show();
    } else{
      $(this).hide();
    }
  });
}
