const express = require('express')
const categoriesRouter = express()

const {getCategories, getServices, getServicesById, getPopularServices} = require('../controller/index')

categoriesRouter.get('/', getCategories)

categoriesRouter.get('/:id/services', getServices)

categoriesRouter.get('/:categoryId/services/:id', getServicesById)

categoriesRouter.get('/popularservices', getPopularServices)

module.exports = categoriesRouter