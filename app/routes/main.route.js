const router = require('express').Router();

const controller = require('../controllers/main.controller');

router.get('/api/speed-test', controller.getInternetSpeed);

module.exports = router;