const getUser = (req, res) => {
    res.send(JSON.parse('{"message": "Hello World!"}'));
};

const getUserDetail = (req, res) => {
    res.send(JSON.parse('{"message": "user detail!"}'));
};

module.exports = {
    getUser: getUser,
    getUserDetail: getUserDetail,
}