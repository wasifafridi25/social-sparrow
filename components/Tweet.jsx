import { db } from "@/firebase";
import { openCommentModal, setCommentTweetDetails } from "@/redux/modalSlice";
import {
  ChartBarIcon,
  ChatIcon,
  HeartIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import { HeartIcon as FilledHeartIcon } from "@heroicons/react/solid";
import {
  arrayRemove,
  arrayUnion,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";

export default function Tweet({ data, id }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.user);

  const [likes, setLikes] = useState([]);

  const likeTweet = async (e) => {
    e.stopPropagation();

    if (likes.includes(user.uid)) {
      await updateDoc(doc(db, "posts", id), {
        likes: arrayRemove(user.uid),
      });
    } else {
      await updateDoc(doc(db, "posts", id), {
        likes: arrayUnion(user.uid),
      });
    }
  };

  useEffect(() => {
    if (!id) return;

    const docRef = doc(db, "posts", id);
    if (!docRef) return; // Additional check to ensure docRef is valid

    const unsubscribe = onSnapshot(docRef, (doc) => {
      setLikes(doc.data()?.likes || []); // Ensure default to an empty array if likes are not available
    //onSnapshot is like an active listener so everytime a user likes or unlikes it will listen
    });

    return unsubscribe;
  }, []);

  return (
    <div
      onClick={() => router.push("/" + id)}
      className="border-gray-700 border-b cursor-pointer"
    >
      <TweetHeader data={data} />
      <div className="flex space-x-14 ml-[52px] mb-2">
        <div
          onClick={(e) => {
            e.stopPropagation();
            dispatch(
              setCommentTweetDetails({
                username: data?.username,
                name: data?.name,
                id: id,
                photoUrl: data?.photoUrl,
                tweet: data?.tweet,
              })
            );
            dispatch(openCommentModal());
          }}
          className="tweetHeadIconHover hoverBlue"
        >
          <ChatIcon className="w-5" />
          <span className="text-sm">{data.comment?.length}</span>
        </div>
        <div onClick={likeTweet} className="tweetHeadIconHover hoverRed">
          {likes.includes(user.uid) ? (
            <>
              <FilledHeartIcon className="w-5 text-pink-700" />
            </>
          ) : (
            <>
              <HeartIcon className="w-5" />
            </>
          )}
          {likes.length > 0 && likes.includes(user.uid) ? (
            <span className="text-pink-700 text-sm">{likes.length}</span>
          ) : likes.length > 0 ? (
            <span className="text-sm">{likes.length}</span>
          ) : null}
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
          <Moment fromNow>{data?.timestamp?.toDate()}</Moment>
        </div>
        <div>{data?.tweet}</div>
      </div>
    </div>
  );
}
