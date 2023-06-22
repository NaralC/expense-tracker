import SignIn from "@/components/sign-in";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

const Page: FC = () => {
  return (
    <div className="absolute inset-0">
      <div className="flex flex-col items-center justify-center h-full max-w-2xl mx-auto">
        <SignIn />
      </div>
    </div>
  );
}

export default Page;
