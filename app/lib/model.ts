import mongoose, { Document, Model } from "mongoose";

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  img: string;
  isAdmin: boolean;
  isActive: boolean;
  phone?: string;
  address?: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
}, { timestamps: true });

interface IProduct extends Document {
  title: string;
  desc: string;
  price: string;
  stock: string;
  color?: string;
  size?: string;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new mongoose.Schema<IProduct>({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
    min: 0,
  },
  stock: {
    type: String,
    required: true,
    min: 0,
  },
  color: {
    type: String,
  },
  size: {
    type: String,
  },
}, { timestamps: true });

export const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", userSchema);
export const Product: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema);
