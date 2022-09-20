// required packages
require('dotenv').config()
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const cookieParser = require('cookie-parser')
const axios = require('axios')
const db = require('./models')
const crypto = require('crypto-js')

console.log('server secret:', process.env.ENC_SECRET)

// config express app/middlewares
const app = express()
const PORT = process.env.PORT || 3000
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// our custom auth middleware
app.use(async (req, res, next) => {
    // console.log('hello from a middleware 👋')
    // if there is a cookie on the incoming request
    if (req.cookies.userId) {
        // decrypt the user id before we look up the user in the db
        const decryptedId = crypto.AES.decrypt(req.cookies.userId.toString(), process.env.ENC_SECRET)
        const decryptedIdString = decryptedId.toString(crypto.enc.Utf8)
        // look up the user in the db
        const user = await db.user.findByPk(decryptedIdString);
        // mount the user on the res.locals
        res.locals.user = user
    // if there is no cookie -- set the user to be null in the res.locals
    } else {
        res.locals.user = null
    }
    // move on to the next route or middleware in the chain
    next()
})



// route definitions
app.get('/', (req, res) => {
    // console.log('incoming cookie 🍪', req.cookies)
    // console.log(res.locals.myData)
    console.log('the currently logged in user is:', res.locals.user)
    res.render('index.ejs')
})

// //make a search and display results:

// app.get('/search', (req, res) => {
//     console.log(response.data);
//     axios.get(`https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&q=${req.query.videoSearch}&type=video&part=snippet&maxResults=25`)
//         .then(response => {
//             res.render('results.ejs', { videos: response.data.items});
//         })
// })

// //show details of videos:
// app.get('/detail/:id', (req, res) => {
//     console.log(req.params.id)
//     axios.get(`https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&q=${req.query.videoSearch}&type=video&part=snippet&maxResults=25`)
//       .then(response => {
//         res.render('detail.ejs', { movie: response.data })
//       })
//       .catch(console.log)
//   })


// Controllers
app.use('/users', require('./controllers/usersController'));
app.use('/search', require('./controllers/searchController'));
app.use('/comment', require('./controllers/commentController'));
app.use('/video', require('./controllers/videoController'));


// listen on a port
app.listen(PORT, () => console.log(`*****SERVER IS ONLINE: PORT ${PORT}*****`));