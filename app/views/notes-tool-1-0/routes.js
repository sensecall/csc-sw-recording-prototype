const express = require('express')
const router = express.Router()
const crypto = require('crypto')

// Add your routes here - above the module.exports line

router.get('/', (req, res, next) => {
	res.redirect(`/${req.version}/start`)
})

router.post('/create-written-note', (req, res, next) => {
	let id = crypto.randomBytes(20).toString('hex');
	let url = 'new-written-note?note-id=' + id

	req.session.data[id] = {}

	res.redirect(url)
})

router.post('/new-written-note', (req, res, next) => {
	let id = req.session.data['note-id']

	req.session.data[id]['text'] = req.session.data['note-content']
	req.session.data[id]['timestamp'] = Date.now()

	delete req.session.data['note-content']
	delete req.session.data['note-id']

	res.redirect('assessment-notes')
})

module.exports = router