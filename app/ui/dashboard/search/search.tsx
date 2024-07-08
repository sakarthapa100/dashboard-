"use client";

import React from "react";
import { MdSearch } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const handleSearch = (e) => {
    const params = new URLSearchParams(searchParams);

params.set("page", 1)

    if(e.target.value){
    e.target.value.length > 2 &&   params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
   
    replace(`${pathname}?${params}`);
  };

  console.log(searchParams);
  console.log(pathname);
  return (
    <div className="flex items-center p-1 border-r-2 border-gray-700 rounded-lg  bg-gray-700 w-[19rem]  ">
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent border-none focus:outline-none text-gray-100 placeholder-gray-400 p-1 w-[19rem] rounded-lg "
        onChange={handleSearch}
      />
    </div>
  );
};

export default search;
