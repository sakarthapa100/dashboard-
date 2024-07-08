import { User } from "./model";
import { connectDB } from "./utils";

interface FetchUsersResult {
  users: typeof User[];
  count: number;
}

export const fetchUsers = async (q: string = '', page: number = 1): Promise<FetchUsersResult> => {
  const regex = new RegExp(q, 'i');
  const ITEM_PER_PAGE = 2;

  try {
    await connectDB();  // Ensure database connection is established
    const count = await User.countDocuments({ username: { $regex: regex } });
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip((page - 1) * ITEM_PER_PAGE);

    return { users, count };  // Return an object containing users and count

  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch users');
  }
};
