// Require the fastify framework and instantiate it
const fastify = require('fastify')({
    logger: true
});

// Require external modules
const mongoose = require('mongoose');

// Import Routes
const routes = require('./routes');

// Import Swagger Options
const swagger = require('./config/swagger');

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options);

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false,
    bufferMaxEntries: 0,
    useFindAndModify: false
};

// Connect to DB
mongoose
    .connect('mongodb://localhost/car-rest', options)
    .then(() => console.log('MongoDB connected...'))
    .catch((err) => console.log(err));

// Loop over each route
routes.forEach((route, index) => {
    fastify.route(route);
});

// Run the server!
const start = async () => {
    try {
        //   await fastify.listen(3000, '0.0.0.0'g)
        await fastify.listen(3000, '127.0.0.1');
        fastify.swagger();
        fastify.log.info(
            `server listening on ${fastify.server.address().port}`
        );
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
