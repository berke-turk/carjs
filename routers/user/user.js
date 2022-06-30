const express = require('express');
const router = express.Router();
const db = require('../../my_modules/db');
const users = [{
        name: "BERKE",
        surname: "TÜRK"
    },
    {
        name: "ARDA",
        surname: "GÜNEŞ"
    }
];

router.get('/', (request, response) => {
    db.query('SELECT * FROM users', (err, result) => {
        response.status(200).json(result);
    })
});

router.get('/:id', (request, response) => {
    let id = parseInt(request.params.id);
    if (isNaN(id)) {
        response.setHeader('content-type', 'text/html');
        response.end("Lütfen sayı girin");
        return;
    }

    response.status(200).json({ user: users[id] });
});

router.get('/:id/name', (request, response) => {
    let id = parseInt(request.params.id);
    if (isNaN(id)) {
        response.setHeader('content-type', 'text/html');
        response.end("Lütfen sayı girin");
        return;
    }

    response.status(200).json({ name: users[id].name });
});


module.exports = router;