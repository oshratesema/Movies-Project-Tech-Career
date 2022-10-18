const Subs = require('../models/subscriptionsModel');

const getSubs = async () => {
    return Subs.find({});
}

module.exports = {getSubs};