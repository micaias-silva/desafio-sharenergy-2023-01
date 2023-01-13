import 'dotenv/config';

const SECRET = process.env.SECRET_KEY;

export const jwtConstants = {
  secret: SECRET,
};
