$("#button").click(addTask)

function addTask(event){
  event.preventDefault();
  var toAdd = $("input").val();
  var table = $("ul");
  var newLine = $('<li>').text(toAdd).addClass("list-group-item");
  var removeButton = $('<button>').addClass("btn btn-primary btn-sm").attr("href", "#").attr("id", "removeButton").text("Remove");

  removeButton.click(removeTask);
  table.append(newLine);
  newLine.append(removeButton);
  $("input").val("");

}

function removeTask(newLine){
  $(this).parent().remove();

}
