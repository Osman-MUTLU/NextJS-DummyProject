import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="h-[100vh] w-full flex justify-center items-center">
      <div className="container flex h-screen w-screen flex-col items-center justify-center">
        {/* Go BACK Navigation Button */}
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "absolute left-4 top-4 md:left-8 md:top-8"
          )}
        >
          Back
        </Link>
        {/* Form Card */}
        <div className="bg-white/25 backdrop-blur-lg drop-shadow-md rounded-3xl border border-white/20 px-12 py-16 flex max-h-[80vh] max-w-lg w-full sm:w-fit flex-col justify-center items-center overflow-y-auto">
          {children}
        </div>
        <div className="absolute bottom-0 pb-4 px-4 flex gap-2 text-sm sm:text-base font-medium text-white">
          <Link
            href="#"
            className="hover:text-gray-300 ease-linear duration-100"
          >
            Terms of Use
          </Link>
          <span>·</span>
          <Link
            href="#"
            className="hover:text-gray-300 ease-linear duration-100"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </main>
  );
}
