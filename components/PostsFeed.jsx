import { useEffect, useState } from "react";
import Tweet from "./Tweet";
import TweetInput from "./TweetInput";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";

export default function PostsFeed() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setTweets(snapshot.docs);
      // console.log(snapshot.docs[0].data())
    });

    return unsubscribe;
  }, []);

  return (
    <div className="sm:ml-16 xl:ml-80 flex-grow max-w-xl border-gray-700 border-x">
      <div className="px-3 py-2 text-lg sm:text-xl font-bold border-gray-700 border-b sticky top-0 z-50">
        Home
      </div>
      <TweetInput />

      {tweets.map((tweet) => {
        return <Tweet key={tweet.uid} data={tweet.data()}/>;
      })}
    </div>
  );
}
