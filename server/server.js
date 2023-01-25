const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

require('./config/mongoose.config')

const Routes = require('./routes/product.route')
Routes(app)

const port = 8001
app.listen(port, () => console.log(`Listening on port: ${port}`))
