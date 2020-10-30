import { BadRequestError } from './../bad-request-error';
import express, {Request, Response} from 'express';
import { body } from 'express-validator';
import { User } from '../models/user';
import jwt from 'jsonwebtoken';
import { validateRequest } from '../middlewares/validate-request';

const router = express.Router();

router.post('/api/users/signup',
  [
    body('email').isEmail().withMessage('Please provide an email'),
    body('password').trim().isLength({ min: 4, max: 20}).withMessage('Password must be between 4 and 20 characters long')
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new BadRequestError('Email is already in use');
    }

    const user = User.build({ email, password });
    await user.save();

    // Generate JWT
    const userJwt = jwt.sign({
      id: user.id,
      email: user.email,
    },
      process.env.JWT_KEY!
    );

    // Store JWT on session object
    req.session = {
      jwt: userJwt
    }

    res.status(201).send(user);
});

export { router as signUpRouter };