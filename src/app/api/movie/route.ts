import { db } from "@/utils/db/client";
import { movies } from "@/utils/db/schema";

export async function POST(req: Request) {
  try {
    const { movie_name, movie_description, movie_poster_url } =
      await req.json();
    const insertMovie = await db.insert(movies).values({
      movie_name,
      movie_description,
      movie_poster_url,
    });
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

