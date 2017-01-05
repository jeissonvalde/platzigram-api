'use strict'

const uuid = require('uuid-base62')

const fixtures = {
  getImage () {
    return {
      description: 'an #awesome picture with #tags #platzi',
      url: ``,
      likes: 0,
      liked: false,
      user_id: uuid.uuid()
    }
  },
  getImages (n) {
    let images = []
    while (n-- > 0) {
      images.push(this.getImage())
    }

    return images
  },

  getUser () {
    return {
      name: 'a ramdom user',
      username: `user_${uuid.uuid()}`,
      password: uuid.uuid(),
      email: `${uuid.uuid()}@platzi.test`
    }
  }
}

module.exports = fixtures
