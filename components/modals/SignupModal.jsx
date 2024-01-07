import { closeSignupModal, openSignupModal } from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";

export default function SignupModal() {
  const isOpen = useSelector((state) => state.modals.signupModalOpen);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        className="w-[160px] h-[40px] bg-white text-black rounded-full hover:bg-[#cbd2d7]"
        onClick={() => dispatch(openSignupModal())}
      >
        Sign Up
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignupModal())}
        className="flex justify-center items-center"
      >
        <div
          className="w-[90%] h-fit bg-black text-white md:w-[470px] md:h-[520px] 
        border border-blue-900 rounded-lg flex justify-center"
        >
          <div className="w-[85%] mt-8 md:mt-10">
            <button className="bg-white text-black rounded-md w-full p-2 font-bold mb-2">
              Sign In as Guest
            </button>
            <span className="flex justify-center mb-2 font-bold text-lg">or</span>
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl mb-8">Create your account</h1>
            <input
              type="text"
              placeholder="Full Name"
              className="h-10 p-6 bg-transparent border border-gray-700 w-full rounded-md mb-8 focus:outline-none"
            />
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
            <button className="bg-white text-black rounded-md w-full p-2 font-bold mb-8 md:mb-0">
              Create account
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
