import LoginModal from "./modals/LoginModal";
import SignupModal from "./modals/SignupModal";

export default function BottomBanner() {
  return (
    <div className="flex justify-center items-center py-3 md:space-x-[200px] fixed bottom-0 bg-[#1d9bf0] w-full h-[80px]">
      
      <div className="text-white hidden xl:flex flex-col">
        <h1 className="font-bold text-2xl">Don't miss what's happening</h1>
        <h2 className="text-[18px]">people on Twitter are the first to know.</h2>
      </div>

      <div className="flex space-x-4">
        <LoginModal />
        <SignupModal />
      </div>
    </div>
  );
}
