"use client";

import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export function AuthComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const auth = getAuth();
  const [signInWithEmailAndPasswod] = useSignInWithEmailAndPassword(auth);

  //   const handleRegistration = async (email, password) => {
  //     try {
  //       // Register user with email and password
  //       const userCredential = await createUserWithEmailAndPassword(
  //         auth,
  //         email,
  //         password
  //       );

  //       // Get user ID
  //       const userId = userCredential.user.uid;

  //       console.log(userId);

  //       await setDoc(doc(db, "Users", userId), {
  //         userId: userId,
  //         email: email,
  //       });

  //       // Other registration logic (redirect, etc.)
  //     } catch (error) {
  //       console.error("Registration failed:", error.message);
  //     }
  //   };

  const handleSignIn = async () => {
    try {
      const res = signInWithEmailAndPasswod(email, password);
      console.log({ res });
      toast.success("Signed In");

      router.push("/dashboard");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Sign In</CardTitle>
        <CardDescription>
          Welcome back! Sign in to your account below.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="yourname@gmail.com"
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="************"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleSignIn}>
          Sign In
        </Button>
      </CardFooter>
    </Card>
  );
}
