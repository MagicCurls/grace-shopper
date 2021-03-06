const User = require('./user')
const Robot = require('./robot')
const CartEntry = require('./cartEntry')
const CompletedOrder = require('./completedOrder')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

User.belongsToMany(Robot, { through: 'cartEntry' });
Robot.belongsToMany(User, { through: 'cartEntry' });


/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Robot,
  CartEntry,
  CompletedOrder
}
