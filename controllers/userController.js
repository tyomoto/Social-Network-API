const { User, Thought } = require('../models');

module.exports = {
    // function to get all users
    getAllUser(req, res) {
        User.find({})
            .select('-__v')
            .populate('friends')
            .populate('thoughts')
            .then(userData  => res.json(userData))
    },
    // function to get a single user by id
    getUserById(req, res) {
        User.findOne({ _id: req.params.userId})
            .select('-__v')
            .populate('friends')
            .populate('thoughts')
            .then(userData => res.json(userData))
    },
    // funciton to create/post a new user
    addUser(req, res) {
        User.create({
            username: req.body.username,
            email: req.body.email,
            friends: [req.body.friends],
            thoughts: [req.body.thoughts]
        })
            .then(userData => res.json(userData))
    },
    // function to update a user by their id
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId},
            {
                username: req.body.username,
                email: req.body.email,
                friends: [req.body.friends],
                thoughts: [req.body.thoughts]
            },
            { new: true })
            .then(userData => res.json(userData))
    },
    // function to remove a user by their id
    removeUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId})
            .then(userData => {
                Thought.deleteMany({ _id: { $in: userData.thoughts } })
            })
            .then(() => res.json({ message: "User and user's thoughts deleted." }))
    },
    // add a friend to a user's friend list
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { new: true })
            .then(friendData => res.json(friendData))
    },
    // remove a friend from a user's friend list
    removeFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { new: true })
            .then(friendData => res.json(friendData))
    }
}