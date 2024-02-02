"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState } from "react";
import { useCentreContext } from "../Provider/Context/Centre.context";

const AddDiagnostic = () => {
  const [name, setName] = useState("");

  const [address, setAddress] = useState("");
  const [hours, setHours] = useState("");

  const { addDiagnosticCentre } = useCentreContext();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    await addDiagnosticCentre(name, address, hours);

    setName("");
    setAddress("");
    setHours("");
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Centre</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Diagnostic Centre</DialogTitle>
          <DialogDescription>Add a new diagnostic centre</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col space-y-4">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Enter diagnostic name"
            className="col-span-4"
            onChange={(e) => setName(e.target.value)}
          />

          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            className="col-span-4"
            onChange={(e) => setAddress(e.target.value)}
          />
          {/* <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            className="col-span-4"
            onChange={(e) => setPhone(e.target.value)}
          /> */}
          {/* <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            className="col-span-4"
            onChange={(e) => setEmail(e.target.value)}
          /> */}
          <Label htmlFor="hours">Opening hours</Label>
          <Input
            id="hours"
            className="col-span-4"
            onChange={(e) => setHours(e.target.value)}
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={onSubmitHandler}>Create</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddDiagnostic;
