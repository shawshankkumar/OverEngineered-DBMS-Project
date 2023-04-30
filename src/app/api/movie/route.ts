import { NextResponse } from "next/server";
import { db } from "@/utils/db/client";
import { movies } from "@/utils/db/schema";
import { eq } from "drizzle-orm";

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
    console.log(err);
    return new Response(
      JSON.stringify({
        message: "Unable to fetch Movies",
        success: false,
        err,
      }),
      {
        status: 500,
      }
    );
  }
}

export async function POST(req: Request) {
  try {
    const { movie_name, movie_description, movie_poster_url } =
      await req.json();
    const insertMovie = await db.insert(movies).values({
      movie_name,
      movie_description,
      movie_poster_url,
    });
    console.log(insertMovie);
    return new Response(
      JSON.stringify({
        message: "Movies added",
        insertMovie,
        success: true,
      }),
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    return new Response(
      JSON.stringify({
        message: "Unable to add Movie",
        success: false,
        err,
      }),
      {
        status: 500,
      }
    );
  }
}

