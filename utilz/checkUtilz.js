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
  throw new Error('doi error.');
  // return res.status(400).send(errMsg);
}

exports.requiredCheckForUpd = (req, res, next) => {
  if (req.body.id, req.body.todo && req.body.limit) {
    // ボディにidとtodoとlimitが設定されていれば次の処理へ
    return next();
  }
  return res.status(400).send(errMsg);
}

exports.requiredCheckForDel = (req, res, next) => {
  if (req.body.id) {
    // ボディにidが設定されていれば次の処理へ
    return next();
  }
  return res.status(400).send(errMsg);
}
