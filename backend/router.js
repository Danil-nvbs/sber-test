const { Router } = require('express');
const loginService = require('./loginService');
const datasetSerivce = require('./datasetSerivce');
const router = new Router();

router.post('/login', async (req, res) => {
    console.log(req.body)
    let { username, password } = req.body;
    try {
        return res.status(200).json(loginService({ username, password }));
    } catch (err) {
        return res.status(err.statusCode).json(err)
    }
});

router.get('/getDataset', async(req, res) => {
    console.log(req.query)
    let { type } = req.query
    return res.status(200).json({ dataset: datasetSerivce[type]() })
})

module.exports = router;