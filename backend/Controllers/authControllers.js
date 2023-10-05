import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'

export const register = async(req,res) => {

  const {email, name, password, role, photo, gender} = req.body;
  try {
    let user = null;
    // if therapist or patient
    if(role === 'patient') {
      user = await User.findOne({email});
    } else if (role === 'therapist') {
      user = await Doctor.findOne({email});
    }

    // Check if the email is already registered
    if (user) {
      return res.status(400).json({ error: 'Email is already registered' });
    }

    //hash password
  
  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(password, salt);

  if(role === 'patient') {
    user = new User({
      name,
      email,
      password:hashedPassword,
      photo,
      role,
      gender,
    })
  }
  if(role === 'therapist') {
    user = new Doctor({
      name,
      email,
      password:hashedPassword,
      photo,
      role,
      gender,
    })
  }

  await user.save();

    res.status(201).json({ message: 'User successfully created', status: true});
    
  } catch (error) {
    res.status(400).json({ sucess:false, message: 'Registration failed, Please try again' });
  }
}
export const login = async(req,res) => {
  try {
    
  } catch (error) {
    
  }
}