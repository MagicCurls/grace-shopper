const Sequelize = require('sequelize')
const db = require('../db')

const CartEntry = db.define('cartEntry', {
    quantity: Sequelize.INTEGER
    // quantity: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //     defaultValue: 0,
    //     validate: {
    //         min: 0,
    //     }
    // }
})

module.exports = CartEntry