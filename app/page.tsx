import DashboardExample from "@/components/dashboard";
import { MenubarDemo } from "@/components/menubar-demo";
import Image from "next/image";

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api`);

  if (!res.ok) {
    console.log(res);
    throw new Error("Failed to fetch");
  }

  return res.json();
}

export default async function Home() {
  const data = await getPosts();

  return (
    <>
      {JSON.stringify(data)}
      {/* <DashboardExample /> */}
      {/* <MenubarDemo /> */}
    </>
  );
}
