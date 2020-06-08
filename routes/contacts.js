const express = require('express')
const router = express.Router()

// @route  GET api/contacts
// @desc   Get all users contacts
// @access Private

router.get('/', (req, res) => {
  res.send('Get all contacts')
})

// @route  GET api/contacts
// @desc   Add new contact
// @access Private

router.get('/', (req, res) => {
  res.send('Add contact')
})

// @route  GET api/contacts/:id
// @desc   Update contact
// @access Private

router.put('/:id', (req, res) => {
  res.send('Update contact')
})

// @route  GET api/contacts/:id
// @desc   Delete contact
// @access Private

router.delete('/:id', (req, res) => {
  res.send('Detele contact')
})


module.exports = router