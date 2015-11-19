var sample = require('./sample.js')

var express = require('express')
var router = express.Router()

router.get('/sample/name/:name', sample.getByName)
router.get('/sample/exactName/:name', sample.getExactName)
router.post('/sample/update', sample.updateSampleItem)
router.get('/sample/all', sample.getAll)
router.post('/sample/new', sample.addSampleItem)

module.exports = router