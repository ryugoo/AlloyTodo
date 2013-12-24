function tabOpen(e) {
  // Android だったらアクションバーにメニューを表示する 
  if (OS_ANDROID) {
    var activity = $.index.getActivity();
    activity.onCreateOptionsMenu = function (e2) {
      var menuItem = e2.menu.add({
        title: 'Add',
        icon: '/images/ic_action_edit.png',
        showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
      });
      
      // Tasks コントローラのオブジェクトを作り、
      // そのメソッドとして addTask を呼び出す
      var tasksController = Alloy.createController('Tasks');
      menuItem.addEventListener('click', tasksController.addTask);
    };
    activity.invalidateOptionsMenu();
  }
  
  // TabGroup が開かれたときのタブをグローバルに参照できるようにする
  Alloy.Globals.currentTab = e.activeTab;
}

function tabFocus(e) {
  // タブを切り替えたらそのタブをグローバルに参照できるようにする
  Alloy.Globals.currentTab = e.tab;
}

$.index.open();

$.index.addEventListener("close", function () {
  $.destroy();
});

Alloy.Collections.Todo.fetch();
