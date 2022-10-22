const Members = require("../models/memberModel");

const getMembers = async () => {
  try {
    return await Members.find({});
  } catch (e) {
    throw { msg: e };
  }
};

const getById = async (id) => {
  try {
    return await Members.findById(id);
  } catch (e) {
    throw { msg: e };
  }
};

const updateMember = async (id, obj) => {
  try {
    await Members.findByIdAndUpdate(id, obj);
    return 'Updated';
  } catch (error) {
    throw `Error: ${error}`;
  }
};

const deleteMember = async (id) => {
  try {
    await Members.findByIdAndDelete(id);
    return 'Deleted';
  } catch (error) {
    throw `Error: ${error}`;
  }
};

const addMember = async (obj) => {
  const members = new Members({
    fullName: obj.fullName,
    username: obj.username,
    email: obj.email,
    city: obj.city
  })

  await members.save()
  return 'created'

}

module.exports = { getMembers, getById, updateMember, deleteMember, addMember  };
