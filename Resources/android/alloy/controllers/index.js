function Controller() {
    function tabOpen(e) {
        var activity = $.index.getActivity();
        activity.onCreateOptionsMenu = function(e2) {
            var menuItem = e2.menu.add({
                title: "Add",
                icon: "/images/ic_action_edit.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
            });
            var tasksController = Alloy.createController("Tasks");
            menuItem.addEventListener("click", tasksController.addTask);
        };
        activity.invalidateOptionsMenu();
        Alloy.Globals.currentTab = e.activeTab;
    }
    function tabFocus(e) {
        Alloy.Globals.currentTab = e.tab;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    var __alloyId22 = [];
    $.__views.__alloyId23 = Alloy.createController("Tasks", {
        id: "__alloyId23"
    });
    $.__views.tasksTab = Ti.UI.createTab({
        window: $.__views.__alloyId23.getViewEx({
            recurse: true
        }),
        title: "Tasks",
        id: "tasksTab"
    });
    __alloyId22.push($.__views.tasksTab);
    $.__views.__alloyId25 = Alloy.createController("Done", {
        id: "__alloyId25"
    });
    $.__views.doneTab = Ti.UI.createTab({
        window: $.__views.__alloyId25.getViewEx({
            recurse: true
        }),
        title: "Done",
        id: "doneTab"
    });
    __alloyId22.push($.__views.doneTab);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId22,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    tabOpen ? $.__views.index.addEventListener("open", tabOpen) : __defers["$.__views.index!open!tabOpen"] = true;
    tabFocus ? $.__views.index.addEventListener("focus", tabFocus) : __defers["$.__views.index!focus!tabFocus"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    $.index.addEventListener("close", function() {
        $.destroy();
    });
    Alloy.Collections.Todo.fetch();
    __defers["$.__views.index!open!tabOpen"] && $.__views.index.addEventListener("open", tabOpen);
    __defers["$.__views.index!focus!tabFocus"] && $.__views.index.addEventListener("focus", tabFocus);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;