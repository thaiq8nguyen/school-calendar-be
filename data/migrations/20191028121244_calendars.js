
exports.up = function(knex) {
  return knex.schema 
  .createTable('users', table => {
      table.increments();
      table.string('name', 255).notNullable();
      table.string('username', 255).notNullable().unique();
      table.string("firstName");
      table.string("lastName");
      table.string('email').notNullable().unique();
      table.string('password').notNullable();
      table.integer('phone');
      table.boolean('isAdmin').notNullable().defaultTo(false);
  }) 
  .createTable("calendars" , table => {
     table.increments();
     table.string("calendarName")
     table.integer("calendarId")
  })    
  // .createTable("Events" , table => {
  //   table.increments();
  //   table.integer("eventId")
  //   table.increments('eventName')
  //   table.increments('eventInfo')
  // })

  .createTable('userCalendars', table => {
    table.increments()
    table
      .integer('userId')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table
      .integer('calenderId')
      .unsigned()
      .references('id')
      .inTable('calendars')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  })
  .createTable('adminCalendars', table => {
    table.increments()
    table
      .integer('adminId')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  }) 
  .createTable("events" , table => {
    table.increments();
    table.string('eventName', 255).notNullable()
    table.string('eventInfo', 255).notNullable()
  })
  .createTable('calendarEvents' , table => {
    table.increments()
    table
      .integer('calendarId')
      .unsigned()
      .references('id')
      .inTable('calendars')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table 
      .integer('eventsId') 
      .unsigned()
      .references('id')
      .inTable('events')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  })
}
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("calendarEvents")
    .dropTableIfExists("events") 
    .dropTableIfExists("adminCalendars") 
    .dropTableIfExists("userCalendars")
    .dropTableIfExists("calendars") 
    .dropTableIfExists("users")
};
