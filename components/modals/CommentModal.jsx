import { db } from "@/firebase";
import { closeCommentModal } from "@/redux/modalSlice";
import { CalendarIcon, ChartBarIcon, EmojiHappyIcon, LocationMarkerIcon, PhotographIcon, XIcon } from "@heroicons/react/outline";
import Modal from "@mui/material/Modal";
import { arrayUnion, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CommentModal() {
  const isOpen = useSelector((state) => state.modals.commentModalOpen);
  const dispatch = useDispatch();
  const tweetComment = useSelector(state => state.modals.commentTweetDetails);
  const user = useSelector(state => state.user)

  const [comment, setComment] = useState("")
  const router = useRouter()

  const sendComment = async() => {
    const docRef = doc(db, 'posts', tweetComment.id)
    const commentDetails = {
        username: user.username,
        name: user.name,
        photoUrl: user.photoUrl,
        comment: comment,
    }
    await updateDoc(docRef, {
        comment: arrayUnion(commentDetails) //In firebase if you wanna add to elements to an array use arrayUnion
    })
    setComment("")
    dispatch(closeCommentModal())
    router.push("/" + tweetComment.id)

  }
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeCommentModal())}
        className="flex justify-center items-center"
      >
        <div className="relative p-10 sm:p-16 w-full h-full sm:w-[600px] sm:h-[386px] rounded-lg bg-black text-white border border-blue-900">
          <div className=" absolute w-[2px] h-[41px] bg-gray-500 left-[65px] top-[88px] sm:left-[88px] sm:top-[113px]"></div>
          <div onClick={() => dispatch(closeCommentModal())}>
            <XIcon className="w-6 absolute top-1 sm:top-4 cursor-pointer"/>
          </div>
          <div className="flex space-x-3">
            <img
              src={tweetComment.photoUrl}
              alt="User's profile pic"
              className="w-12 h-12 object-cover rounded-full"
            />
            <div>
              <div className="flex space-x-1.5">
                <h1 className="font-bold">{tweetComment.name}</h1>
                <h1 className="text-gray-500">@{tweetComment.username}</h1>
              </div>
              <p className="mt-1">{tweetComment.tweet}</p>
              <h1 className="text-gray-500 text-[15px] mt-2">
                Replying to <span className="text-[#1b9bf0]">@{tweetComment.username}</span>
              </h1>
            </div>
          </div>

          <div className="flex space-x-3 mt-2">
            <img
              src={user.photoUrl}
              alt="User's profile pic"
              className="w-12 h-12 object-cover rounded-full"
            />
            <div className="w-full">
              <textarea
              value={comment}
              onChange={e => setComment(e.target.value)}
                className="bg-transparent resize-none outline-none w-full"
                placeholder="Post your Reply"
              />
              <div className="flex justify-between border-t border-gray-500 pt-4">
                <div className="flex">
                  {/* //Icons */}
                  <div className="iconAnimation">
                    <PhotographIcon className="h-[22px] text-[#1d9bf0] hover:text-blue-700" />
                  </div>
                  <div className="iconAnimation">
                    <ChartBarIcon className="h-[22px] text-[#1d9bf0] hover:text-blue-700" />
                  </div>
                  <div className="iconAnimation">
                    <EmojiHappyIcon className="h-[22px] text-[#1d9bf0] hover:text-blue-700" />
                  </div>
                  <div className="iconAnimation">
                    <CalendarIcon className="h-[22px] text-[#1d9bf0] hover:text-blue-700" />
                  </div>
                  <div className="iconAnimation">
                    <LocationMarkerIcon className="h-[22px] text-[#1d9bf0] hover:text-blue-700" />
                  </div>
                </div>
                <button onClick={sendComment} disabled={!comment} className="bg-[#1d9bf0] px-4 py-1.5 rounded-full disabled:opacity-50">Tweet</button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
