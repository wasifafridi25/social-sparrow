import { db, storage } from "@/firebase";
import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";

export default function TweetInput() {
  const [text, setText] = useState("");
  const user = useSelector((state) => state.user);

  const sendTweet = async () => {
    const docRef = await addDoc(collection(db, "posts"), {
      username: user.username,
      name: user.name,
      uid: user.uid,
      photoUrl: user.photoUrl,
      timestamp: serverTimestamp(),
      likes: [],
      tweet: text,
    });

    if (image) {
      const imageRef = ref(storage, `tweetImages/${docRef.id}`);
      const uploadImage = await uploadString(imageRef, image, 'data_url');
      const downloadURL = await getDownloadURL(imageRef);

      await updateDoc(doc(db, 'posts', docRef.id), {
        image: downloadURL
      })
    }



    setText("")
    setImage(null)
  };

  const [image, setImage] = useState(null);
  const filePickerRef = useRef(null);

  const addImageToTweet = (e) => {
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }

    reader.addEventListener('load', (e) => {
      setImage(e.target.result)
    })
  }

  return (
    <div className="p-3 flex space-x-3 w-full border-gray-700 border-b">
      <div>
        <img
          src={user?.photoUrl || '/assets/twitter-new-logo-dark-mode.png'}
          width={30}
          height={30}
          className="rounded-full object-cover"
        />
      </div>
      <div className="w-full">
        <div>
          <textarea
          value={text}
            onChange={(e) => setText(e.target.value)}
            className="bg-transparent resize-none outline-none w-full min-h-[50px] text-lg"
            placeholder="What's on your mind?"
          />
        </div>

        {image && (
          <div className="mb-4 relative">
            <div onClick={() => setImage(null)} className="absolute bg-[#272c26] left-1 top-1 flex justify-center items-center w-8 h-8 rounded-full
            cursor-pointer hover:bg-white hover:bg-opacity-10 hover:text-black hover:border-2 hover:border-black">
                <XIcon className="h-5"/>
            </div>
            <img src={image} className="rounded-xl max-h-80 object-contain" />
          </div>
        )}

        <div className="flex justify-between w-full border-gray-700 border-t pt-4">
          <div className="flex">
            {/* //Icons */}
            <div onClick={() => filePickerRef.current.click()} className="iconAnimation">
              <PhotographIcon className="h-[22px] text-[#1d9bf0] hover:text-blue-700" />
            </div>
            <input onChange={addImageToTweet} ref={filePickerRef} type="file" className="hidden" />
            <div className="iconAnimation">
              <ChartBarIcon className="h-[22px] text-[#1d9bf0] hover:text-blue-700 cursor-not-allowed" />
            </div>
            <div className="iconAnimation">
              <EmojiHappyIcon className="h-[22px] text-[#1d9bf0] hover:text-blue-700 cursor-not-allowed" />
            </div>
            <div className="iconAnimation">
              <CalendarIcon className="h-[22px] text-[#1d9bf0] hover:text-blue-700 cursor-not-allowed" />
            </div>
            <div className="iconAnimation">
              <LocationMarkerIcon className="h-[22px] text-[#1d9bf0] hover:text-blue-700 cursor-not-allowed" />
            </div>
          </div>
          <div>
            <button
              onClick={sendTweet}
              disabled={!user.username || (!text && !image)}
              className="bg-[#1d9bf0] px-4 py-1.5 rounded-full disabled:opacity-50"
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
