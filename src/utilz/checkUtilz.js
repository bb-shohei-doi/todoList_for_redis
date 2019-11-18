const config = require('config');

const errMsg = {
  "Error": {
    "message": "Not enough your request body."
  }
}

exports.requiredCheckForReg = (req, res, next) => {
  if (req.body.todo && req.body.limit) {
    // ボディにtodoとlimitが設定されていれば次の処理へ
    return next();
  }
  return res.status(config.HTTP_STATUS.BAD_REQUEST).send(errMsg);
}

exports.requiredCheckForUpd = (req, res, next) => {
  if (req.body.todo && req.body.limit) {
    // ボディにtodoとlimitが設定されていれば次の処理へ
    return next();
  }
  return res.status(config.HTTP_STATUS.BAD_REQUEST).send(errMsg);
}
