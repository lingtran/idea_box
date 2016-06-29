function renderIdeas(){
  $.ajax({
    type: 'GET',
    url: '/api/v1/ideas.json',
    dataType: 'JSON',
    success: orderIdeas,
    error: function( req, status, err ) {
      console.log( 'something went wrong in retrieving ideas index', status, err );
    }
  });
}

function renderNewIdea() {
  $('#create-idea').on('click', function(){
    var newIdeaTitle = $('#new-idea-title').val();
    var newIdeaBody = $('#new-idea-body').val();
    var postData = { title: newIdeaTitle, body: newIdeaBody  };

    createIdea(postData);

    $('#new-idea-title').val("Title");
    $('#new-idea-body').val("Body");

  });
}

function createIdea(postData){
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
