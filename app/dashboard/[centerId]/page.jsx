"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { collection, getDocs, getDoc, doc } from "@firebase/firestore";
import { db } from "../../../config/firebase";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import { EditDiagnostic } from "../../../components/EditDiagnostic";

const Centers = () => {
  const [tests, setTests] = useState([]);
  const [center, setCenter] = useState(null);
  const params = useParams();
  const centerId = params.centerId;

  const getCentre = async (params) => {
    const centerdata = await getDoc(doc(db, "Diagnostics", centerId));

    const data = centerdata.data();
    setCenter(data);
  };

  useEffect(() => {
    getCentre();
  }, []);

  console.log(center);

  const getAllTests = async (centerId) => {
    const data = await getDocs(collection(db, `Diagnostics/${centerId}/tests`));

    setTests((prevTests) => data.docs.map((c) => ({ id: c.id, ...c.data() })));
  };

  useEffect(() => {
    getAllTests(centerId);
  }, []);

  return (
    <div className="w-full h-auto px-8 mt-10">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-4xl font-semibold">{center && center.name}</h1>
        <div className="flex items-center space-x-5">
          <EditDiagnostic center={center} centerId={centerId} />
          <Link href={`/dashboard/${centerId}/addTest`} passHref>
            <Button p={4} m={2}>
              ADD NEW SERVICE
            </Button>
          </Link>
        </div>
      </div>

      <p className="mt-5 text-lg">
        Diagnostic Tests/ Services : ({tests.length}){" "}
      </p>

      <DataTable columns={columns} data={tests} />
    </div>
  );
};

export default Centers;
