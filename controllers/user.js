const User = require('../models').User;

module.exports = {
  list(req, res) {
    return User
      .findAll({
        include: ["Messages"],
        order: [
          ['createdAt', 'DESC'],
        ],
      })
      .then((user) => res.status(200).send(user))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
      console.log(req.params.nik);
      return User.findByPk(req.params.nik, 
        ({include: ["Messages"]}))
        .then( (result) => res.json(result));
  },

  add(req, res) {
    console.log(req.body);
    return User
      .create({
        nama: req.body.nama,
      })
      .then((user) => res.status(201).send(user))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return User
      .findByPk(req.params.nik)      
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return user
          .update({
            nik: req.body.nik || user.nik,
            nama: req.body.nama || user.nama,
          })
          .then(() => res.status(200).send(user))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return User
      .findByPk(req.params.nik)
      .then(user => {
        if (!user) {
          return res.status(400).send({
            message: 'User Not Found',
          });
        }
        return user
          .destroy()
          .then(() => res.status(200).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};