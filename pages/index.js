import BottomBanner from "@/components/BottomBanner";
import PostsFeed from "@/components/PostsFeed";
import Sidebar from "@/components/Sidebar";
import Trending from "@/components/Trending";
import CommentModal from "@/components/modals/CommentModal";
import { useSelector } from "react-redux";

export default function Home() {
  const username = useSelector(state => state.user.username)
  console.log(username)
  return (
    <div>
      <div className="flex custom__bg-color min-h-screen text-[#E7E9EA] max-w-[1400px] mx-auto">
        <Sidebar />
        <PostsFeed />
        <Trending /> 
        
      </div>
      <CommentModal />

      {!username && <BottomBanner />}
    </div>
  );
}

