import {
  closeLoginModal,
  openLoginModal,
} from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";

export default function SignupModal() {
  const isOpen = useSelector((state) => state.modals.loginModalOpen);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        className="border-white border w-[160px] h-[40px] text-white bg-transparent rounded-full hover:bg-[#cbd2d7]"
        onClick={() => dispatch(openLoginModal())}
      >
        Log In
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeLoginModal())}
        className="flex justify-center items-center"
      >
        <div
          className="w-[90%] h-fit bg-black text-white md:w-[470px] md:h-[520px] 
        border border-blue-900 rounded-lg flex justify-center"
        >
          <div className="w-[85%] mt-8 md:mt-10">
            
            
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl mb-8">
              Sign in to your account
            </h1>
            
            <input
              type="email"
              placeholder="Email"
              className="h-10 p-6 bg-transparent border border-gray-700 w-full rounded-md mb-8 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="h-10 p-6 bg-transparent border border-gray-700 w-full rounded-md mb-8 focus:outline-none"
            />
            <button className="bg-white text-black rounded-md w-full p-2 font-bold mb-4">
              Sign In
            </button>
            <span className="flex justify-center mb-8 font-bold text-lg">
              or
            </span>
            <button className="bg-white text-black rounded-md w-full p-2 font-bold mb-10 md:mb-0">
              Sign In as Guest
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
