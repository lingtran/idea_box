function enableFilteredSearch(){

  $('.search-field').delegate('.search-idea', 'keyup', function(e){
    e.preventDefault();

    var ideas = $('.ideas-list');
    var searchText = $(e.currentTarget).text().trim();

    filterIdeas(ideas, searchText);
  });

  function filterIdeas(ideas, searchText) {
    ideas.filter(function(index, idea){
      var existingText = $(idea).data();

      if( existingText.title.includes(searchText) || existingText.body.includes(searchText)) {
        $(this).show();
      } else{
        $(this).hide();
      }
    });
  }
}
