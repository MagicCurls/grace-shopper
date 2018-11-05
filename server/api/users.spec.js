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

    it('GET /api/users', async () => {
      await authenticatedUser
        .post('/login')
        .send(userCredentials)
      await authenticatedUser
        .get('/api/users')
        .end((err, response) => {
          if (err) {
            console.log(err)
          }
          else
            expect(response.body).to.be.an('array')
        })
    })
  }) // end describe('/api/users')
}) // end describe('User routes')
