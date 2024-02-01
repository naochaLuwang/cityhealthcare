"use client";
import Image from "next/image";
import { AuthComponent } from "../components/AuthComponent";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  if (user) {
    router.push("/dashboard");
  }
  return (
    <>
      {!user && (
        <div className="flex w-full h-screen">
          <div className="w-[50%] h-full bg-gray-700 flex flex-col px-5 py-8">
            <div className="flex items-center space-x-5">
              <Image src="/login.png" alt="Login logo" height={24} width={24} />
              <h1 className="font-sans text-3xl font-medium text-white text">
                City Health Care
              </h1>
            </div>
          </div>
          <div className="w-[50%] h-full flex flex-col items-center justify-center ">
            <AuthComponent />
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;
