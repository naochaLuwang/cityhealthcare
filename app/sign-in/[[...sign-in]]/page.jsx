import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-[50%] h-auto bg-gray-800">
        <div className="flex items-center px-10 py-8 space-x-5">
          <Image src="/login.png" width={28} height={28} alt="login logo" />
          <h1 className="text-2xl font-medium text-white">City Health Care</h1>
        </div>
      </div>
      <div className="flex items-center justify-center w-[50%] h-auto">
        <SignIn />
      </div>
    </div>
  );
}
