const db = require('../data/db-config.js');

module.exports = {
    find,
    findByAdminId,
    addAdmin,
    removeAdmin, 
    updateAdmin,
}

function find(cal_id) {
    return (
        db('adminCalendars')
            .where(cal_id)
            .join('users', 'adminId', 'users.id')
            .select('name', 'username', 'email', 'phone')
    )
}

function findByAdminId(cal_id, admin_id) {
    return (
        db('adminCalendars')
            .where({cal_id, admin_id})
            .join('users', 'adminId', 'users.id')
            .select('name', 'username', 'email', 'phone')
    )
}

function addAdmin(cal_id, admin) {
    return (
        db('adminCalendars')
            .where(cal_id)
            .insert(admin)
    )
}

function removeAdmin(cal_id, admin_id) {
    return (
        db('adminCalendars')
            .where({cal_id, admin_id})
            .del()
    )
}

function updateAdmin(cal_id, admin_id, changes) {
    return (
        db('adminCalendars')
            .where({cal_id, admin_id})
            .update(changes)
    )
}