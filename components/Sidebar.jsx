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
  SearchIcon
} from "@heroicons/react/outline";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="hidden md:flex flex-col fixed">
      
      {/* // the space component adds margin to everything except for the first component */}
      <nav className="space-y-1.5"> 
      <div>
        <Image className="py-3"
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
      </nav>
      <div>User</div>
    </div>
  );
}

function SidebarLink({ text, Icon }) {
  return (
    <li className="flex items-center mb-6 space-x-3 text-xl hoverAnimation xl:p-3 cursor-pointer">
      <Icon className="h-7" />
      <span className="hidden xl:inline">{text}</span>
    </li>
  );
}
