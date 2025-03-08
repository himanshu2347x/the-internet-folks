const Member = require('../models/Member');
const Role = require('../models/Role');

exports.addMember = async (req, res) => {
    try {
        const { userId, roleId } = req.body;
        const { communityId } = req.params;

        const existingMember = await Member.findOne({ user: userId, community: communityId });
        if (existingMember) return res.status(400).json({ status: false, message: "User is already a member." });

        const role = await Role.findById(roleId);
        if (!role) return res.status(400).json({ status: false, message: "Invalid role." });

        const member = new Member({ community: communityId, user: userId, role: roleId });
        await member.save();

        res.status(201).json({ status: true, member });
    } catch (err) {
        res.status(500).json({ status: false, message: "Server error." });
    }
};

exports.getCommunityMembers = async (req, res) => {
    try {
        const { communityId } = req.params;
        const members = await Member.find({ community: communityId })
                                    .populate('user', 'name email')
                                    .populate('role', 'name');

        res.json({ status: true, members });
    } catch (err) {
        res.status(500).json({ status: false, message: "Server error." });
    }
};
exports.removeMember = async (req, res) => {
    try {
        const { communityId, userId } = req.params;

        const member = await Member.findOneAndDelete({ community: communityId, user: userId });
        if (!member) return res.status(404).json({ status: false, message: "Member not found." });

        res.json({ status: true, message: "Member removed successfully." });
    } catch (err) {
        res.status(500).json({ status: false, message: "Server error." });
    }
};
