
exports.up = function(knex) {
  return knex.schema.table("usersLogin", table => {
      table.string("uuid").notNullable().unique().defaultTo(1);
  })
};

exports.down = function(knex) {
  return knex.scheme.table("usersLogin", table => {
      table.dropColumn("uuid");
  })
};
