const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const Post = require('./models/post')
const app = express();
mongoose.connect("mongodb+srv://Lance:Empire226@cluster0.klqqe.mongodb.net/meanapp?retryWrites=true&w=majority")
.then(()=>{
    console.log('connected to DB')
})
.catch(()=>{
    console.log('error')
})
app.use(bodyParser.json())

app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', "*")
    res.setHeader('Access-Control-Allow-Methods',
    "GET, POST, PATCH, DELETE, OPTIONS");
    next();
})

app.post('/api/posts', (req,res,next)=>{
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    })
    post.save().then(result =>{
        res.status(201).json({postId: result._id});
        
    });
    
})

app.get('/api/posts', (req,res) => {
    Post.find()
    .then((posts) => {
        console.log(posts)
    res.status(200).json({
        message: "heres some posts, have fun",
        posts: posts
    })
});

app.delete('/api/posts/:id', (req,res)=>{
Post.deleteOne({
    _id: req.params.id
})
.then((result)=>{
    console.log(result)
    res.status(200).json({message:"Post Deleted!"})
})
})
});



module.exports = app;