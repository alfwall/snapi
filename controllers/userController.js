const { ObjectId } = require("mongoose").Types;
const { User, Thought } = require("../models");

module.exports = {
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json({ users });
        }
        catch(error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    async createUser(req, res) {

    }
};