const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    addUser,
    updateUser,
    removeUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');

// api/users
router.route('/')
    .get(getAllUser)
    .post(addUser)

// api/users/:userid
router.route('/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(removeUser)

// api/users/:userid/friends/:friendsid
router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend)

module.exports = router;