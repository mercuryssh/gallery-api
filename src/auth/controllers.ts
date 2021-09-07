import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';
import Authentications from './entities';

const signupController = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    try {
      await Authentications.create({
        email,
        password: await bcrypt.hash(password, 10),
      }).save();
      const token = await JWT.sign(
        { email, password }, process.env.API_KEY || 'api_key',
      );
      res.status(200).json({ message: 'Acount create', token });
    } catch (error) {
      res.status(200).json({ message: 'Email duplicate' });
    }
  } else {
    res.status(400).json({
      erros: errors.array(),
    });
  }
};

const loginController = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    res.status(400).json({
      erros: erros.array(),
    });
  } else {
    const auth = await Authentications.findOne({
      where: {
        email,
      },
    });
    if (auth === undefined) res.json({ error: 'Email or password are incorrect' });
    else {
      const isMatch = await bcrypt.compare(password, auth.password);
      if (isMatch) {
        res.json({
          token: await JWT.sign(
            { email: auth.email, password: auth.password }, process.env.API_KEY || 'api_key',
          ),
        });
      } else {
        res.json({ message: 'Email or password are incorrect' });
      }
    }
  }
};

export {
  signupController,
  loginController,
};
