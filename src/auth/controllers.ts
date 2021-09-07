import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import Authentications from './entities';

const signupController = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    try {
      await Authentications.create({ email, password }).save();
      res.status(200).json({ message: 'Acount create' });
    } catch (error) {
      res.status(200).json({ message: 'Email duplicate', error });
    }
  } else {
    res.status(400).json({
      erros: errors.array(),
    });
  }
};

const loginController = async (req: Request, res: Response): Promise<void> => {
  const erros = validationResult(req);
  if (erros.isEmpty()) {
    res.status(400).json({
      erros: erros.array(),
    });
  }
  res.status(200).json({ message: 'ok' });
};

export {
  signupController,
  loginController,
};
