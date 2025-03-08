const express = require('express');
const { addMember, getCommunityMembers, removeMember } = require('../controllers/memberController');
const { authMiddleware, checkRole } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/:communityId/members', authMiddleware, checkRole("ADMIN"), addMember);
router.get('/:communityId/members', authMiddleware, getCommunityMembers);
router.delete('/:communityId/members/:userId', authMiddleware, checkRole("ADMIN"), removeMember);

module.exports = router;
