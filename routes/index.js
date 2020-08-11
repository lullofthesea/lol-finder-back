const express = require('express');

const router = express.Router();

//Route for server running
router.get('/', asyncHandler(async (req, res, next) => {
    res.json('Server is running...')
}))

module.exports = router;