const express = require('express')
const router = express.Router()
const db = require('../models')
const crypto = require('crypto-js')
const bcrypt = require('bcrypt')
const axios = require('axios')

router.get('/', (req, res) => {
     axios.get(`https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&q=${req.query.videoSearch}&type=video&part=snippet&maxResults=25`)
         .then(response => {
             res.render('results.ejs', { videos: response.data.items});
         })
 })


 //1 - send data to model 2- route back to home page
router.post('/send/:id', (req, res) => {
     axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${video.id.videoId}&key=${process.env.YOUTUBE_API_KEY}`)
         .then(response => {
             res.render('results.ejs', { videos: response.data.items});
         })
 })

module.exports = router;