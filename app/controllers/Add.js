$.todoLimit.minDate = new Date();
function blurTextArea() {
  $.inputTask.blur();
}
function saveTask() {
  limitTime = limitTime || Date.now();
  var todo = Alloy.createModel("Todo", {
    task: $.inputTask.value,
    limitTime: "" + limitTime,
    done: 0
  });
  if (todo.isValid()) {
    todo.save();
    $.addWin.close({
      animated: true
    });
    alert("Save!");
    Alloy.Collections.Todo.fetch();
  } else {
    todo.destroy();
    alert("Failed");
  }
}
var limitTime;
function setLimitTime(e) {
  limitTime = (e.value).getTime();
}