var express = require('express');
var router = express.Router();

const userController = require('../controllers').user;
const messageController = require('../controllers').message;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* User Router */
router.get('/api/user', userController.list);
router.get('/api/user/:nik', userController.getById);
router.post('/api/user', userController.add);
router.put('/api/user/:nik', userController.update);
router.delete('/api/user/:nik', userController.delete);

/* Message Router */
router.get('/api/message', messageController.list);
router.get('/api/message/:message_id', messageController.getById);
router.post('/api/message', messageController.createMessage);
router.put('/api/message/:message_id', messageController.update);
router.delete('/api/message/:message_id', messageController.delete);

module.exports = router;
