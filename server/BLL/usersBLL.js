const Users = require('../models/usersModel');

const getUsers = async () => {
    return Users.find({});
}

module.exports = {getUsers};