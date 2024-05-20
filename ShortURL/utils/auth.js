const sessionIdAndUserMap = new Map();

const setUser = (id, user) => {
  sessionIdAndUserMap.set(id, user);
};

const getUser = (id) => {
  return sessionIdAndUserMap.get(id);
};

module.exports = { getUser, setUser };
