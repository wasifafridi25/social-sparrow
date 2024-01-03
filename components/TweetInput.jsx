import { CalendarIcon, ChartBarIcon, EmojiHappyIcon, LocationMarkerIcon, PhotographIcon } from "@heroicons/react/outline";
import Image from "next/image";

export default function TweetInput() {
  return (
    <div className="p-3 flex space-x-3 w-full border-gray-700 border-b">
      <div>
        <Image
          src={"/assets/person-1.jpg"}
          width={30}
          height={30}
          className="rounded-full object-cover"
        />
      </div>
      <div className="w-full">
        <div>
          <textarea
            className="bg-transparent resize-none outline-none w-full min-h-[50px] text-lg"
            placeholder="What's on your mind?"
          />
        </div>

        <div className="flex justify-between w-full border-gray-700 border-t pt-4">
          <div className="flex">
            {/* //Icons */}
            <div className="iconAnimation">
              <PhotographIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
            <div className="iconAnimation">
              <ChartBarIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
            <div className="iconAnimation">
              <EmojiHappyIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
            <div className="iconAnimation">
              <CalendarIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
            <div className="iconAnimation">
              <LocationMarkerIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
          </div>
          <div>
            <button className="bg-[#1d9bf0] px-4 py-1.5 rounded-full">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}
