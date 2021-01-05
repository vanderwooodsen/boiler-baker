const {expect} = require('chai')
const {db, User} = require('../../server/db')

describe('Register user', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  it('Register user with password', async () => {
    let christi = await User.create({
      email: 'christi@christi.com',
      password: '12345'
    })

    expect(christi.correctPassword('12345')).to.be.equal(true)
    expect(christi.correctPassword('123')).to.be.equal(false)
  })
})
