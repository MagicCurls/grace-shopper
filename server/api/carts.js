const router = require('express').Router()
const {CartEntry, Robot} = require('../db/models')
const Op = require('sequelize').Op
module.exports = router

router.get('/:userId', async (req, res, next) => {
  try {
    const {userId} = req.params
    const entries = await CartEntry.findAll({where: {userId}})
    const robotIds = entries.map(entry => entry.robotId);
    const robots = await Robot.findAll({
      where: { id: {[Op.in]: robotIds} }
    })
    const data = entries.map((entry, idx) => {
      entry.dataValues.robotInfo = robots[idx].dataValues;
      return entry;
    })
    res.json(data);
  } catch (err) {
    next(err)
  }
})

router.post('/')