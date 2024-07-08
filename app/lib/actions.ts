import { revalidatePath } from "next/cache";
import { connectDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { User } from "./model"; // Ensure User model is imported

export const addUser = async (formData: FormData) => {
  "use server";
  const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData.entries()) as {
    username: string;
    email: string;
    password: string;
    phone?: string;
    address?: string;
    isAdmin?: boolean;
    isActive?: boolean;
  };

  try {
    await connectDB();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
