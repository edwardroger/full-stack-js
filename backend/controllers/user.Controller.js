const listUsers = [
    {
        "id": 1,
        "name": "John",
        "age": 18,
        "email": "john@gmail.com",
        "password": "123456"
    },
    {
        "id": 2,
        "name": "Doe",
        "age": 21,
        "email": "doe@gmail.com",
        "password": "123456"
    },
    {
        "id": 3,
        "name": "Michael",
        "age": 22,
        "email": "michael@gmail.com",
        "password": "123456"
    },
];

const getUser = (request, response) => {
    let listUser = JSON.parse(JSON.stringify(listUsers));

    response.send(listUser);
};

const getUserDetail = (req, res) => {
    res.send(JSON.parse('{"message": "user detail!"}'));
};

module.exports = {
    getUser: getUser,
    getUserDetail: getUserDetail,
}