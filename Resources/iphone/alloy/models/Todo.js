exports.definition = {
    config: {
        columns: {
            task: "text",
            limitTime: "text",
            done: "integer"
        },
        adapter: {
            type: "sql",
            collection_name: "Todo"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            validate: function(attr) {
                if (0 >= attr.task.length) return "Error: Task is not input.";
                if (0 >= String(attr.limitTime).length) return "Error: Limit time is not set.";
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("Todo", exports.definition, []);

collection = Alloy.C("Todo", exports.definition, model);

exports.Model = model;

exports.Collection = collection;