const express = require('express')
const hbs = require('express-handlebars')
const app = express()

app.engine('hbs', hbs({defaultLayout: 'default.hbs'}))
app.set('view engine', 'hbs')

const PORT = parseInt(process.argv[2]) || parseInt(process.env.APP_PORT) || 3000;

app.use(express.static(__dirname + "/static"));

app.get('/roll', (req,res) => {
    res.status(200)
    res.type('text/html')
    res.render('dice')
})




app.use((req,res) => {
    res.redirect("/")
})

app.listen(PORT, () => {
    console.log(`Hello ${PORT} has started`)
})
