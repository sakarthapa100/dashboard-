import React from "react";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/Pagination/Pagination";
import { fetchUsers } from "@/app/lib/data";

const Page =async () => {
  const users = await fetchUsers();
  console.log(users)
  return (
    <div className="p-4 bg-gray-800 mt-9 border-r-2  ">
      <div className="flex  items-center justify-between ">
        <Search placeholder={"Search for the users ..."} />
        <Link href="/dashboard/users/add">
          <button className="bg-[#5d57c9] p-1  rounded-lg w-[6rem] ">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full mt-7  ">
        <thead className="">
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody className="">
          <tr>
            <td>
              <div className="flex items-center gap-2 mt-4">
                <Image
                  src="/noavatar.png"
                  alt="avatar"
                  height={40}
                  width={40}
                  className="rounded-full bg-cover "
                />
                John Doe
              </div>
            </td>
            <td>John123@gmail.com</td>
            <td>13.02.2020</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
              <div className="flex gap-6 border-none cursor-pointer rounded-lg  ">
                <Link href={'/dashboard/users/test'}>
                  <button className="bg-green-500 p-[7px] rounded-lg ">
                    Views
                  </button>
                </Link>
                <button className="bg-red-500 rounded-lg p-[7px]  ">
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <div className="flex items-center gap-2">
                <Image
                  src="/noavatar.png"
                  alt="avatar"
                  height={40}
                  width={40}
                  className="rounded-full bg-cover "
                />
                John Doe
              </div>
            </td>
            <td>John123@gmail.com</td>
            <td>13.02.2020</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
              <div className="flex gap-6 border-none cursor-pointer rounded-lg  ">
                <Link href={"/"}>
                  <button className="bg-green-500 p-[7px] rounded-lg ">
                    Views
                  </button>
                </Link>
                <button className="bg-red-500 rounded-lg p-[7px]  ">
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Page;
