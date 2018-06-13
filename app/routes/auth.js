let router =  require('express').Router();

let auth = require('../middleware/auth-token');
let session = require("../middleware/auth-check");
let login = require('../controllers/login-controller');

router.post('/login', auth.loginUser);
router.get('/home' , session.sessionToken, login.home);


module.exports = router;