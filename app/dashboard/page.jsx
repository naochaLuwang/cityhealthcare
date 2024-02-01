"use client";
import { useCentreContext } from "../../Provider/Context/Centre.context";
import AddDiagnostic from "../../components/AddDiagnostic";
import AllDiagnostics from "../../components/AllDiagnostics";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  if (!user) {
    router.push("/");
  }

  const { diagnostics } = useCentreContext();

  return (
    <div className="w-full h-screen ">
      {user && (
        <>
          <Navbar />
          <div className="flex items-center justify-between w-full px-8 mt-5">
            <h1 className="text-5xl font-bold">Dashboard</h1>
            <AddDiagnostic />
          </div>

          <div className="px-8">
            {diagnostics.length > 0 && <AllDiagnostics />}
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
