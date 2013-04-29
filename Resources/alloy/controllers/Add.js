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
            Alloy.Collections.Todo.fetch();
            alert("Save!");
        } else {
            todo.destroy();
            alert("Failed");
        }
    }
    function setLimitTime(e) {
        limitTime = e.value.getTime();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
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
            fontSize: "16sp"
        },
        textAlign: "left",
        color: "#FFFFFF",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 11,
        bottom: 11,
        left: 11,
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
    $.__views.__alloyId2 = Ti.UI.createLabel({
        font: {
            fontSize: "16sp"
        },
        textAlign: "left",
        color: "#FFFFFF",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 11,
        bottom: 11,
        left: 11,
        text: "2. 何を行う",
        id: "__alloyId2"
    });
    $.__views.addWrap.add($.__views.__alloyId2);
    $.__views.inputTask = Ti.UI.createTextArea({
        font: {
            fontSize: "16sp"
        },
        height: "96dp",
        right: 11,
        bottom: 11,
        left: 11,
        id: "inputTask"
    });
    $.__views.addWrap.add($.__views.inputTask);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        font: {
            fontSize: "16sp"
        },
        textAlign: "left",
        color: "#FFFFFF",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 11,
        bottom: 11,
        left: 11,
        text: "3. 保存する",
        id: "__alloyId3"
    });
    $.__views.addWrap.add($.__views.__alloyId3);
    $.__views.saveTask = Ti.UI.createButton({
        width: Ti.UI.FILL,
        right: 11,
        bottom: 11,
        left: 11,
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