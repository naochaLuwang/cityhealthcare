"use client";
import { useCentreContext } from "../Provider/Context/Centre.context";
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { MdOutlineLocationCity } from "react-icons/md";
import { BsPhoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiRescuetime } from "react-icons/si";

const AllDiagnostics = () => {
  const { diagnostics } = useCentreContext();
  console.log(diagnostics);

  return (
    <div className="grid w-full h-auto grid-cols-3 gap-6 mt-10">
      {diagnostics.map((diagnostic) => (
        <Card key={diagnostic.id}>
          <CardHeader>
            <CardTitle>
              <p className="text-2xl">{diagnostic.name}</p>
              <div className="flex items-center w-full mt-2 space-x-2">
                <MdOutlineLocationCity className="w-6 h-6 text-blue-700" />
                <p className="font-normal">{diagnostic.address}</p>
              </div>

              <div className="flex items-center w-full mt-2 space-x-2">
                <SiRescuetime className="w-6 h-6 text-blue-700" />
                <p className="font-normal">{diagnostic.hours}</p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardFooter>
            <Link href={`/dashboard/${diagnostic.id}`} passHref>
              <Button p={4} m={2}>
                View Diagnostic Test/ Services
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default AllDiagnostics;
