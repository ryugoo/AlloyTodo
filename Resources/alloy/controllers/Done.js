function Controller() {
    function __alloyId13() {
        var models = filterData(__alloyId12);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId7 = models[i];
            __alloyId7.__transform = transData(__alloyId7);
            var __alloyId8 = Ti.UI.createTableViewRow({});
            rows.push(__alloyId8);
            var __alloyId9 = Ti.UI.createView({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                top: 6,
                right: 11,
                bottom: 6,
                left: 11,
                layout: "horizontal"
            });
            __alloyId8.add(__alloyId9);
            var __alloyId10 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                textAlign: "left",
                font: {
                    fontSize: "18sp"
                },
                text: "undefined" != typeof __alloyId7.__transform["task"] ? __alloyId7.__transform["task"] : __alloyId7.get("task")
            });
            __alloyId9.add(__alloyId10);
            var __alloyId11 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                textAlign: "left",
                font: {
                    fontSize: "14sp"
                },
                text: "undefined" != typeof __alloyId7.__transform["limitTime"] ? __alloyId7.__transform["limitTime"] : __alloyId7.get("limitTime")
            });
            __alloyId9.add(__alloyId11);
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
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
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
    var __alloyId12 = Alloy.Collections["Todo"] || Todo;
    __alloyId12.on("fetch destroy change add remove reset", __alloyId13);
    exports.destroy = function() {
        __alloyId12.off("fetch destroy change add remove reset", __alloyId13);
    };
    _.extend($, $.__views);
    var moment = require("alloy/moment");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;