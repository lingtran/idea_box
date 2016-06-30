function enableFilteredSearch(){

  $('.search-field').delegate('.search-idea', 'keyup', function(e){
    e.preventDefault();

    var ideas = $('.ideas-list');
    var searchText = $(e.currentTarget).text().trim().toLowerCase();

    filterIdeas(ideas, searchText);
  });
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
