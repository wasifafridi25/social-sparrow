import Tweet from "./Tweet";
import TweetInput from "./TweetInput";

export default function PostsFeed() {
  return (
    <div className="sm:ml-20 xl:ml-96 flex-grow max-w-xl border-gray-700 border-x">
      <div className="px-3 py-2 text-lg sm:text-xl font-bold border-gray-700 border-b sticky top-0 z-50">
        Home
      </div>
      <TweetInput />
      <Tweet />
    </div>
  );
}
