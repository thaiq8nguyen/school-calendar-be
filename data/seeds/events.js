
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {id: 1, eventNanme: 'test1', eventInfo:'descrition for first calendar'},
        {id: 2, eventNanme: 'test2', eventInfo:'descrition for second calendar'},
        {id: 3, eventNanme: 'test3', eventInfo:'descrition for third calendar'},
      ]);
    });
};
