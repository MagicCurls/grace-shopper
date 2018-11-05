/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const User = db.model('user')

describe('User routes', () => {

  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/users/', () => {
    const userCredentials = {
      email: 'sponge@bob.com', 
      password: 'garyTheSnail',
      isAdmin: true
    }
  
    var authenticatedUser = request.agent(app);

    beforeEach(() => {
      return User.create(userCredentials);
    })

    xit('GET /api/users', async () => {
      await authenticatedUser
        .post('/login')
        .send(userCredentials)
      const res = await authenticatedUser
        .get('/api/users')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0]).to.be.equal(userCredentials)
    })
  }) // end describe('/api/users')
}) // end describe('User routes')
