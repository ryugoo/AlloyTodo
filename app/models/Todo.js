exports.definition = {
  config: {
    columns: {
      "task": "TEXT",
      "limitTime": "TEXT",
      "done": "INTEGER"
    },
    adapter: {
      type: "sql",
      collection_name: "Todo"
    }
  },
  extendModel: function(Model) {
    _.extend(Model.prototype, {
      validate: function(attr) {
        if ((attr.task).length <= 0) {
          return "Error: Task is not input.";
        }
        if (String(attr.limitTime).length <= 0) {
          return "Error: Limit time is not set.";
        }
      }
    });

    return Model;
  },
  extendCollection: function(Collection) {
    _.extend(Collection.prototype, {
      // extended functions and properties go here
    });

    return Collection;
  }
}