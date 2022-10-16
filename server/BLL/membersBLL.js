const membersWS = require('../DAL/membersWS');

const getMembers = async () => {
  let { data: members } = await membersWS.getMembers();
  members = members.map((member) => {
    return {
      id: member.id,
      fullName: member.name,
      username: member.username,
      email: member.email,
      city: member.address.city,
    };
  });
  return members;
};

module.exports = { getMembers };

