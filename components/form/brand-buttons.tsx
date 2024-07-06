"use client";

import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";

const BrandButtons = () => {
  return (
    <div className="flex gap-4">
      <Button
        className={cn(
          buttonVariants({ variant: "secondary" }),
          "w-full gap-2"
        )}
        onClick={() => signIn("google")}
        type="button"
      >
        <FcGoogle />
        Google
      </Button>
      <Button
        className={cn(
          buttonVariants({ variant: "secondary" }),
          "w-full gap-2"
        )}
      >
        <FaGithub />
        Github
      </Button>
    </div>
  );
};

export default BrandButtons;
