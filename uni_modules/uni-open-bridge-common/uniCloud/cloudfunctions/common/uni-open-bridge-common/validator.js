const Validator = {

  Key(keyArray, parameters) {
    for (let i = 0; i < keyArray.length; i++) {
      const keyName = keyArray[i]
      if (typeof parameters[keyName] !== 'string') {
        Validator.ThrowNewError(`Invalid ${keyName}`)
      }
      if (parameters[keyName].length < 1) {
        Validator.ThrowNewError(`Invalid ${keyName}`)
      }
    }
  },

  Value(value) {
    if (value === undefined) {
      Validator.ThrowNewError('Invalid Value')
    }
    if (typeof value !== 'object') {
      Validator.ThrowNewError('Invalid Value Type')
    }
  },

  ThrowNewError(message) {
    throw new Error(message)
  }
}

module.exports = {
  Validator
}
