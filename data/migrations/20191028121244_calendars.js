
exports.up = function(knex) {
  return knex.schema 
  .createTable('users', tbl => {
      tbl.increments();
      tbl
        .string('username', 255)
  })
};

exports.down = function(knex) {
  
};
