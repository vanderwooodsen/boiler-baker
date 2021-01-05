const request = require('supertest')
const {db} = require('../../server/db')
const app = require('../../server')

describe('User registration', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  it('Can register user', async () => {
    const res = await request(app)
        .post('/api/users/signup')
        .send({
          email: 'christi@christi.com',
          password: 'kittens'
        })
        .expect(200)
  })
})
