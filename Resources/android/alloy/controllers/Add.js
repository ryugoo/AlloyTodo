function Controller() {
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
    function setLimitTime(e) {
        limitTime = e.value.getTime();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Add";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.addWin = Ti.UI.createWindow({
        id: "addWin",
        title: "Add Task",
        tabBarHidden: "true"
    });
    $.__views.addWin && $.addTopLevelView($.__views.addWin);
    $.__views.addWrap = Ti.UI.createScrollView({
        id: "addWrap",
        layout: "vertical"
    });
    $.__views.addWin.add($.__views.addWrap);
    blurTextArea ? $.__views.addWrap.addEventListener("click", blurTextArea) : __defers["$.__views.addWrap!click!blurTextArea"] = true;
    $.__views.__alloyId0 = Ti.UI.createLabel({
        font: {
            fontSize: "16sp",
            fontWeight: "bold"
        },
        textAlign: "left",
        color: "#FFFFFF",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: "11dp",
        bottom: "11dp",
        left: "11dp",
        right: "11dp",
        text: "1. いつまでに",
        id: "__alloyId0"
    });
    $.__views.addWrap.add($.__views.__alloyId0);
    $.__views.todoLimit = Ti.UI.createPicker({
        type: Ti.UI.PICKER_TYPE_DATE,
        locale: "ja",
        id: "todoLimit"
    });
    $.__views.addWrap.add($.__views.todoLimit);
    setLimitTime ? $.__views.todoLimit.addEventListener("change", setLimitTime) : __defers["$.__views.todoLimit!change!setLimitTime"] = true;
    $.__views.__alloyId1 = Ti.UI.createLabel({
        font: {
            fontSize: "16sp",
            fontWeight: "bold"
        },
        textAlign: "left",
        color: "#FFFFFF",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: "11dp",
        bottom: "11dp",
        left: "11dp",
        right: "11dp",
        text: "2. 何を行う",
        id: "__alloyId1"
    });
    $.__views.addWrap.add($.__views.__alloyId1);
    $.__views.inputTask = Ti.UI.createTextArea({
        font: {
            fontSize: "16sp"
        },
        width: Ti.UI.FILL,
        height: "96dp",
        top: "11dp",
        bottom: "11dp",
        left: "11dp",
        right: "11dp",
        id: "inputTask"
    });
    $.__views.addWrap.add($.__views.inputTask);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        font: {
            fontSize: "16sp",
            fontWeight: "bold"
        },
        textAlign: "left",
        color: "#FFFFFF",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: "11dp",
        bottom: "11dp",
        left: "11dp",
        right: "11dp",
        text: "3. 保存する",
        id: "__alloyId2"
    });
    $.__views.addWrap.add($.__views.__alloyId2);
    $.__views.saveTask = Ti.UI.createButton({
        width: Ti.UI.FILL,
        top: "11dp",
        bottom: "11dp",
        left: "11dp",
        right: "11dp",
        id: "saveTask",
        title: "保存する"
    });
    $.__views.addWrap.add($.__views.saveTask);
    saveTask ? $.__views.saveTask.addEventListener("click", saveTask) : __defers["$.__views.saveTask!click!saveTask"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.todoLimit.minDate = new Date();
    var limitTime;
    __defers["$.__views.addWrap!click!blurTextArea"] && $.__views.addWrap.addEventListener("click", blurTextArea);
    __defers["$.__views.todoLimit!change!setLimitTime"] && $.__views.todoLimit.addEventListener("change", setLimitTime);
    __defers["$.__views.saveTask!click!saveTask"] && $.__views.saveTask.addEventListener("click", saveTask);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;