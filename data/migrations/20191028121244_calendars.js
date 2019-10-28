
exports.up = function(knex) {
  return knex.schema 
  .createTable('usersLogin', table => {
      table.increments();
      table.string('username', 255).notNullable();
      table.string('email').notNullable().unique();
      table.string('password').notNullable();
      table.boolean('isAdmin').notNullable().defaultTo(false);
      
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("usersLogin");
};
