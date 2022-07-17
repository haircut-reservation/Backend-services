const router = require('express')

// Get a user
router.get('/:uid', (req, res) => {

})

// Get saved saloons of a user
router.get('/saved/:uid', (req, res) => {

})

// Edit user details
router.put('/edit/:uid', (req, res) => {

})

// get all previous transactions
router.get('/transaction/:uid', (req, res) => {

})

// previous haircut
router.get('/history/:uid', (req, res) => {

})

// give feedback of a saloon
router.post('/feedback', (req, res) => {
    //body has uid and saloon id and ratings+feedback
})

module.export = router