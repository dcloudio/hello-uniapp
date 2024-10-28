'use strict';

class BridgeError extends Error {

  constructor(code, message) {
    super(message)

    this._code = code
  }

  get code() {
    return this._code
  }

  get errCode() {
    return this._code
  }

  get errMsg() {
    return this.message
  }
}

module.exports = {
  BridgeError
}
