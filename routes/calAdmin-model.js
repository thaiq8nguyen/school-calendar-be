const db = require('../data/db-config.js');

module.exports = {
    get,
    getById,
    add,
    remove, 
    update,
}

function get(cal_id) {
    return (
        db('adminCalendars')
            .where({cal_id})
            .join('users', 'adminId', 'users.id')
            .select('name', 'username', 'email', 'phone')
    )
}

function getById(cal_id, admin_id) {
    return (
        db('adminCalendars')
            .where({cal_id, admin_id})
            .join('users', 'adminId', 'users.id')
            .select('name', 'username', 'email', 'phone')
    )
}

function add(cal_id, admin) {
    return (
        db('adminCalendars')
            .where({cal_id})
            .insert(admin)
    )
}

function remove(cal_id, admin_id) {
    return (
        db('adminCalendars')
            .where({cal_id, admin_id})
            .del()
    )
}

function update(cal_id, admin_id, changes) {
    return (
        db('adminCalendars')
            .where({cal_id, admin_id})
            .update(changes)
    )
}