const createError = require('http-errors')

const UserModel = require('../../../database/models').User
const errors = require('../../errors')

module.exports = (userId) => {
  return UserModel.findById(userId)
  .then((user) => {
    if (!user) throw createError.BadRequest(errors.USER_NOT_FOUND)

    return user.update({ emailConfirmed : true })
  })
}