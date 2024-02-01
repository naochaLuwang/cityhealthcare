"use client";
import Image from "next/image";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const Navbar = () => {
  return (
    <>
      <Toaster />
      <div className="flex items-center justify-between w-full h-auto px-8 py-3 shadow-sm">
        <Link href="/dashboard">
          <Image
            src="/logo.png"
            width={120}
            height={60}
            objectFit="fill"
            alt="logo"
          />
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger className="mr-10">
            <Button variant="outline">Open</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem onClick={() => signOut(auth)}>
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default Navbar;
