function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createTabGroup({
        id: "index"
    });
    $.__views.__alloyId15 = Alloy.createController("Tasks", {
        id: "__alloyId15"
    });
    $.__views.tasksTab = Ti.UI.createTab({
        window: $.__views.__alloyId15.getViewEx({
            recurse: true
        }),
        title: "Tasks",
        id: "tasksTab"
    });
    $.__views.index.addTab($.__views.tasksTab);
    $.__views.__alloyId18 = Alloy.createController("Done", {
        id: "__alloyId18"
    });
    $.__views.doneTab = Ti.UI.createTab({
        window: $.__views.__alloyId18.getViewEx({
            recurse: true
        }),
        title: "Done",
        id: "doneTab"
    });
    $.__views.index.addTab($.__views.doneTab);
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.addEventListener("open", function(e) {
        Alloy.Globals.currentTab = e.activeTab;
    });
    $.index.addEventListener("focus", function(e) {
        Alloy.Globals.currentTab = e.tab;
    });
    $.index.addEventListener("close", function() {
        $.destroy();
    });
    Alloy.Collections.Todo.fetch();
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;