function addTask() {
  var addWin, index;
  if (Alloy.Globals.currentTab === undefined) {
    index = Alloy.createController("index");
    Alloy.Globals.currentTab = index.getView("tasksTab");
  }
  addWin = Alloy.createController("Add").getView("addWin");
  Alloy.Globals.currentTab.open(addWin);
}
// Tasks コントローラのメソッドとして addTask 関数を登録する
$.addTask = addTask;

var moment = require("alloy/moment");
function transData(model) {
  var transform, limitTime;
  transform = model.toJSON();
  limitTime = transform.limitTime;
  transform.limitTime = moment(Number(limitTime)).format("YYYY/MM/DD");
  return transform;
}

function filterData(collection) {
  return collection.where({
    done: 0
  });
}

var dialogs = require("alloy/dialogs");
function doneConfirm(e) {
  dialogs.confirm({
    message: "Done?",
    callback: function() {
      var model = Alloy.Collections.Todo.where({
        alloy_id: e.rowData._id
      })[0];
      model.set({
        done: 1
      }).save();
    }
  });
}