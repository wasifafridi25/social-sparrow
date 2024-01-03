import React from "react";
import {
  HomeIcon,
  HashtagIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  BellIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="h-full hidden md:flex flex-col fixed xl:ml-24">
      {/* // the space component adds margin to everything except for the first component */}
      <nav className="h-full relative xl:space-y-1.5">
        <div>
          <Image
            className="py-3 ml-1 xl:m-3 flex justify-center items-center xl:justify-start"
            src={"/assets/twitter-new-logo-dark-mode.png"}
            width={34}
            height={34}
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
        <button className="hidden xl:inline bg-[#1d9bf0] h-[52px] w-[200px] rounded-full mt-2">Tweet</button>
        <div className="absolute bottom-0 p-3">User</div>
      </nav>
    </div>
  );
}

function SidebarLink({ text, Icon }) {
  return (
    <li className="flex items-center mb-3 space-x-3 text-[18px] hoverAnimation xl:p-3">
      <Icon className="xl:h-6" />
      <span className="hidden xl:inline">{text}</span>
    </li>
  );
}
