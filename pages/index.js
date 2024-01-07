import BottomBanner from "@/components/BottomBanner";
import PostsFeed from "@/components/PostsFeed";
import Sidebar from "@/components/Sidebar";
import Trending from "@/components/Trending";

export default function Home() {
  return (
    <div>
      <div className="flex custom__bg-color min-h-screen text-[#E7E9EA] max-w-[1400px] mx-auto">
        <Sidebar />
        <PostsFeed />
        <Trending /> 
        
      </div>

      <BottomBanner />
    </div>
  );
}

