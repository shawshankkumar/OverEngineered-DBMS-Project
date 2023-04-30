import { Inter } from "next/font/google";
import { db } from "@/utils/db/client";
import { movies } from "@/utils/db/schema";
import DeleteButton from "./components/delete";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie Catalogue",
};

export default async function Home() {
  const res = await fetch(process.env.DEPLOYED_URL + "api/movie");
  const { data } = await res.json();
  return (
    <div className="mx-auto mt-20 mb-10 max-w-4xl text-center sm:px-0 bg-white">
      <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]">
        Movie Catalogue System
        <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
          &nbsp;for DBMS
        </span>
      </h1>
      <h2 className="mt-5 text-lg text-gray-600 sm:text-xl pb-10">
        Built on top of MySQL and other amazing technologies.
      </h2>
      <div className="grid grid-cols-3 gap-8">
        {(data).map((movie:any) => {
          return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src={
                  movie.movie_poster_url ??
                  "https://w0.peakpx.com/wallpaper/385/944/HD-wallpaper-interstellar-movie.jpg"
                }
                alt=""
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{movie.movie_name}</div>
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
      <p className="text-sm font-semibold text-black  bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent pt-16">
        Created by Shashank Kumar, Dheeraj Sajja and Anupama Jha
      </p>
    </div>
  );
}
