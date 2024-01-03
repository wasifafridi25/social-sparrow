import {
  ChartBarIcon,
  ChatIcon,
  HeartIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

export default function Tweet() {
  return (
    <div className="border-gray-700 border-b">
      <TweetHeader />
      <div className="flex space-x-14 ml-[52px] mb-2">
        <div className="tweetHeadIconHover hoverBlue">
          <ChatIcon className="w-5" />
        </div>
        <div className="tweetHeadIconHover hoverRed">
          <HeartIcon className="w-5" />
        </div>
        <div className="tweetHeadIconHover hoverGreen">
          <ChartBarIcon className="w-5" />
        </div>

        <div className="tweetHeadIconHover hoverBlue">
          <UploadIcon className="w-5" />
        </div>
      </div>
    </div>
  );
}

export function TweetHeader() {
  return (
    <div className="p-3 flex space-x-3">
      <div>
        <Image
          src={"/assets/person-1.jpg"}
          width={30}
          height={30}
          className="rounded-full object-cover"
        />
      </div>
      <div>
        <div className="text-gray-500 flex items-center space-x-2">
          <span>@Peter2513</span>
          <div className="h-1 w-1 bg-gray-500 rounded-full"></div>
          <span>2 hours ago</span>
        </div>
        <div>It's high time I let everyone know that I let the dogs out.</div>
      </div>
    </div>
  );
}
