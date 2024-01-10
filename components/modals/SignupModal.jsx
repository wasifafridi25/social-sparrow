import { auth } from "@/firebase";
import { closeSignupModal, openSignupModal } from "@/redux/modalSlice";
import { setUser } from "@/redux/userSlice";
import Modal from "@mui/material/Modal";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SignupModal() {
  const isOpen = useSelector((state) => state.modals.signupModalOpen);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const router = useRouter()

  async function handleSignup() {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: `/assets/profilePictures/pfp${Math.ceil(Math.random() * 6)}.png`
    })

    router.reload()

    dispatch(closeSignupModal())
  }

  const handleGuestLogin = async() => {
    await signInWithEmailAndPassword(auth, 'guest25251413@gmail.com', '123456');
    dispatch(closeSignupModal())
  }

  const handleKeyPress = (event) => {
    // Check if the pressed key is Enter (keyCode 13)
    if (event.key === 'Enter') {
      // Trigger the same action as the button click
      handleSignup()
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) return;

      dispatch(
        setUser({
          username: currentUser?.email?.split("@")[0],
          name: currentUser?.displayName,
          email: currentUser?.email,
          uid: currentUser?.uid,
          photoUrl: currentUser?.photoURL,
        })
      );
    });

    return unsubscribe;
  }, []);

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
            <button onClick={handleGuestLogin} className="bg-white text-black rounded-md w-full p-2 font-bold mb-2">
              Sign In as Guest
            </button>
            <span className="flex justify-center mb-2 font-bold text-lg">
              or
            </span>
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl mb-8">
              Create your account
            </h1>
            <input
            onChange={e => setName(e.target.value)}
              type="text"
              placeholder="Full Name"
              className="h-10 p-6 bg-transparent border border-gray-700 w-full rounded-md mb-8 focus:outline-none"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="h-10 p-6 bg-transparent border border-gray-700 w-full rounded-md mb-8 focus:outline-none"
            />
            <input
            onKeyDown={handleKeyPress}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="h-10 p-6 bg-transparent border border-gray-700 w-full rounded-md mb-8 focus:outline-none"
            />
            <button
              onClick={handleSignup}
              className="bg-white text-black rounded-md w-full p-2 font-bold mb-8 md:mb-0"
            >
              Create account
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
