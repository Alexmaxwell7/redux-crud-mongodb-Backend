const express = require('express');

const Controller = require('../controller/PostmobileController')

const router = express.Router()

router.get('/post', Controller.getPostDetails)

router.get('/post/:id',Controller.getPostDetailsById)

router.post('/post',Controller.InsertPostDetails)

router.put('/post/:id',Controller.UpdatePostDetails)

router.delete('/post/:id',Controller.DeletePostDetails)

module.exports=router