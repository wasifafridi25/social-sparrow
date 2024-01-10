import PostsFeed from "@/components/PostsFeed";
import Sidebar from "@/components/Sidebar";
import Trending from "@/components/Trending";
import Tweet from "@/components/Tweet";
import { db } from "@/firebase";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import React from "react";
import Moment from "react-moment";
import { useSelector } from "react-redux";

export const getServerSideProps = async (context) => {
  const id = context.query.id;
  const docRef = doc(db, "posts", id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  //now befre we send the data we need to format it as it contains serverTimeStamp which is an object and can't
  //send object to Components
  const formattedData = {
    username: data?.username,
    name: data?.name,
    photoUrl: data?.photoUrl,
    tweet: data?.tweet,
    comments: data?.comment || null,
    timestamp: JSON.stringify(data?.timestamp?.toDate()),
    image: data?.image || null
  };

  return {
    props: {
      formattedData,
    },
  };
};

export default function CommentsPage({ formattedData }) {
  const user = useSelector((state) => state.user);

  return (
    <div className="flex custom__bg-color min-h-screen text-[#E7E9EA] max-w-[1400px] mx-auto">
      <Sidebar />
      <div className="sm:ml-16 xl:ml-80 flex-grow max-w-xl border-gray-700 border-x">
        <div className="flex space-x-1 items-center px-3 py-2 text-lg sm:text-xl font-bold border-gray-700 border-b sticky top-0 z-50">
          <Link href={"/"}>
            <ArrowLeftIcon className="w-7" />
          </Link>
          <h1>Tweet</h1>
        </div>
        <div className="border-gray-700 border-b">
          <div className="p-3 flex space-x-3">
            <div>
              <img
                src={formattedData?.photoUrl}
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <div>
              <div className="text-gray-500 flex items-center space-x-2">
                <h1 className="text-white font-bold">{formattedData?.name}</h1>
                <span>@{formattedData?.username}</span>
                <div className="h-1 w-1 bg-gray-500 rounded-full"></div>
                <Moment fromNow>{JSON.parse(formattedData?.timestamp)}</Moment>
                {/* Parse it back into an object, Also it came as a string so can't use timestamp.toDate() */}
              </div>
              <div className="text-xl">{formattedData?.tweet}</div>
              {formattedData?.image && <img src={formattedData?.image} className="mt-3 border border-gray-700 
        rounded-md object-cover max-h-80"/>}
            </div>
          </div>
        </div>
        <div className="flex justify-between p-2 items-center border-b border-gray-700">
          <div className="flex justify-center items-center space-x-2 px-1">
            <img
              src={user?.photoUrl}
              className="w-12 h-12 rounded-full object-cover"
            />
            <h1 className="text-xl text-gray-500">Tweet your reply</h1>
          </div>
          <div>
            <button
              disabled={true}
              className="bg-[#1d9bf0] px-4 py-1.5 rounded-full disabled:opacity-50"
            >
              Tweet
            </button>
          </div>
        </div>
        {formattedData.comments?.map((comment) => (
          <div className="border-gray-700 border-b">
            <div className="p-3 flex space-x-3">
              <div>
                <img
                  src={comment?.photoUrl}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <div>
                <div className="text-gray-500 flex items-center space-x-2">
                  <h1 className="text-white font-bold">{comment?.name}</h1>
                  <span>@{comment?.username}</span>
                  {/* <Moment fromNow>{comment?.timestamp?.toDate()}</Moment> */}
                  {/* Parse it back into an object, Also it came as a string so can't use timestamp.toDate() */}
                </div>
                <div>{comment?.comment}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Trending />
    </div>
  );
}
