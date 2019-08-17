const router = require('express').Router();

const waitlist = require('../../data/waitlist');
const reservations = require('../../data/reservations');

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(waitlist);
// app.use(reservations);

const apiRoute = router.get('/:type', (req, res) => {
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

module.exports = apiRoute;