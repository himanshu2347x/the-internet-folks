const Community = require('../models/Community');

exports.createCommunity = async (req, res) => {
    try {
        const { name, slug } = req.body;

        const existingCommunity = await Community.findOne({ slug });
        if (existingCommunity) return res.status(400).json({ status: false, message: "Slug already exists." });

        const community = new Community({ name, slug, owner: req.user.id });
        await community.save();

        res.status(201).json({ status: true, community });
    } catch (err) {
        res.status(500).json({ status: false, message: "Server error." });
    }
};

exports.getAllCommunities = async (req, res) => {
    try {
        const communities = await Community.find().populate('owner', 'name email');
        res.json({ status: true, communities });
    } catch (err) {
        res.status(500).json({ status: false, message: "Server error." });
    }
};

exports.getMyCommunities = async (req, res) => {
    try {
        const communities = await Community.find({ owner: req.user.id });
        res.json({ status: true, communities });
    } catch (err) {
        res.status(500).json({ status: false, message: "Server error." });
    }
};
