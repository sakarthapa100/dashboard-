"use client"
import { MenuCategory } from '@/types';
import menuItems from '@/menuitems/MenuItems';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MdLogout } from 'react-icons/md';

const sidebar = () => {

  const pathname = usePathname()
  console.log(pathname)
  return (
    <div className='w-full sticky bg-gray-900 text-gray-100'>
      <div className='flex items-center gap-2 mb-4 p-4'>
        <Image className='rounded-full object-cover' src='/noavatar.png' alt='profile image' height={30} width={30} />
        <div className='flex flex-col'>
          <span className='font-bold'>Ram Bhadur</span>
          <span className='font-light'>Administrator</span>
        </div>
      </div>

      <div className=''>
        <ul className='space-y-4'>
          {menuItems.map((cat: MenuCategory) => (
            <li key={cat.title}>
              <span className='pl-4'>{cat.title}</span>
              <ul>
                {cat.list.map((item) => (
                  <li className='flex p-3 items-center gap-2 hover:bg-gray-100 hover:text-[#2C3E50] rounded pl-8' key={item.title}>
                    <item.icon />
                    <a href={item.path}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className='flex items-center gap-3 p-3 m-3 hover:bg-gray-100 hover:text-[#2C3E50] rounded'>
          <MdLogout />
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default sidebar;
