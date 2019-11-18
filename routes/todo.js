var router = require('express').Router();
var checkUtilz = require('../utilz/checkUtilz');
var ctrl = require('../controller/todoController');

router.post('/todo', checkUtilz.requiredCheckForReg, ctrl.registerTodo);
router.put('/todo', checkUtilz.requiredCheckForReg, ctrl.updateTodo);
router.delete('/todo', checkUtilz.requiredCheckForDel, ctrl.deleteTodo);
router.get('/todo', ctrl.getTodo);

module.exports = router;
