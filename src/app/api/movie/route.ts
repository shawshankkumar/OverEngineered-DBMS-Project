import { NextResponse } from "next/server";
import { db } from "@/utils/db/client";
import { movies } from "@/utils/db/schema";

//Revalidate data only every 10 seconds

export const runtime = "edge"; // 'nodejs' is the default
export const revalidate = 10;

export async function GET() {
  try {
    const data = await db.select().from(movies);
    return new Response(
      JSON.stringify({
        message: "Movies fetched",
        data,
        success: true,
      }),
      {
        status: 200,
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        message: "Unable to fetch Movies",
        success: false,
        err
      }),
      {
        status: 500,
      }
    );
  }
}

export async function POST() {
  return NextResponse.json({ message: "Hello World" });
}
