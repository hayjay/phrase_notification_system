const ResponseController = require("./ResponseController");

class NotificationsController extends ResponseController{

    constructor(Notification, Post, Comment) {
        super()
        this.Notification = Notification;
        this.Post = Post;
        this.Comment = Comment;
    }

    async getByPost(req, res) {
        const {
            params: { post_id }
        } = req;

        try {

            const notifications = await this.Notification.findOne({ 
                where: { PostId: post_id},
                include: [ { 
                    model: this.Post, as: 'post'
                }, { 
                    model: this.Comment, as: 'comment'
                } ]
            });

            if (notifications === null) {
                res.status(200).send(
                    this.sendResponse(
                        [],                        
                        'There are no notifications for this post yet',
                        false,
                    )
                );
            }
            res.status(200).send(
                this.sendResponse(
                    notifications,                        
                    'Notifications fetched successfully!',
                )
            );
        } catch (err) {
            res.status(400).send(
                this.sendResponse(
                    [],                        
                    err.message,
                    false
                )
            );
        }
    }

    async createPost(req, res) {
        if(
            !req.body.user_id || !req.body.post_id || !req.body.type
        ){
            res.status(400).send(
                this.sendResponse(
                    [],                        
                    'All fields (post and notification type) are required!',
                )
            )
        }

        try {
            const data = {
                post_id : req.body.post_id,
                user_id : req.body.user_id,
                type : req.body.type,
                read : req.body.read ?? false,
            }
            const notification = new this.Notification(data);

            await notification.save();
            res.status(201).send(
                this.sendResponse(
                    notification,                        
                    'Notification created successfully!',
                )
            )
        } catch (err) {
            res.status(422).send(
                this.sendResponse(
                    [],                        
                    err.message,
                    false
                )
            );
        }
    }
    
    async update(req, res) {
        if(
            !req.body.read || !req.body.post_id
        ){
            res.status(400).send(
                this.sendResponse(
                    [],                        
                    'All fields (post id and read fields) are required!',
                )
            )
        }
        try {
            const data = {
                post_id : req.body.post_id,
                read : req.body.read ?? false,
            }
            await this.Notification.update(data, 
                {
                    where: {
                        PostId: data.post_id
                    }
            });
            res.status(200).send(
                this.sendResponse(
                    [],                        
                    'Notifications updated successfully!',
                )
            );
        } catch (err) {
            res.status(500).send(
                this.sendResponse(
                    [],                        
                    err.message,
                    false
                )
            );
        }
    }
}

module.exports = NotificationsController