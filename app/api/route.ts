import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
// import { getServerSession } from "next-auth/next"
// import { authOptions } from "./auth/[...nextauth]"

export async function GET() {
  try {
    const data = await prisma.post.findMany();

    return NextResponse.json(
      {
        data,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json("Invalid Request", {
      status: 404,
    });
  }
}

export async function POST() {
  try {
    const data = await prisma.post.create({
      data: {
        title: "Test 12345",
      },
    });

    return NextResponse.json(
      {
        data,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json("Invalid Request", {
      status: 404,
    });
  }
}
