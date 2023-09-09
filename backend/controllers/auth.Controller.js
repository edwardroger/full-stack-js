const User = require('../models/user.Model')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { generateToken } = require('../services/auth.Service');
require('dotenv').config();

const login = async (req, res) => {
    let email = req.body.email ?? '';
    let password = req.body.password ?? '';
    let msg = [];
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!email || !password) {
        msg.push('Please enter your email and password');
    }
    if (password.length < 5) {
        msg.push('Password must be at least 8 characters');
    }
    if (!regex.test(email)) {
        msg.push('Invalid email');
    }

    if (msg.length > 0) {
        return res.status(200).json({
            message: msg,
            err: 1,
        });
    }

    let user = await User.findOne({ where: {
        email: email,
    }})

    if (user !== null) {
        let check = await bcrypt.compareSync(password, user.password);
        if (check) {
            const tokens = generateToken({ email, password });

            return res.status(200).json({
                data: tokens,
                message: 'Login successful',
                err: 0,
            });
        }
    }

    return res.status(401).json({
        message: 'Invalid username or password',
        err: 1,
    })
}
//BT: sử dụng mã hoá password để làm chức năng đăng nhập. Kèm ReactJS
module.exports = {
    login: login,
}