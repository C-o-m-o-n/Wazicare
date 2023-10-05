import User from '../models/UserSchema.js';

export const updateUser = async(req,res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(id,{$set:req.body}, {new:true});

    res.status(200).json({success:true, message: "Successfully updated", data: updateUser})

  } catch (error) {
    res.status(500).json({success:false, message: "An error occured while updating, please try again!"})
  }
} 
export const deleteUser = async(req,res) => {
  const id = req.params.id;

  try {
    const deletedUser = await User.findByIdAndDelete(id);

    res.status(200).json({success:true, message: "Successfully deleted"})

  } catch (error) {
    res.status(500).json({success:false, message: "An error occured while deleting, please try again!"})
  }
} 
export const getSingleUser = async(req,res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);

    res.status(200).json({success:true, message: "User found", data: user})

  } catch (error) {
    res.status(404).json({success:false, message: "User not found"})
  }
} 
export const getAllUsers = async(req,res) => {
  const id = req.params.id;

  try {
    const users = await User.find({});

    res.status(200).json({success:true, message: "Users found", data: users})

  } catch (error) {
    res.status(404).json({success:false, message: "Users not found"})
  }
} 