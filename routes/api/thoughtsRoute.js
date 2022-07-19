const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtController');

// api/thought
router.route('/')
    .get(getAllThoughts)
    .post(addThought)

// api/thought/:thoughtid
router.route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought)

// api/thought/thoughtid/reactions
router.route('/:thoughtId/reactions')
    .post(addReaction)

// api/thought/:thoughtid/reactions/:reactionid
router.route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction)

module.exports = router;