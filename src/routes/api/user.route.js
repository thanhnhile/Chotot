const express = require('express');
const router = express.Router();
const controllers = require('../../controllers/user.controller');
const verifyRoles = require('../../middlewares/verifyRoles');
const ROLE_LIST = require('../../utils/role_list');

router.get('', verifyRoles(ROLE_LIST['ADMIN']), controllers.getAll);
router.get(
  '/:id',
  verifyRoles(ROLE_LIST['USER'], ROLE_LIST['ADMIN']),
  controllers.getById
);
router.put(
  '/:id',
  verifyRoles(ROLE_LIST['USER'], ROLE_LIST['ADMIN']),
  controllers.update
);
router.get(
  '/addAdmin/:id',
  verifyRoles(ROLE_LIST['ADMIN']),
  controllers.addAdmin
);

module.exports = router;
