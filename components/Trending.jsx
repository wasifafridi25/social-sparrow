import {
  
  DotsHorizontalIcon,
  SearchIcon,
} from "@heroicons/react/outline";

import { BadgeCheckIcon } from '@heroicons/react/solid'
import Image from "next/image";

export default function Trending() {
  return (
    <div className="hidden xl:flex">
      <div className="py-1.5 px-7 ">
        <div className="flex items-center space-x-3 mb-4 bg-white bg-opacity-10 p-3 w-[270px] h-[34px] rounded-3xl border border-transparent  focus-within:border-blue-700 text-gray-500 focus-within:text-blue-700">
          <SearchIcon className="w-4" />
          <input
            placeholder="Search"
            className="bg-transparent focus:outline-none placeholder:text-gray-600 text-sm text-[#E7E9EA]"
          />
        </div>

        <div className="bg-white bg-opacity-10 w-[270px] h-[400px] rounded-2xl mb-4 px-3 py-2 text-[#F7F9F9]">
          <h1 className="font-extrabold ">What's happening</h1>
          <div className="py-3 relative">
            <div>
              <DotsHorizontalIcon className="w-4 absolute right-4 top-4" />
            </div>

            <div>
              <div className="flex items-center space-x-2 text-[#8b98A5] text-sm">
                <span>Politics</span>
                <div className="w-1 h-1 bg-gray-600"></div>
                <span>Trending</span>
              </div>

              <h2 >Romney</h2>
              <span className="text-sm text-[#8b98A5]">15.8K Posts</span>
            </div>
          </div>
          <div className="py-3 relative">
            <div>
              <DotsHorizontalIcon className="w-4 absolute right-4 top-4" />
            </div>

            <div>
              <div className="flex items-center space-x-2 text-[#8b98A5] text-sm">
                <span>Trending in United States</span>
                
              </div>

              <h2>Destiny</h2>
              <span className="text-sm text-[#8b98A5]">148K Posts</span>
            </div>
          </div>
          <div className="py-3 relative">
            <div>
              <DotsHorizontalIcon className="w-4 absolute right-4 top-4" />
            </div>

            <div>
              <div className="flex items-center space-x-2 text-[#8b98A5] text-sm">
                <span>Entertainment</span>
                <div className="w-1 h-1 bg-gray-600"></div>
                <span>Trending</span>
              </div>

              <h2>joey king</h2>
              <span className="text-sm text-[#8b98A5]">3,049 Posts</span>
            </div>
          </div>
          <div className="py-3 relative">
            <div>
              <DotsHorizontalIcon className="w-4 absolute right-4 top-4" />
            </div>

            <div>
              <div className="flex items-center space-x-2 text-[#8b98A5] text-sm">
                <span>Politics</span>
                <div className="w-1 h-1 bg-gray-600"></div>
                <span>Trending</span>
              </div>

              <h2>George Floyd</h2>
              <span className="text-sm text-[#8b98A5]">138K Posts</span>
            </div>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 w-[270px] h-[240px] rounded-2xl px-3 py-2 mb-10 text-[#F7F9F9]">
          <h1 className="font-extrabold mb-2">Who to follow</h1>
          <div className="flex justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div>
                <Image src={"/assets/kriti2.jpg"}width={30} height={30} className="rounded-full"/>
              </div>
              <div className="text-sm">
                <div className="flex space-x-1">

                  <span>Kriti Sanon</span>
                  <BadgeCheckIcon className="w-4 text-yellow-400"/>
                </div>

                <span className="text-[#8b98A5]">@kritisanon</span>
              </div>
            </div>
            <div>
              <button className="bg-[#EFF3F4] text-[#0f1419] font-bold text-sm px-4 py-1 rounded-full ">Follow</button>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div>
                <Image src={"/assets/kriti2.jpg"}width={30} height={30} className="rounded-full"/>
              </div>
              <div className="text-sm">
                <div className="flex space-x-1">

                  <span>Kriti Sanon</span>
                  <BadgeCheckIcon className="w-4 text-yellow-400"/>
                </div>

                <span className="text-[#8b98A5]">@kritisanon</span>
              </div>
            </div>
            <div>
              <button className="bg-[#EFF3F4] text-[#0f1419] font-bold text-sm px-4 py-1 rounded-full ">Follow</button>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div>
                <Image src={"/assets/kriti2.jpg"}width={30} height={30} className="rounded-full"/>
              </div>
              <div className="text-sm">
                <div className="flex space-x-1">

                  <span>Kriti Sanon</span>
                  <BadgeCheckIcon className="w-4 text-yellow-400"/>
                </div>

                <span className="text-[#8b98A5]">@kritisanon</span>
              </div>
            </div>
            <div>
              <button className="bg-[#EFF3F4] text-[#0f1419] font-bold text-sm px-4 py-1 rounded-full ">Follow</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
