const Post = require('../models/PostmobilesModel')
const to = require('await-to-js').default;
const mongoose = require('mongoose')

exports.getPostDetailsById = async (req, res) => {
    let post, err;
    [err, post] = await to(Post.findById(req.params.id));
    if (err) {
        return res.status(500).json({ 'Error': err })
    }
    return res.status(200).json(post)
}
exports.getPostDetails = async (req, res) => {
    let post, err;
    [err, post] = await to(Post.find());
    if (err) {
        return res.status(500).json({ 'Error ': err })
    }
    return res.status(200).json(post)
}

exports.InsertPostDetails = async (req, res) => {
    const post = new Post({
        title: req.body.title,
        message:req.body.message

    })
    post.id = post._id;
    const [err, postmobile] = await to(post.save());

    if (err) {
        return res.send(500).json({ 'error': err })
    }
    return res.send(200).json(postmobile)
}

exports.UpdatePostDetails = async (req, res) => {
    let post;
    [err, post] = await to(Post.findOneAndUpdate({ _id: mongoose.Types.ObjectId(req.params.id) }, req.body));
    if (err) {
        return res.status(500).json({ 'Error': err })
    }
    return res.status(200).json(post)
}
exports.DeletePostDetails = async (req, res) => {
    let post;
    [err, post] = await to(Post.findOneAndDelete({ _id: mongoose.Types.ObjectId(req.params.id) }, req.body));
    if (err) {
        return res.status(500).json({ 'Error': err })
    }
    return res.status(200).json(post)
}

