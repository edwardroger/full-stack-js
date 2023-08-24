const con = require('../database/connection')

const getUser = (req, res) => {
    let query = "SELECT * FROM users";
    con.query(query, (err, result) => {
        if (err) throw err

        return res.status(200).json({
            users: result,
            err: 0,
            msg: "Get users successfully" 
        })
    })
};

const getUserDetail = (req, res) => {
    res.send(JSON.parse('{"message": "user detail!"}'));
};

const createUser = (req, res) => {
    let newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age,
        address: req.body.address
    }
    let query = `INSERT INTO  users
        (name, email, password, age, address)
        VALUES 
        ('${newUser.name}', '${newUser.email}', '${newUser.password}', '${newUser.age}', '${newUser.address}')`;

    con.query(query, (err, results) => {
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

// BTVN: - Đăng ký đăng nhập

module.exports = {
    getUser: getUser,
    getUserDetail: getUserDetail,
    createUser: createUser,
}