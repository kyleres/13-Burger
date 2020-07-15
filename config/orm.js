const connection = require("./connection");

const orm = {
  selectAll: function(table, cb) {
    let queryString = `SELECT * FROM ${table};`;
    connection.query(queryString, function(err, res) {
      if (err) {
        throw err;
      };
      cb(res);
    });
  },
  insertOne: function(table, input, cb) {
    let queryString = `INSERT INTO ${table} SET ${input}`;
    connection.query(queryString, function(err, res) {
      if (err) {
        throw err;
      };
      cb(res);
    });
  },
  updateOne: function(table, input, id, cb) {
    let queryString = `UPDATE ${table} SET ${input} WHERE ${id};`;
    connection.query(queryString, function(err, res) {
      if (err) {
        throw err;
      };
      cb(res);
    });
  }
};

module.exports = orm;