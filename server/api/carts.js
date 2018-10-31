const router = require('express').Router()
const {CartEntry, Robot, User} = require('../db/models')
const Op = require('sequelize').Op
module.exports = router

router.get('/:userId', async (req, res, next) => {
  try {
    const {userId} = req.params;
    const entries = await CartEntry.findAll({where: {userId}});
    const robotIds = entries.map(entry => entry.robotId);
    const robots = await Robot.findAll({
      where: { id: {[Op.in]: robotIds} }
    })
    const data = entries.map(entry => {
      const robotIdx = entry.dataValues.robotId-1;
      entry.dataValues.robotInfo = robots[robotIdx].dataValues;
      return entry;
    })
    res.json(data);
    // User.findById(userId).then(user => user.getRobots()).then(data => res.json(data))
  } catch (err) {
    next(err);
  }
})

router.post('/', async (req, res, next) => {
  try {
    const {userId, robotId, quantity} = req.body;
    CartEntry.create({userId, robotId, quantity}).then(res.sendStatus(201));
  }
  catch (err) {
    next(err);
  }
})

router.put('/', async (req, res, next) => {
  try {
    const {userId, robotId, quantity} = req.body;
    CartEntry.findAll({where: {userId, robotId}}).then(entry => entry[0].update({quantity})).then(res.sendStatus(201));
  }
  catch (err) {
    next(err);
  }
})

router.delete('/', async (req, res, next) => {
  try {
    const {userId, robotId} = req.body;
    CartEntry.findAll({where: {userId, robotId}}).then(entry => entry[0].destroy()).then(res.sendStatus(200));
  }
  catch (err) {
    next(err);
  }
})