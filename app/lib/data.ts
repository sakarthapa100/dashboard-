import { User } from "./model";
import { connectDB } from "./utils";

export const fetchUsers = async ()=> {
  try {
    connectDB()
    const users =  await User.find()
    return users

  } catch (error) {
    console.log(error)
    throw new Error(error);
  }
}