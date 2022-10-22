const Subs = require("../models/subscriptionsModel");

const getSubs = async () => {
 return await Subs.find({})
};

module.exports = {getSubs};
