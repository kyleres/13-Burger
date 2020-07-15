const orm = require("../config/orm");

const burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    })
  },
  insertOne: function(input, cb) {
    orm.insertOne("burgers", input, function(res) {
      cb(res);
    });
  },
  updateOne: function(input, id, cb) {
    orm.updateOne("burgers", input, id, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;