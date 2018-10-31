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
    const data = entries.map(entry => {
      const robotIdx = entry.dataValues.robotId-1;
      entry.dataValues.robotInfo = robots[robotIdx].dataValues;
      return entry;
    })
    res.json(data);
  } catch (err) {
    next(err)
  }
})

router.post('/')