const express = require('express');

const { asyncHandler } = require('../utils');

const router = express.Router();

// Check region change
const regionCheck = (requestRegion) => {
    // if requestRegion is not equal to any regions, return false 
    if (requestRegion !== 'BR1' &&
        requestRegion !== 'EUN1' &&
        requestRegion !== 'EUW1' &&
        requestRegion !== 'JP1' &&
        requestRegion !== 'KR' &&
        requestRegion !== 'LA1' &&
        requestRegion !== 'LA2' &&
        requestRegion !== 'NA1' &&
        requestRegion !== 'OC1' &&
        requestRegion !== 'TR1' &&
        requestRegion !== 'RU'
    ) {
        return false;
    }
    return true;
}

router.put('/', asyncHandler(async (req, res, next) => {
    try {
        const { region } = req.body;

        if (!regionCheck(region)) {
            const err = Error("Invalid region.");
            err.errors = [`Region ${region} is not a valid region.`];
            err.status = 400;
            err.title = "Bad request.";
            throw err;
        }

        req.session.region = region
        res.json(`Region has been set to ${req.session.region}`)
    } catch (e) {
        next(e);
    }
}))

//Keep for testing region if something breaks :)
router.get('/', asyncHandler(async (req, res, next) => {
    console.log(req.session.region);
    res.json(`The current region is ${req.session.region}`);
}))


module.exports = router;