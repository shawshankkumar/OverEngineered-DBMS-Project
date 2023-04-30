import Image from "next/image";
import { Inter } from "next/font/google";
import { db } from "@/utils/db/client";
import { movies } from "@/utils/db/schema";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie Catalogue",
};

export default async function Home() {
  const data = await db.select().from(movies);
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
      <div className="">
        {data.map((movie) => {
          return (
        <></>
          );
        })}
      </div>
      <p className="text-sm font-semibold text-black  bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent pt-16">
        Created by Shashank Kumar, Dheeraj Sajja and Anupama Jha
      </p>
    </div>
  );
}
