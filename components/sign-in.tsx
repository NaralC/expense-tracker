import Link from "next/link";
import { FC } from "react";
import UserAuthForm from "./user-auth-form";

const SignIn: FC = () => {
  return (
    <div>
      <div>
        <div>Sign in here</div>
        <UserAuthForm />
      </div>
      <div>
        <Link href={"/sign-up"}>Register</Link>
      </div>
    </div>
  );
};

export default SignIn;
