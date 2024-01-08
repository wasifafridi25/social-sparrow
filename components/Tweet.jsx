import {
  ChartBarIcon,
  ChatIcon,
  HeartIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

import Moment from "react-moment";

export default function Tweet({ data }) {
  return (
    <div className="border-gray-700 border-b">
      <TweetHeader data={data} />
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

export function TweetHeader({ data }) {
  return (
    <div className="p-3 flex space-x-3">
      <div>
        <img
          src={data?.photoUrl}
          width={30}
          height={30}
          className="rounded-full object-cover"
        />
      </div>
      <div>
        <div className="text-gray-500 flex items-center space-x-2">
          <h1 className="text-white font-bold">{data?.name}</h1>
          <span>@{data?.username}</span>
          <div className="h-1 w-1 bg-gray-500 rounded-full"></div>
          <Moment fromNow>
            {/* {data?.timestamp?.toDate()} */}
          </Moment>
        </div>
        <div>{data?.tweet}</div>
      </div>
    </div>
  );
}
