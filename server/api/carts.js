const router = require('express').Router()
const {CartEntry, Robot, User} = require('../db/models')
const Op = require('sequelize').Op
module.exports = router

router.get('/:userId', async (req, res, next) => {
  try {
    // const userId = Number(req.params.userId);
    const {userId} = req.params
    const entries = await CartEntry.findAll({where: {userId}})
    const robotIds = entries.map(entry => entry.robotId)
    const robots = await Robot.findAll({
      where: {id: {[Op.in]: robotIds}}
    })
    const robotMap = {}
    robots.forEach(robot => {
      robotMap[robot.dataValues.id] = robot.dataValues
    })
    const data = entries.map(entry => {
      const robotId = entry.dataValues.robotId
      entry.dataValues.robotInfo = robotMap[robotId]
      return entry
    })
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const {userId, robotId, quantity} = req.body
    CartEntry.create({userId, robotId, quantity}).then(res.sendStatus(201))
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const {userId, robotId, quantity} = req.body
    CartEntry.findAll({where: {userId, robotId}})
      .then(entry => entry[0].update({quantity}))
      .then(res.sendStatus(201))
  } catch (err) {
    next(err)
  }
})

router.delete('/', async (req, res, next) => {
  try {
    console.log(req.body)
    const {userId, robotId} = req.body
    CartEntry.findAll({where: {userId, robotId}})
      .then(entry => entry[0].destroy())
      .then(res.sendStatus(201))
  } catch (err) {
    next(err)
  }
})
