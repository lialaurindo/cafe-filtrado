const express = require('express');
const router = express.Router();
const controller = require ('../controller/usersController')

router.post('/new', controller.newUser)
router.get('/search', controller.allUsers)
router.delete('/delete/:id', controller.deleteUser)
router.post('/login', controller.login)


module.exports = router