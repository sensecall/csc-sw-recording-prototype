const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get('/', (req, res, next) => {
	res.redirect(`/${req.version}/start`)
})

router.post('/contacted-provider', (req, res, next) => {
	res.redirect('provider-details')
})

module.exports = router