# A fast REST APIs with Node.js, MongoDB, Fastify and Swagger.

> A Node.js project

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm start
```

## Prerequisites

-   Nodejs
-   MongoDB

**Request:**

```json
POST api/cars
{
    "title": "Model X",
    "brand": "Tesla",
    "price": "100000",
    "age": "1",
	 "services": {
            "state": "United State",
            "city": "San Diegoo"
    }
}

GET api/cars

GET api/cars/:id

PUT api/cars/:id
{
    "title": "Model X",
    "brand": "Tesla",
    "price": "150000",
    "age": "1",
    "services": {
            "state": "United State",
            "city": "Las Vegas"
    }
}

DELETE api/cars/:id

```
