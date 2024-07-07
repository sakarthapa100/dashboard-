import React from "react";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/Pagination/Pagination";

const page = () => {
  return (
    <div>
  <div className="p-4 bg-gray-800 mt-9 border-r-2  ">
      <div className="flex  items-center justify-between ">
        <Search placeholder={"Search for the Products ..."} />
        <Link href="/dashboard/products/add">
          <button className="bg-[#5d57c9] p-1  rounded-lg w-[6rem] ">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full mt-7  ">
        <thead className="">
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody className="">
          <tr>
            <td>
              <div className="flex items-center gap-2 mt-4">
                <Image
                  src="/noproduct.jpg"
                  alt="avatar"
                  height={40}
                  width={40}
                  className="rounded-full bg-cover "
                />
                Mac Book Pro 
              </div>
            </td>
            <td>Desc</td>
            <td>$1200</td>
            <td>12.02.2020</td>
            <td>32</td>
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
          <br />
          <tr>
            <td>
              <div className="flex items-center gap-2">
                <Image
                  src="/noproduct.jpg"
                  alt="avatar"
                  height={40}
                  width={40}
                  className="rounded-full bg-cover "
                />
                Iphone 14 Pro Max
              </div>
            </td>
            <td>Latest phone</td>
            <td>$900</td>
            <td>13.02.2020</td>
            <td>100</td>
            <td>
              <div className="flex gap-6 border-none cursor-pointer rounded-lg  ">
                <Link href={"/dashboard/products/test"}>
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
    </div>
  )
}

export default page