"use client";
import { useCentreContext } from "../../Provider/Context/Centre.context";
import AddDiagnostic from "../../components/AddDiagnostic";
import AllDiagnostics from "../../components/AllDiagnostics";

const Dashboard = () => {
  const { diagnostics } = useCentreContext();

  return (
    <div className="w-full h-auto">
      <div className="flex items-center justify-between w-full px-8 mt-5">
        <h1 className="text-5xl font-bold">Dashboard</h1>
        <AddDiagnostic />
      </div>

      <div className="px-8">{diagnostics.length > 0 && <AllDiagnostics />}</div>
    </div>
  );
};

export default Dashboard;
