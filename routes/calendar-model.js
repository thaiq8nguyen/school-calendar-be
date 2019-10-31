const db = require('../data/db-config.js');   // Calendar-Modal

module.exports = {
get ,
getById,
add,
remove,
update
} 

function get(){
    return db('calendars')
    .select('calendarName', 'calendarDescription')
} 
function getById(id){
      return db('calendars')
       .where({id});
    } 
function add(calender){
  return db('calendars')
  .insert(calender , 'id')
} 
function remove(calId){
  return db('calendars') 
  .where({calId})
  .del();
} 
function update(calId , updated){
    return db('calendars')
    .where({calId})
    .update(updated)
}