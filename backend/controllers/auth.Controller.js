const User = require('../models/user.Model')

const login = async (req, res) => {
    let email = req.body.email ?? '';
    let password = req.body.password ?? '';
    let msg = [];
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!email || !password) {
        msg.push('Please enter your email and password');
    }
    if (password.length < 8) {
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
        password: password,
    }})

    if (user !== null) {
        return res.status(200).json({
            user: user,
            message: 'Login successful',
            err: 0,
        });
    }

    return res.status(401).json({
        message: 'Invalid username or password',
        err: 1,
    })
}

module.exports = {
    login: login,
}