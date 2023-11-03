const express = require('express')
const servicesRouter = express()

const {getServices, getServicesById, getPopularServices} = require('../controller/index.js')

servicesRouter.get('/', getServices)
servicesRouter.get('/popular', getPopularServices)
servicesRouter.get('/:id', getServicesById)


module.exports = servicesRouter