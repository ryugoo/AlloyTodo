function Controller() {
    function __alloyId12(e) {
        if (e && e.fromAdapter) return;
        __alloyId12.opts || {};
        var models = filterData(__alloyId11);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId5 = models[i];
            __alloyId5.__transform = transData(__alloyId5);
            var __alloyId7 = Ti.UI.createTableViewRow({});
            rows.push(__alloyId7);
            var __alloyId8 = Ti.UI.createView({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                top: "6dp",
                right: "11dp",
                bottom: "6dp",
                left: "11dp",
                layout: "horizontal"
            });
            __alloyId7.add(__alloyId8);
            var __alloyId9 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                textAlign: "left",
                font: {
                    fontSize: "18sp",
                    fontWeight: "bold"
                },
                text: "undefined" != typeof __alloyId5.__transform["task"] ? __alloyId5.__transform["task"] : __alloyId5.get("task")
            });
            __alloyId8.add(__alloyId9);
            var __alloyId10 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                textAlign: "left",
                font: {
                    fontSize: "14sp"
                },
                text: "undefined" != typeof __alloyId5.__transform["limitTime"] ? __alloyId5.__transform["limitTime"] : __alloyId5.get("limitTime")
            });
            __alloyId8.add(__alloyId10);
        }
        $.__views.done.setData(rows);
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
            done: 1
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Done";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("Todo");
    $.__views.Done = Ti.UI.createWindow({
        title: "Done",
        id: "Done"
    });
    $.__views.Done && $.addTopLevelView($.__views.Done);
    $.__views.done = Ti.UI.createTableView({
        id: "done"
    });
    $.__views.Done.add($.__views.done);
    var __alloyId11 = Alloy.Collections["Todo"] || Todo;
    __alloyId11.on("fetch destroy change add remove reset", __alloyId12);
    exports.destroy = function() {
        __alloyId11.off("fetch destroy change add remove reset", __alloyId12);
    };
    _.extend($, $.__views);
    var moment = require("alloy/moment");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;