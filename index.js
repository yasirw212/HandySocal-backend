const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 4001

const servicesRouter = require('./routes/services')
const inquiriesRouter = require('./routes/inquiries')

app.use(cors({
    origin: ["http://localhost:5173", "https://handy-socal-4b8bea3a3003.herokuapp.com/"],
    methods: ["GET", "POST"]
}))
app.use(express.json())


app.use('/services', servicesRouter)
app.use('/inquiry', inquiriesRouter)

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})