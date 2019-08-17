const waitlist = require('./waitlist.js');
const reservations = require('./reservations');

module.exports = {
    reserved: reservations,
    wating: waitlist
};