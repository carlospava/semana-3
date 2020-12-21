const router = require('express').Router();
const model = require('../../models');
const userController = require('../../controllers/TheController.js');
var bcrypt = require('bcryptjs');


router.get('/', async(req, res) => {
    const user = await model.user.findAll();
    res.status(200).json(user);
});

router.post('/register', async(req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await model.user.create(req.body);
    res.status(200).json(user);
});

router.post('/signin', userController.signin);

module.exports = router;
