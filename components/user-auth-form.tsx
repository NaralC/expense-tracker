"use client";

import { signIn } from "next-auth/react";
import { FC, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

interface UserAuthFormProps {}

const UserAuthForm: FC<UserAuthFormProps> = ({}) => {
  const [isLoading, setIsLoading] = useState(false);

  const loginWithGitHub = async () => {
    setIsLoading(true);

    try {
      signIn("github");
    } catch (error) {
      toast.success("Successfully toasted!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <button className="bg-gray-300">Google</button>
    </div>
  );
};

export default UserAuthForm;
