import jwt from 'jsonwebtoken';

const secret = 'ITUvLO9xX7yqe6B0inGp';

const getUser = (tokenFromRequest) => {
  try {
    if (tokenFromRequest) {
      return jwt.verify(tokenFromRequest, secret);
    }
    return null;
  } catch (err) {
    return null;
  }
};

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    secret,
    {
      expiresIn: '1d', // token will expire in 1 day
    }
  );
};

const refreshToken = (user) => {
  if (Date.now() >= user.exp * 1000) {
    return generateToken(user);
  }
};

export { secret, getUser, generateToken, refreshToken };
