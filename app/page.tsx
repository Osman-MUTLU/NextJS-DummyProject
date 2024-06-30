"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div className='font-semibold text-green-500'>
      hello
      <Button onClick={()=> signIn()}>hello</Button>
    </div>
  )
}
