const express = require("express");
const router = express.Router();
const Notification = require('./models').Notification;
const User = require('./models').User;
const Post = require('./models').Post;
const Comment = require('./models').Comment;


const NotificationsController = require("./controllers/notifications");


const notificationsController = new NotificationsController(Notification, Post, Comment);
// Endpoint declaration
router.get('/notifications/:post_id', (req, res) => notificationsController.getByPost(req, res));
router.post('/notifications/create', (req, res) => notificationsController.createPost(req, res));
router.put('/notifications/:id', (req, res) => notificationsController.update(req, res));


module.exports = router