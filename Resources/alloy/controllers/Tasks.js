function Controller() {
    function __alloyId34() {
        var models = filterData(__alloyId33);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId28 = models[i];
            __alloyId28.__transform = transData(__alloyId28);
            var __alloyId29 = Ti.UI.createTableViewRow({
                _id: "undefined" != typeof __alloyId28.__transform["alloy_id"] ? __alloyId28.__transform["alloy_id"] : __alloyId28.get("alloy_id")
            });
            rows.push(__alloyId29);
            doneConfirm ? __alloyId29.addEventListener("click", doneConfirm) : __defers["__alloyId29!click!doneConfirm"] = true;
            var __alloyId30 = Ti.UI.createView({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                top: 6,
                right: 11,
                bottom: 6,
                left: 11,
                layout: "horizontal"
            });
            __alloyId29.add(__alloyId30);
            var __alloyId31 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                textAlign: "left",
                font: {
                    fontSize: "18sp"
                },
                text: "undefined" != typeof __alloyId28.__transform["task"] ? __alloyId28.__transform["task"] : __alloyId28.get("task")
            });
            __alloyId30.add(__alloyId31);
            var __alloyId32 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                textAlign: "left",
                font: {
                    fontSize: "14sp"
                },
                text: "undefined" != typeof __alloyId28.__transform["limitTime"] ? __alloyId28.__transform["limitTime"] : __alloyId28.get("limitTime")
            });
            __alloyId30.add(__alloyId32);
        }
        $.__views.tasks.setData(rows);
    }
    function addTask() {
        var addWin, index;
        if (void 0 === Alloy.Globals.currentTab) {
            index = Alloy.createController("index");
            Alloy.Globals.currentTab = index.getView("tasksTab");
        }
        addWin = Alloy.createController("Add").getView("addWin");
        Alloy.Globals.currentTab.open(addWin);
    }
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
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("Todo");
    $.__views.Tasks = Ti.UI.createWindow({
        title: "Tasks",
        id: "Tasks"
    });
    $.__views.Tasks && $.addTopLevelView($.__views.Tasks);
    $.__views.Tasks.activity.onCreateOptionsMenu = function(e) {
        var __alloyId26 = {
            icon: "images/ic_action_edit.png",
            showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM,
            title: "Add",
            id: "addButton"
        };
        $.__views.addButton = e.menu.add(_.pick(__alloyId26, Alloy.Android.menuItemCreateArgs));
        $.__views.addButton.applyProperties(_.omit(__alloyId26, Alloy.Android.menuItemCreateArgs));
        addTask ? $.__views.addButton.addEventListener("click", addTask) : __defers["$.__views.addButton!click!addTask"] = true;
    };
    $.__views.tasks = Ti.UI.createTableView({
        id: "tasks"
    });
    $.__views.Tasks.add($.__views.tasks);
    var __alloyId33 = Alloy.Collections["Todo"] || Todo;
    __alloyId33.on("fetch destroy change add remove reset", __alloyId34);
    exports.destroy = function() {
        __alloyId33.off("fetch destroy change add remove reset", __alloyId34);
    };
    _.extend($, $.__views);
    var moment = require("alloy/moment");
    var dialogs = require("alloy/dialogs");
    __defers["$.__views.addButton!click!addTask"] && $.__views.addButton.addEventListener("click", addTask);
    __defers["$.__views.addButton!click!addTask"] && $.__views.addButton.addEventListener("click", addTask);
    __defers["__alloyId29!click!doneConfirm"] && __alloyId29.addEventListener("click", doneConfirm);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;