"use client";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { useParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

import { Textarea } from "../../../../components/ui/textarea";
import { Button } from "../../../../components/ui/button";
import { useState } from "react";
import { useCentreContext } from "../../../../Provider/Context/Centre.context";

const AddTest = () => {
  const params = useParams();
  const centerId = params.centerId;

  const [serviceName, setServiceName] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [serviceDepartment, setServiceDepartment] = useState("");
  const [sampleType, setSampleType] = useState("");
  const [vial, setVial] = useState("");
  const [fastingRequired, setFastingRequired] = useState("no");
  const [description, setDescription] = useState("");

  const { addTest } = useCentreContext();

  console.log(
    serviceName,
    servicePrice,
    serviceDepartment,
    fastingRequired,
    description
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addTest(
      serviceName,
      servicePrice,
      sampleType,
      vial,
      serviceDepartment,
      fastingRequired,
      description,
      centerId
    );
  };

  return (
    <div className="w-full px-10">
      <h1 className="mt-10 text-2xl font-bold">Add New Test/Service </h1>

      <div className="flex flex-col w-full mt-10 space-y-5">
        <div className="flex flex-col w-full max-w-5xl space-y-4">
          <Label htmlFor="serviceName">Service Name</Label>
          <Input
            id="serviceName"
            className="col-span-8"
            onChange={(e) => setServiceName(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full max-w-5xl space-y-4">
          <Label htmlFor="servicePrice">Service Price</Label>
          <Input
            id="servicePrice"
            className="col-span-8"
            onChange={(e) => setServicePrice(e.target.value)}
          />
        </div>

        <div className="flex items-center space-x-5">
          <div className="flex flex-col space-y-3">
            <Label>Sample Type</Label>
            <Select onValueChange={(value) => setSampleType(value)}>
              <SelectTrigger className="w-[250px]">
                <SelectValue placeholder="Select Sample Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="plasma">PLASMA</SelectItem>
                <SelectItem value="serum">SERUM</SelectItem>
                <SelectItem value="whole blood">WHOLE BLOOD</SelectItem>
                <SelectItem value="urine">URINE</SelectItem>
                <SelectItem value="stool">STOOL</SelectItem>
                <SelectItem value="semen">SEMEN</SelectItem>
                <SelectItem value="throat swab">THROAT SWAB</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col space-y-3">
            <Label>Vial</Label>
            <Select onValueChange={(value) => setVial(value)}>
              <SelectTrigger className="w-[250px]">
                <SelectValue placeholder="Select Vial" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="plane vial (red)">
                  PLANE VIAL (RED)
                </SelectItem>
                <SelectItem value="edta (purple)">EDTA (PURPLE)</SelectItem>
                <SelectItem value="fluoride (grey)">FLUORIDE (GREY)</SelectItem>
                <SelectItem value="sodium citrate (blue)">
                  SODIUM CITRATE (BLUE)
                </SelectItem>
                <SelectItem value="sodium heparin (green)">
                  SODIUM HEPARIN (GREEN)
                </SelectItem>
                <SelectItem value="sodium lithium (green)">
                  SODIUM LITHIUM (GREEN)
                </SelectItem>
                <SelectItem value="urine container">URINE CONTAINER</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col space-y-4">
            <Label>Service Department</Label>
            <Select onValueChange={(value) => setServiceDepartment(value)}>
              <SelectTrigger className="w-[250px]">
                <SelectValue placeholder="Select Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="laboratory">LABORATORY</SelectItem>
                <SelectItem value="radiology">RADIOLOGY</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col space-y-3">
            <Label>Fasting Required</Label>
            <Select
              onValueChange={(value) => setFastingRequired(value)}
              defaultValue="no"
            >
              <SelectTrigger className="w-[210px]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">YES</SelectItem>
                <SelectItem value="no">NO</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col w-full max-w-5xl space-y-4">
          <Label htmlFor="description">Description</Label>
          <Textarea
            rows={10}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <Button className="max-w-5xl" onClick={handleSubmit}>
          Create Service
        </Button>
      </div>
    </div>
  );
};

export default AddTest;
