const express = require('express');
const { createCommunity, getAllCommunities, getMyCommunities } = require('../controllers/communityController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createCommunity);
router.get('/', getAllCommunities);
router.get('/me', authMiddleware, getMyCommunities);

module.exports = router;
