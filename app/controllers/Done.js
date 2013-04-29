var moment = require("alloy/moment");
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
