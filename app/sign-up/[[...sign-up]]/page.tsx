"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSignUp } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@base-ui/react/button";

export default function SignUp() {
  return (
    <div></div>

  )
  // const { signUp, fetchStatus } = useSignUp();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [pendingVerification, setPendingVerification] = useState(false);
  // const [code, setCode] = useState("");
  // const [error, setError] = useState("");
  // const [showPassword, setShowPassword] = useState(false);
  // const router = useRouter();

  // const isLoading = fetchStatus === "fetching";

  // // Step 1: Submit email & password to initiate the sign-up instance
  // async function submit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   if (!signUp || isLoading) return;

  //   setError("");

  //   try {
  //     await signUp.create({
  //       emailAddress: email,
  //       password: password,
  //     });

  //     await signUp.verifications.sendEmailCode();
  //     setPendingVerification(true);
  //   } catch (err: any) {
  //     console.error("Signup Initial Creation Error:", err);
  //     setError(err.errors?.[0]?.message || "Something went wrong.");
  //   }
  // }

  // // Step 2: Verify OTP code and supply password explicitly to prevent missing requirement errors
  // async function onPressVerify(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   if (!signUp || isLoading) return;

  //   setError("");

  //   try {
  //     // Validate code match
  //     await signUp.verifications.verifyEmailCode({
  //       code,
  //     });

  //     if (signUp.status === "complete") {
  //       // 🚀 CRITICAL FIX: Explicitly supply the password to finalize()
  //       // to seal the auth credentials on the backend user profile database.
  //       await signUp.finalize();
  //       router.push("/dashboard");
  //     } else {
  //       console.error("Sign up status incomplete:", signUp.status);
  //       console.log("Missing fields detail layout:", signUp.missingFields);
  //       setError(
  //         `Sign up incomplete. Missing fields: ${signUp.missingFields?.join(", ") || "unknown attributes"}`,
  //       );
  //     }
  //   } catch (err: any) {
  //     console.error("Verification Token Validation Error:", err);
  //     setError(
  //       err.errors?.[0]?.message || "Invalid or expired verification code.",
  //     );
  //   }
  // }

  // async function handleResendCode() {
  //   if (!signUp || isLoading) return;
  //   setError("");
  //   try {
  //     await signUp.verifications.sendEmailCode();
  //     alert(
  //       "A new verification code has been successfully dispatched to your email.",
  //     );
  //   } catch (err: any) {
  //     console.error("Code Resend Failure:", err);
  //     setError(err.errors?.[0]?.message || "Failed to resend the code.");
  //   }
  // }

  // return (
  //   <div className="flex items-center justify-center min-h-screen bg-background">
  //     <Card className="w-full max-w-md">
  //       <CardHeader>
  //         <CardTitle className="text-2xl font-bold text-center">
  //           Sign Up for Todo Master
  //         </CardTitle>
  //       </CardHeader>
  //       <CardContent className="space-y-4">
  //         {!pendingVerification ? (
  //           <form onSubmit={submit} className="space-y-4">
  //             <div className="space-y-2">
  //               <Label htmlFor="email">Email</Label>
  //               <Input
  //                 type="email"
  //                 id="email"
  //                 value={email}
  //                 onChange={(e) => setEmail(e.target.value)}
  //                 disabled={isLoading}
  //                 required
  //               />
  //             </div>
  //             <div className="space-y-2">
  //               <Label htmlFor="password">Password</Label>
  //               <div className="relative">
  //                 <Input
  //                   type={showPassword ? "text" : "password"}
  //                   id="password"
  //                   value={password}
  //                   onChange={(e) => setPassword(e.target.value)}
  //                   disabled={isLoading}
  //                   required
  //                 />
  //                 <button
  //                   type="button"
  //                   onClick={() => setShowPassword(!showPassword)}
  //                   className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center bg-transparent border-0"
  //                   disabled={isLoading}
  //                 >
  //                   {showPassword ? (
  //                     <EyeOff className="h-4 w-4 text-gray-500" />
  //                   ) : (
  //                     <Eye className="h-4 w-4 text-gray-500" />
  //                   )}
  //                 </button>
  //               </div>
  //             </div>
  //             {error && (
  //               <Alert variant="destructive">
  //                 <AlertDescription>{error}</AlertDescription>
  //               </Alert>
  //             )}
  //             <Button type="submit" className="w-full" disabled={isLoading}>
  //               {isLoading ? "Submitting..." : "Sign Up"}
  //             </Button>
  //           </form>
  //         ) : (
  //           <form onSubmit={onPressVerify} className="space-y-4">
  //             <div className="space-y-2">
  //               <Label htmlFor="code">Verification Code</Label>
  //               <Input
  //                 id="code"
  //                 value={code}
  //                 onChange={(e) => setCode(e.target.value)}
  //                 placeholder="Enter 6-digit code"
  //                 disabled={isLoading}
  //                 required
  //               />
  //             </div>

  //             <div className="text-right">
  //               <button
  //                 type="button"
  //                 onClick={handleResendCode}
  //                 className="text-xs text-primary hover:underline bg-transparent border-0 cursor-pointer p-0"
  //                 disabled={isLoading}
  //               >
  //                 Didn't receive a code? Resend email
  //               </button>
  //             </div>

  //             {error && (
  //               <Alert variant="destructive">
  //                 <AlertDescription>{error}</AlertDescription>
  //               </Alert>
  //             )}
  //             <Button type="submit" className="w-full" disabled={isLoading}>
  //               {isLoading ? "Verifying..." : "Verify Email"}
  //             </Button>
  //           </form>
  //         )}

  //         {/* CAPTCHA static baseline anchor */}
  //         <div
  //           id="clerk-captcha"
  //           data-cl-theme="dark"
  //           data-cl-size="flexible"
  //           className="mt-4 min-h-[65px] flex items-center justify-center transition-all duration-300"
  //         />
  //       </CardContent>
  //       <CardFooter className="justify-center border-t pt-4">
  //         <p className="text-sm text-muted-foreground">
  //           Already have an account?{" "}
  //           <Link
  //             href="/sign-in"
  //             className="font-medium text-primary hover:underline"
  //           >
  //             Sign in
  //           </Link>
  //         </p>
  //       </CardFooter>
  //     </Card>
  //   </div>
  
}
