const express = require('express')
const router = express.Router()
const db = require('../models')
const crypto = require('crypto-js')
const bcrypt = require('bcrypt')
const axios = require('axios')
const methodOverride = require('method-override');
router.use(methodOverride('_method'));
const { stringify } = require('nodemon/lib/utils')
const { restart } = require('nodemon')

router.get('/', (req, res) => {
     axios.get(`https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&q=${req.query.videoSearch}&type=video&part=snippet&maxResults=25`)
         .then(response => {
             res.render('results.ejs', { videos: response.data.items});
         })
 })

 function limit (string = '', limit = 0) {  
    return string.substring(0, limit)
  }

 //1 - send data to model 2- route back to home page
router.post('/:id', (req, res) => {
    console.log('*******POST*******')
     axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${req.params.id}&key=${process.env.YOUTUBE_API_KEY}`)
         .then(async response => {
            const videoData = response.data.items;
            console.log(db.user.findAll({}));
            const favoriteData = await db.video.findOrCreate({
                where: {
                videoId: videoData[0].id,
                title: limit(videoData[0].snippet.title, 252),
                description: limit(videoData[0].snippet.description, 252),
                uploaddate: videoData[0].snippet.publishedAt,
                userID: 1
                }
            })
             res.redirect('/video/favorites');
         })
 })

router.get('/favorites', (req, res) => {
    db.video.findAll({
        order: [
            ['id', 'ASC']
        ]
    })
    .then(videoFavorites => {
        // res.send(videoFavorites);
        res.render('favorites.ejs', {videos: videoFavorites});
    })
})

//delete action
router.delete('/:id', (req,res) => {
    console.log('in here delete')
    db.video.destroy({
        where: {
        videoId: req.params.id,
        }
    })
    res.redirect('/video/favorites')
})

router.put('/:id', (req,res) => {
    console.log('&&&&&&&&&in here delete&&&&&&&&&')
    console.log(req.body)
    db.video.update({
        description: req.body.updateDescription},
        {
        where: {
        videoId: req.params.id,
        }
    })
    res.redirect('/video/favorites')
})


module.exports = router;