"use client";

import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const { createContext, useContext } = require("react");

export const CentreContext = createContext();
import { v4 as uuid } from "uuid";

export const useCentreContext = () => {
  return useContext(CentreContext);
};

export const CentreProvider = ({ children }) => {
  const [diagnostics, setDiagnostics] = useState([]);
  const router = useRouter();

  const getAllDiagnosticCentres = async () => {
    const data = await getDocs(collection(db, "Diagnostics"));

    setDiagnostics((prevDiagnostics) =>
      data.docs.map((c) => ({ id: c.id, ...c.data() }))
    );
  };

  const addDiagnosticCentre = async (name, address, hours) => {
    if ((name !== "" && address !== "") || hours !== "") {
      await setDoc(doc(db, "Diagnostics", uuid()), {
        name: name,
        address: address,

        hours: hours,
        status: "ACTIVE",
      });

      toast.success("Centre created successfully");
      await getAllDiagnosticCentres();
    } else {
      toast.error("Please enter all the rrquired fields");
    }
  };

  useEffect(() => {
    getAllDiagnosticCentres();
  }, []);

  const addTest = async (
    serviceName,
    servicePrice,
    sampleType,
    vial,
    serviceDepartment,
    fastingRequired,
    description,
    centerId
  ) => {
    setDoc(doc(db, `Diagnostics/${centerId}/tests`, uuid()), {
      serviceName: serviceName,
      servicePrice: servicePrice,
      sampleType: sampleType,
      vial: vial,
      serviceDepartment: serviceDepartment,
      fastingRequired: fastingRequired,
      description: description,
      status: "ACTIVE",
    });

    toast.success("Service added successfuly");
    router.push(`/dashboard/${centerId}`);
  };

  return (
    <CentreContext.Provider
      value={{ addDiagnosticCentre, diagnostics, addTest }}
    >
      {children}
    </CentreContext.Provider>
  );
};
