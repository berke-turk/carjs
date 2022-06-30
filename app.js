const express = require('express');
const app = express();

const routers = {
    car: require('./routers/car/car'),
    user: require('./routers/user/user')
}

// Routing
app.use('/car', routers.car);
app.use('/user', routers.user);

app.listen(80);