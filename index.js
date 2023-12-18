const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 4001

const servicesRouter = require('./routes/services')
const inquiriesRouter = require('./routes/inquiries')

app.use(cors({
    methods: ["GET", "POST"],
    credentials: true
}))
app.use(express.json())


app.use('/services', servicesRouter)
app.use('/inquiry', inquiriesRouter)

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})