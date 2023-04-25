import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../models/user.js'
import {createError} from '../utils/createError.js'

export const register = async (req, res, next) => {
  try {
    const {username, email, password} = req.body
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
        username, 
        email,
        password: hash,
    })
    const existUsername = await User.find({username: username})
    if(existUsername.length) return next(createError(401, 'Username already taken'))

    const existEmail = await User.find({email: email})
    if(existEmail.length) return next(createError(401, 'This email already registered'))

    const savedUser = await newUser.save()
    res.status(201).json("Registerd sucessfully")
  } catch (error) {
    
  }
}

//Login
export const login = async (req, res, next) => {
  const username = req.body.username;
  const userPassword = req.body.password;
  try {
    const user  = await User.findOne({username: username});
    if(!user) return next(createError(401, "User not found"))

    const isPasswordCorrect = await bcrypt.compare(userPassword, user.password);
    if(!isPasswordCorrect) return next(createError(401, "Password is not correct"))

    
    const token = jwt.sign({ id:user._id, isAdmin: user.isAdmin }, '3df569774e63501ac844e87c9c77eb9048e2dff1346e0a3bc2bea38e50892bc3');
    const {password, isAdmin, ...rest} = user._doc
    res.cookie("access_token", token, {
        httpOnly: true,
    }).json({...rest})
  } catch (error) {
    next(error);
  }
};

