import Image from "next/image";

export default function TweetInput() {
  return (
    <div className="p-3 flex space-x-3 w-full border-gray-700 border-b">
      <div>
        <Image
          src={"/assets/person-1.jpg"}
          width={30}
          height={30}
          className="rounded-full object-cover"
        />
      </div>
      <div>
        <textarea
          className="bg-transparent resize-none outline-none w-full min-h-[50px] text-lg"
          placeholder="What's on your mind?"
        />
      </div>
    </div>
  );
}
