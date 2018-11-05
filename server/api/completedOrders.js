const router = require('express').Router()
const {CompletedOrder} = require('../db/models')
const Op = require('sequelize').Op
module.exports = router

router.get('/:userId', async (req, res, next) => {
    try {
      const {userId} = req.params
      const entries = await CompletedOrder.findAll({where: {userId}})
      res.json(entries)
    } catch (err) {
      next(err)
    }
  })

  router.post('/', async (req, res, next) => {
    try {
      const {userId, robotId, quantity} = req.body
      console.log('this is req body', req.body)
      const orderEntry = await CompletedOrder.create({userId, robotId, quantity})
      res.status(201).json(orderEntry)
    } catch (err) {
      next(err)
    }
  })