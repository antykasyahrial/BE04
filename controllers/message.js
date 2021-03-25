const User = require('../models').User;
const Message = require('../models').Message;

module.exports = {
  list(req, res) {
    return Message
      .findAll({
        include: [],
        order: [
          ['createdAt', 'DESC'],
        ],
      })
      .then((message) => res.status(200).send(message))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Message
      .findByPk(req.params.message_id)
      .then((message) => {
        if (!message) {
          return res.status(404).send({
            message: 'Message Not Found',
          });
        }
        return res.status(200).send(message);
      })
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Message
      .findByPk(req.params.message_id)      
      .then(message => {
        if (!message) {
          return res.status(404).send({
            message: 'Message Not Found',
          });
        }
        return message
          .update({
            message: req.body.message || message.message,
          })
          .then(() => res.status(200).send(message))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Message
      .findByPk(req.params.message_id)
      .then(message => {
        if (!message) {
          return res.status(400).send({
            message: 'Message Not Found',
          });
        }
        return message
          .destroy()
          .then(() => res.status(200).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  createMessage(req, res){
      return Message
      .create({
        message: req.body.message,
        UserNik : req.body.UserNik
      })
  .then((message) => res.status(201).send(message))
  .catch((error) => res.status(400).send(error));
    },
};