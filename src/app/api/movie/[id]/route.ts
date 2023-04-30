import { NextResponse } from "next/server";
import { db } from "@/utils/db/client";
import { movies } from "@/utils/db/schema";
import { eq } from "drizzle-orm";

export async function DELETE(req: Request, { params }: any) {
  try {
    const { id } = params;
    const data = await db.select().from(movies).where(eq(movies.movie_id, id));
    if(data.length === 0) {
        return new Response(
            JSON.stringify({
              message: "Movie does not exist",
              success: false,
            }),
            {
              status: 404,
            }
          );
    }
    await db.delete(movies).where(eq(movies.movie_id, id));
    return new Response(
      JSON.stringify({
        message: "Movie deleted",
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
