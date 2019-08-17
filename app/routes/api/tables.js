const router = require('express').Router();

const waitlist = require('../../data/waitlist');
const reservations = require('../../data/reservations');
const tableInfo = require('../../data/tableinfo');

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(waitlist);
// app.use(reservations);

const apiRoute = router.get('/api/:type', (req, res) => {
    const type = req.params.type;

    switch(type) {
        case 'waitlist':
            res.json(waitlist);
            break;
        case 'reservations':
            res.json(reservations);
            break;
        default:
            res.send('Whoops. That\'s an invalid parameter');
            break;
    }
});

router.get('/tables.html', (req, res) => {
    console.log(req);
    return res.json(tableInfo);
})

router.post('/reserve.html', (req, res) => {

    const reservation = req.body;

    if (reservations.length >= 5) {
        waitlist.push(reservation);
        return res.send(false);
    } else {
        reservations.push(reservation);
        return res.send(true);
    }
    

})

module.exports = apiRoute;