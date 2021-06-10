
const mongoose=require('mongoose')
const Post=mongoose.model('Post')


exports.add=(req,res)=>{
    res.render('postAdd');
}

exports.addAction=(req,res)=>{
    const post= new Post(req.body);
   post.save();
   
}