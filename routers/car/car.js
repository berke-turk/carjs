const express = require('express');
const router = express.Router();
const cars = [{
        name: "BMW",
        price: 150.000
    },
    {
        name: "MERCEDES",
        price: 200.000
    }
];

router.get('/', (request, response) => {
    response.status(200).json(cars);
});

router.get('/:id', (request, response) => {
    response.status(200).json({ car: cars[request.params.id] });
});

router.get('/:id/name', (request, response) => {
    response.status(200).json({ name: cars[request.params.id].name });
});

module.exports = router;