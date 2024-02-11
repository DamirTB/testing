const express = require('express')
const router = express.Router()
const { Posts } = require('../models')

router.get("/", async (req, res) =>{
    const listofPosts = await Posts.findAll();
    res.json(listofPosts);
    // res.send("Hello World");
});

router.post("/", async(req, res) =>{
    const post = req.body;
    Posts.create(post);
    res.json(post);
});

module.exports = router