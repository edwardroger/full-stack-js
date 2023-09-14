const UserService = require('../services/user.Service');
const con = require('../database/connection')
const User = require('../models/user.Model')
const jwt = require('jsonwebtoken');

const getUser = async (req, res) => {
    let users = await User.findAll({limit: 5});

    return res.status(200).json({
        users: users,
        err: 0,
        msg: "Get users successfully" 
    })
};

const getUserDetail = async (req, res) => {
    const authorizationClient = req.headers['authorization'];
    const token = authorizationClient && authorizationClient.split(' ')[1];
    
    if (! token) return res.sendStatus(401);

    try {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
            if (err) {
                res.status(401).end();
            } else {
                res.locals.jwt = decoded;
                const user = await User.findOne({ where: { email: decoded.email } });
                if (! user) {
                    return res.status(404).send({ message: 'User not found' });
                }
                
                return res.status(200).send({
                    user: user,
                    msg: 'Ok',
                    error: 0,
                })
            }
        });
    } catch (error) {
        return res.sendStatus(403);
    }
};

const createUser = async (req, res) => {
    let createdAt = new Date();
    let updatedAt = new Date();
    let newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age,
        address: req.body.address
    }
    let hashPassword = await UserService.hashPassword(newUser.password)

    let query = `INSERT INTO  users
        (name, email, password, age, address)
        VALUES 
        ('${newUser.name}', '${newUser.email}', '${hashPassword}', '${newUser.age}', '${newUser.address}')`;

    await con.query(query, (err, results) => {
        if (err) {
            return res.status(404).json({
                err: 1,
                msg: err.message
            })
        }

        return res.status(201).json({
            user: results,
            err: 0,
            msg: "Created user"
        })
    });
};

module.exports = {
    getUser: getUser,
    getUserDetail: getUserDetail,
    createUser: createUser,
}