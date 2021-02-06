exports.addCarSchema = {
    description: 'Create a new car',
    tags: ['cars'],
    summary: 'Creates new car with given values',
    body: {
        type: 'object',
        properties: {
            title: { type: 'string' },
            brand: { type: 'string' },
            price: { type: 'string' },
            age: { type: 'number' },
            services: { type: 'object' }
        }
    },
    response: {
        200: {
            description: 'Successful response',
            type: 'object',
            properties: {
                _id: { type: 'string' },
                title: { type: 'string' },
                brand: { type: 'string' },
                price: { type: 'string' },
                age: { type: 'number' },
                services: { type: 'object' },
                __v: { type: 'number' }
            }
        }
    }
};

exports.getCarSchema = {
    description: 'Get car',
    tags: ['cars'],
    summary: 'Get car with given values',
    params: {
        type: 'object',
        properties: {
            id: {
                type: 'string',
                description: 'car id'
            }
        }
    }
};

exports.deleteCarSchema = {
    description: 'delete car',
    tags: ['cars'],
    summary: 'delete car with given values',
    params: {
        type: 'object',
        properties: {
            id: {
                type: 'string',
                description: 'car id'
            }
        }
    }
};

exports.updateCarSchema = {
    description: 'Update a new car',
    tags: ['cars'],
    summary: 'Update new car with given values',
    params: {
        type: 'object',
        properties: {
            id: {
                type: 'string',
                description: 'car id'
            }
        }
    },
    body: {
        type: 'object',
        properties: {
            title: { type: 'string' },
            brand: { type: 'string' },
            price: { type: 'string' },
            age: { type: 'number' },
            services: { type: 'object' }
        }
    },
    response: {
        200: {
            description: 'Successful response',
            type: 'object',
            properties: {
                _id: { type: 'string' },
                title: { type: 'string' },
                brand: { type: 'string' },
                price: { type: 'string' },
                age: { type: 'number' },
                services: { type: 'object' },
                __v: { type: 'number' }
            }
        }
    }
};
