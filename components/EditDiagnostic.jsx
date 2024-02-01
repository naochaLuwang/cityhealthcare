"use client";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export function EditDiagnostic({ center, centerId }) {
  const [name, setName] = useState(center && center.name);
  const [address, setAddress] = useState(center && center.address);

  const [hours, setHours] = useState(center && center.hours);

  const updateDiagnostic = async (center) => {
    await updateDoc(doc(db, "Diagnostics", centerId), {
      name: name,
      address: address,

      hours: hours,
    });
  };

  console.log(name, address, hours);
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>EDIT DIAGNOSTIC CENTRE</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="w-full mx-auto max-w-7xl">
          <DrawerHeader>
            <DrawerTitle>Edit Diagnostic Centre</DrawerTitle>
            {/* <DrawerDescription>Set your daily activity goal.</DrawerDescription> */}
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="grid w-full h-auto grid-cols-1 gap-6">
              <div className="flex flex-col space-y-4">
                <Label>Name</Label>
                <Input
                  defaultValue={center && center.name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-4">
                <Label>Address</Label>
                <Input
                  defaultValue={center && center.address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className="flex flex-col space-y-4">
                <Label>Opening hours</Label>
                <Input
                  defaultValue={center && center.hours}
                  onChange={(e) => setHours(e.target.value)}
                />
              </div>
            </div>
          </div>
          <DrawerFooter>
            <Button onClick={updateDiagnostic}>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
