const Subs = require("../models/subscriptionsModel");

const getSubs = async () => {
 return await Subs.find({})
};

const getById = async (id) => {
    try {
      return await Subs.findById(id);
    } catch (e) {
      throw { msg: e };
    }
  };
  
  const updateSubs = async (id, obj) => {
    try {
      await Subs.findByIdAndUpdate(id, obj);
      return 'Updated';
    } catch (error) {
      throw `Error: ${error}`;
    }
  };
  
  const deleteSubs = async (id) => {
    try {
      await Subs.findByIdAndDelete(id);
      return 'Deleted';
    } catch (error) {
      throw `Error: ${error}`;
    }
  };
  
  const addSubs= async (obj) => {
    const subs = new Subs({
        movieID : String,
        memberID : String,
        date : String
    })
  
    await subs.save()
    return 'created'
  
  }
  
  
module.exports = {getSubs, getById, updateSubs, deleteSubs, addSubs};
