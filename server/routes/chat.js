const express = require('express');
const router = express.Router();

const Chat = require('../models/chat-app')


/* GET users listing. */
router.get('/', (req, res, next) => {
  Chat.find({}, (err, data) => {
    res.status(200).json(data)
  })
    .catch((err) => {
      res.status(500).json(err)
    })
});

router.post('/', (req, res, next) => {
  const { id, name, message } = req.body;
  Chat.create({ id, name, message }, (err, data) => {
    res.status(201).json(data)
  })
})

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  Chat.findOneAndRemove({ id: Number(id) })
    .then((data) => {
      res.status(201).json(data)
    }).catch((err) => {
      res.status(500).json(err)
    })
});


module.exports = router;