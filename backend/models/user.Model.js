const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const User = sequelize.define('users', {
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        alert: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    // timestamps: false // 2 trường createdAt và updatedAt
    // paranoid: true, // trường deletedAt (Soft delete)
    // underscored: true //chuyển createdAt và updatedAt => created_at và updated_at
});

sequelize.sync().then(() => {
    console.log('User table created successfully');
}).catch((err) => {
    console.log('Unable to create user table: ' + err);
});

module.exports = User;

sequelize.sync().then(() => {
    console.log('create user');

    User.create({
        name: 'Nguyen Van A',
        email: 'test@gmail.com',
        password: '123456789',
        age: 21,
        address: '123'
    }).then(res => {
        console.log('User inserted successfully');
    }).catch((err) => {
        console.log('fail: ' + err);
    });
}).catch((err) => {
    console.log('fail: ' + err);
});