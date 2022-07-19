const { User, Thought }  = require("../models");

module.exports = {
    getAllThoughts(req, res) {
        Thought.find({})
            .select('-__v')
            .then(thoughtData => res.json(thoughtData))
    },
    getThoughtById(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .then(thoughtData => res.json(thoughtData))
    },
    addThought(req, res) {
        Thought.create({
            thoughtText: req.body.thoughtText,
            username: req.body.username
        })
            .then((thoughtData) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $addToSet: { thoughts: thoughtData._id } },
                    { new: true }
                )
            })
            .then((userData) => res.json(userData))
    },
    updateThought(req, res) {
        Thought.findByIdAndUpdate(
            { _id: req.params.thoughtId },
            { thoughText: req.params.thoughtText,
            username: req.params.username},
            { new: true }
        )
            .then(thoughtData => res.json(thoughtData))
    },

}