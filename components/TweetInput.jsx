import { db } from "@/firebase";
import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
} from "@heroicons/react/outline";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function TweetInput() {
  const [text, setText] = useState("");
  const user = useSelector((state) => state.user);

  const sendTweet = async () => {
    const docRef = await addDoc(collection(db, "posts"), {
      username: user.username,
      name: user.name,
      uid: user.uid,
      photoUrl: user.photoUrl,
      timestamp: serverTimestamp(),
      likes: [],
      tweet: text,
    });
    setText("")
  };

  // const disable = () => {
  //   if (!user || !user.username || !user.name || !user.uid || !user.photoUrl) return true
  //   else if (!text) return true
  //   else return false
  // }

  return (
    <div className="p-3 flex space-x-3 w-full border-gray-700 border-b">
      <div>
        <img
          src={user?.photoUrl || '/assets/person-1.jpg'}
          width={30}
          height={30}
          className="rounded-full object-cover"
        />
      </div>
      <div className="w-full">
        <div>
          <textarea
          value={text}
            onChange={(e) => setText(e.target.value)}
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
            <button
              onClick={sendTweet}
              // disabled={!user || (!text && user)}
              disabled={!text}
              className="bg-[#1d9bf0] px-4 py-1.5 rounded-full disabled:opacity-50"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
