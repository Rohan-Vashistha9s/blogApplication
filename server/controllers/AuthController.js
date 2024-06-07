const User = require("../models/User.js");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        let user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ success: false, message: "Please Login" })
        }

        const securePassword = await bcrypt.hash(password, 10);
        user = await User.create({ username, email, password: securePassword });
        await user.save();

        return res.status(201).json({ success: true, message: "user created successfully" });
    }
    catch (err) {
        return res.status(500).json({ success: false, message: err.message })
    }
}