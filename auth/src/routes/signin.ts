import { Password } from './../password';
import { BadRequestError } from './../bad-request-error';
import express, { Request, Response} from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../middlewares/validate-request';
import { User } from '../models/user';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/api/users/signin',
  [
    body('email').isEmail().withMessage('Please provide an email'),
    body('password').trim().isLength({ min: 4, max: 20}).withMessage('Password must be between 4 and 20 characters long')
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (!existingUser) throw new BadRequestError('Bad request');

    const passwordsMatch = await Password.compare(existingUser.password, password);
    if (!passwordsMatch) {
      throw new BadRequestError('Invalid credentials');
    }

    // Generate JWT
    const userJwt = jwt.sign(
      {
        id: existingUser.id,
        email: existingUser.email
      },
      process.env.JWT_KEY!
    );

    // Store on req.session
    req.session = {
      jwt: userJwt
    }

    res.status(200).send(existingUser);
});

export { router as signInRouter };