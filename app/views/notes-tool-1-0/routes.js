const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get('/', (req, res, next) => {
	res.redirect(`/${req.version}/start`)
})

router.post('/new-written-note', (req, res, next) => {
	res.redirect('assessment-notes')
})

module.exports = router