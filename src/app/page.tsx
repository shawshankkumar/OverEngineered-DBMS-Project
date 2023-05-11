import { Inter } from "next/font/google";
import { db } from "@/utils/db/client";
import { movies } from "@/utils/db/schema";
import DeleteButton from "./components/delete";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Music Management",
};

export const dynamic = "force-dynamic";

export default async function Home() {
  const data = await db.select().from(movies);
  return (
    <div className="h-screen w-screen bg-black">
      <div className="mx-auto pt-20 mb-10 max-w-4xl text-center sm:px-0 bg-black">
        <h1 className=" text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]">
          <span className="bg-gradient-to-r from-blue-500 via-pink-600 to-purple-500 bg-clip-text text-transparent">
          Music Management System &nbsp;for DBMS
          </span>
        </h1>
        <h2 className="mt-5 text-lg text-gray-200 sm:text-xl pb-10">
          Built by Avantika and Shreesha
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {data.map((movie) => {
            return (
              <div className="max-w-sm rounded overflow-hidden shadow-xl bg-white">
                
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {movie.movie_name}
                  </div>
                  <p className="text-gray-700 text-base">
                    {movie.movie_description}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
                    {movie.created_at.toDateString()}
                  </span>

                  <DeleteButton id={movie.movie_id} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
