const express = require('express');
const router = express.Router();

const userController = require('../controller/user')
const { check, validationResult } = require('express-validator');


router.post('/signup', [
    check('pseudo').isLength({ min: 3 }).matches(/^[a-zA-Z0-9_]*$/),
    check('password').isLength({ min: 6 }),
  ], userController.signup);

router.post('/login', [
    check('pseudo').isLength({ min: 3 }).matches(/^[a-zA-Z0-9_]*$/),
    check('password').isLength({ min: 3 })
  ], userController.login);

module.exports = router;