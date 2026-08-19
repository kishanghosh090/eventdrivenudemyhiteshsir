import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSignUp } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SignUp() {
  const { signUp, fetchStatus } = useSignUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState("");
  const router = useRouter();
  if (fetchStatus == "fetching") {
    return null;
  }

  async function submit(e: React.SubmitEvent) {
    e.preventDefault();
    if (fetchStatus == "fetching") {
      return;
    }

    try {
      await signUp.create({
        emailAddress: email,
        password: password,
      });

      await signUp.verifications.sendEmailCode();
      setPendingVerification(true);
    } catch (error: any) {
      console.log(error);
      setError(error.errors[0].message);
    }
  }

  async function onPressVerify(e: React.SubmitEvent) {
    e.preventDefault();
    if (fetchStatus == "fetching") {
      return;
    }
    try {
      const completeSignUp = await signUp.verifications.verifyEmailCode({
        code,
      });
      if (completeSignUp.error) {
        throw new Error(completeSignUp.error.message);
      }

      if (signUp.status === "complete") {
        await signUp.finalize({
          navigate: ({ session, decorateUrl }) => {
            if (session?.currentTask) {
              console.log(session?.currentTask);
              return;
            }

            const url = decorateUrl("/dashboard");
            if (url.startsWith("http")) {
              window.location.href = url;
            } else {
              router.push(url);
            }
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  return;
}
