const express = require('express');
const router = express.Router();

const Hellocontroller = require('../controllers/Hellocontroller');

router.get('/helloget', Hellocontroller.Hello);
router.post('/hellopost', Hellocontroller.Hello);

module.exports = router;
