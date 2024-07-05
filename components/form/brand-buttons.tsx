import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const BrandButtons = () => {
  return (
    <div className="flex gap-4">
      <Button
        className={cn(
          buttonVariants({ variant: "secondary" }),
          "w-full color-primary gap-2"
        )}
      >
        <FcGoogle />
        Google
      </Button>
      <Button
        className={cn(
          buttonVariants({ variant: "secondary" }),
          "w-full color-primary gap-2"
        )}
      >
        <FaGithub />
        Github
      </Button>
    </div>
  );
};

export default BrandButtons;
