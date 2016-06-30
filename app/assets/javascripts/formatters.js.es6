function orderIdeas(ideas) {
  console.table(ideas);

  var ideasSortedByDate = ideas.sort(function(a, b){
    var dateA = new Date(a.created_at).getTime();
    var dateB = new Date(b.created_at).getTime();

    return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;
  });

  $(ideasSortedByDate).each(function(index, object){
    $('.ideas-table').append(
      `<tr class=ideas-list data-title="${object.title}" data-body= "${object.body}">
      <td class=idea-title id=idea-title data-idea-id=${object.id}> ${object.title} </td>
      <td class=idea-body id=idea-body data-idea-id=${object.id}> ${formatBody(object.body)} </td>
      <td class=idea-quality data-idea-id=${object.id} data-idea-quality= ${object.quality}>${object.quality}</td>
      <td class=idea-quality-up data-idea-id=${object.id} data-idea-quality= ${object.quality }>
      <input type=button name=thumbs-up value="thumbs up" id=thumbs-up data-idea-id=${object.id} ></td>
      <td class=idea-quality-down data-idea-id=${object.id } data-idea-quality=${object.quality}>
      <input type=button name=thumbs-down value="thumbs down" id=thumbs-down data-idea-id=${object.id}></td>
      <td><a href=# class=delete-idea data-idea-id=${object.id}>Delete</a></td>
      </tr>`
    );
  });
}

function formatBody(bodyText){
  if (bodyText.length > 100) {
    var getChars = bodyText.substr(0, 100);
    var lastWhiteSpace = getChars.lastIndexOf(" ");
    return bodyText.substr(0, lastWhiteSpace);
    debugger;
  }
  else {
    return bodyText;
  }
}

function prependNewIdea(newIdea){
  $('.ideas-table tr:first').after(
    `<tr class=ideas-list data-title="${newIdea.title}" data-body= "${newIdea.body}">
    <td class=idea-title id=idea-title data-idea-id=${newIdea.id} > ${newIdea.title} </td>
    <td class=idea-body id=idea-body data-idea-id=${newIdea.id} > ${formatBody(newIdea.body)} </td>
    <td class=idea-quality data-idea-id=${newIdea.id} data-idea-quality= ${newIdea.quality} > ${newIdea.quality} </td>
    <td class=idea-quality-up data-idea-id=${newIdea.id} data-idea-quality= ${newIdea.quality }>
    <input type=button name=thumbs-up value="thumbs up" id=thumbs-up data-idea-id=${newIdea.id} ></td>
    <td class=idea-quality-down data-idea-id=${newIdea.id } data-idea-quality= ${newIdea.quality} >
    <input type=button name=thumbs-down value="thumbs down" id=thumbs-down data-idea-id=${newIdea.id}></td>
    <td><a href=# class=delete-idea data-idea-id=${newIdea.id}>Delete</a></td>
    </tr>`
  );
}
