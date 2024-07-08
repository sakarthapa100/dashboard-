import React from "react";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/Pagination/Pagination";
import { fetchUsers } from "@/app/lib/data";

const Page = async ({ searchParams }) => {
  const q = searchParams?.q || '';
  const page = searchParams?.page || 1;

  const { users, count } = await fetchUsers(q, page);
  console.log(users);
  
  return (
    <div className="p-4 bg-gray-800 mt-9 border-r-2">
      <div className="flex items-center justify-between">
        <Search placeholder={"Search for the users ..."} />
        <Link href="/dashboard/users/add">
          <button className="bg-[#5d57c9] p-1 rounded-lg w-[6rem]">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full mt-7">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>
                <div className="flex items-center gap-2 mt-4">
                  <Image
                    src={user.img?.startsWith('http') ? user.img : "/noavatar.png"}
                    alt="avatar"
                    height={40}
                    width={40}
                    className="rounded-full bg-cover"
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{new Date(user.createdAt).toLocaleDateString()}</td>
              <td>{user.isAdmin ? "Admin" : "User"}</td>
              <td>{user.isActive ? "Active" : "Inactive"}</td>
              <td>
                <div className="flex gap-6 border-none cursor-pointer rounded-lg">
                  <Link href={`/dashboard/users/${user._id}`}>
                    <button className="bg-green-500 p-[7px] rounded-lg">
                      View
                    </button>
                  </Link>
                  <button className="bg-red-500 rounded-lg p-[7px]">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default Page;
