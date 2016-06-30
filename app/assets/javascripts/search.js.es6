function enableFilteredSearch(){

  $('.search-field').delegate('.search-idea', 'keyup', function(e){
    e.preventDefault();

    var ideas = $('.ideas-list');
    var searchText = $(e.currentTarget).text().trim().toLowerCase();

    $('.new-idea').hide();

    filterIdeas(ideas, searchText);

    escapeSearchOnBlur(ideas);
    escapeSearchOnEsc(ideas);

  });
}

function escapeSearchOnBlur (ideas){
  $('.search-field').delegate('.search-idea', 'blur', function(e){
    $(this).empty();
    $('.new-idea').show();
    ideas.show();
  })
}

function escapeSearchOnEsc (ideas){
  $('.search-field').delegate('.search-idea', 'keyup', function(e){
    $('.search-field').attr('contentEditable', 'false');

    if(e.keyCode === 27){
      $('.new-idea').show();
      ideas.show();
      $(this).empty();
    }
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
