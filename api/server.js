const express = require('express');
const cors = require('cors');
const helmet = require('helmet');


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

//setting up routes
const userRouter = require('../routes/user-router');
// const authRouter = require('../auth/auth-router');
const calendarRouter = require('../routes/calendar-routes');
const eventRouter = require('../routes/event-router');
const adminRouter = require('../routes/calAdmin-routes');
const subscriberRouter = require('../routes/calSubs-router');

//routes
server.use('/users', userRouter);
// server.use('/auth', authRouter);
server.use('/api/calendar/', calendarRouter);
server.use('/api/calendar/', eventRouter);
server.use('/api/calendar/', adminRouter);
server.use('/api/calendar/', subscriberRouter);

//testing server
server.get('/', (req, res) => {
    res.send('api is running')
})

module.exports = server;



