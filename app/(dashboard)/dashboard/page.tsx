"use client";

import Link from "next/link";



import { useSession } from "next-auth/react";

export default function DashboardPage() {
  const { data } = useSession();

  return (
    
      <>asd</>
  );
}
