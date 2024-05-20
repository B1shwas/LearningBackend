const jwt = require("jsonwebtoken");

const setUser = (user) => {
  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role,
    },
    process.env.TOKEN_SECRET_KEY
  );
  return token;
};

const getUser = (token) => {
  if (!token) return null;
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
    return decoded;
  } catch (err) {
    console.error("Error verifying JWT:", err);
    return null;
  }
};

// this is for the stateful authentication which is used for the short term....

// const sessionIdAndUserMap = new Map();

// const setUser = (id, user) => {
//   sessionIdAndUserMap.set(id, user);
// };

// const getUser = (id) => {
//   return sessionIdAndUserMap.get(id);
// };

module.exports = { getUser, setUser };
