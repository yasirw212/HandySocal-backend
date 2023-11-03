const express = require('express')
const inquiriesRouter = express()

const {createInquiry} = require('../controller/index')

inquiriesRouter.post('/', createInquiry)

module.exports = inquiriesRouter