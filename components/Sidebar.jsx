import React from "react";
import {
  HomeIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  BellIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  SearchIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { signOutUser } from "@/redux/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";

export default function Sidebar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSignOut = async() => {
    await signOut(auth)
    dispatch(signOutUser());
  };

  return (
    <div className="h-full hidden md:flex flex-col fixed xl:ml-24 lg:py-0">
      {/* // the space component adds margin to everything except for the first component */}
      <nav className="h-full relative xl:space-y-1.5">
        <div>
          <Image
            className="md:mt-[10px] md:mb-3 lg:py-0 ml-2 xl:m-3 flex justify-center items-center xl:justify-start"
            src={"/assets/twitter-new-logo-dark-mode.png"}
            width={26}
            height={26}
          />
        </div>
        <SidebarLink text={"Home"} Icon={HomeIcon} />
        <SidebarLink text={"Explore"} Icon={SearchIcon} />
        <SidebarLink text={"Notifications"} Icon={BellIcon} />
        <SidebarLink text={"Messages"} Icon={InboxIcon} />
        <SidebarLink text={"Lists"} Icon={ClipboardListIcon} />
        <SidebarLink text={"Bookmarks"} Icon={BookmarkIcon} />
        <SidebarLink text={"Profile"} Icon={UserIcon} />
        <SidebarLink text={"More"} Icon={DotsCircleHorizontalIcon} />
        <button className="hidden xl:inline bg-[#1d9bf0] h-[52px] w-[200px] rounded-full mt-2">
          Tweet
        </button>
        <div
          onClick={handleSignOut}
          className="absolute bottom-3 xl:px-4 px-1 xl:py-2 flex justify-center items-center space-x-3 hover:bg-white cursor-pointer hover:bg-opacity-10 rounded-full"
        >
          <div>
          <img
            className="w-10 h-10 rounded-full
          object-cover
          "
            src={user.photoUrl || "/assets/person-1.jpg" } 
          />
          </div>
          <div className="hidden xl:inline">
            <h1 className=" font-bold whitespace-nowrap">{user.name}</h1>
            <h1 className="text-gray-500">@{user.username}</h1>
          </div>
          <DotsHorizontalIcon className="w-10 hidden xl:inline" />
        </div>
      </nav>
    </div>
  );
}

function SidebarLink({ text, Icon }) {
  return (
    <li className="flex items-center mb-3 space-x-3 text-[18px] hoverAnimation xl:p-3">
      <Icon className="xl:h-6 h-8" />
      <span className="hidden xl:inline">{text}</span>
    </li>
  );
}
