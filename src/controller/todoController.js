const Redis = require('ioredis');
const config = require('config');
var uuid = require('uuid/v4');
const connectionInfo = {
  host: '127.0.0.1',
  port: 6379
}
var redis = new Redis(connectionInfo);

const col1 = "todo", col2 = "limit";

exports.registerTodo = async (req, res, next) => {
  let id = uuid();
  let todo = req.body.todo;
  let limit = req.body.limit;
  await redis.hmset(id, col1, todo, col2, limit);
  return res.status(config.HTTP_STATUS.SUCCESS).send({
    "id": id,
    "message": config.MESSAGE.SUCCESS.REGISTER
  });
}

exports.updateTodo = async (req, res, next) => {
  let id = req.params.id;
  let todo = req.body.todo;
  let limit = req.body.limit;
  await redis.hmset(id, col1, todo, col2, limit);
  return res.status(config.HTTP_STATUS.SUCCESS).send({
    "id": id,
    "message": config.MESSAGE.SUCCESS.UPDATE
  });
}

exports.deleteTodo = async (req, res, next) => {
  let id = req.params.id;
  await redis.hdel(id, col1, col2);
  return res.status(config.HTTP_STATUS.SUCCESS).send({
    "message": config.MESSAGE.SUCCESS.DELETE
  });
}

exports.getTodo = async (req, res, next) => {
  let id = req.query.id;

  if (!id) {
    // 全件検索
    var keys = await redis.keys('*');
    var ret = await getAllTodo(redis, keys);
    return res.status(config.HTTP_STATUS.SUCCESS).send(ret);
  }
  // id指定
  var data = await redis.hmget(id, col1, col2);
  return res.status(config.HTTP_STATUS.SUCCESS).send({ id: id, todo: data[0], limit: data[1] });
}

async function getAllTodo(redis, keys) {
  let ret = [];
  for (let key of keys) {
    let obj = await redis.hmget(key, col1, col2);
    obj = {
      id: key,
      todo: obj[0],
      limit: obj[1]
    }
    ret.push(obj);
  };
  return ret;
}
