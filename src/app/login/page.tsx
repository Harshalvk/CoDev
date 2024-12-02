"use client";
import { signIn } from "next-auth/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function SignIn() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <div>
            <span className="text-[14px]">Email</span>
            <Input type="email" placeholder="me@example.com" />
          </div>
          <div>
            <span className="text-[14px]">Password</span>
            <Input type="password" />
          </div>
          <Button className="w-full mt-2">Create account</Button>
          <Separator className="max-w-80 self-center my-2" />
          <div className="flex w-full items-center gap-2">
            <Button
              variant={"outline"}
              className="flex-1"
              onClick={() => signIn("github", { redirectTo: "/" })}
            >
              <Github height={28} width={28} />
              <span className="font-semibold tracking-tight">GitHub</span>
            </Button>
            <Button
              variant={"outline"}
              className="flex-1"
              onClick={() => signIn("google", { redirectTo: "/" })}
            >
              <span className="text-xl">G</span>
              <span className="font-semibold tracking-tight">Google</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
