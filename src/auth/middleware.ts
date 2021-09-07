import { check } from 'express-validator';

const authMiddleware = [
  check('email').isEmail(),
  check('password').isStrongPassword(),
];

export default authMiddleware;
