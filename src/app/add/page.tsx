"use client";

export default async function Home() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const ob = {
      movie_name: e.target.movie_name.value,
      movie_description: e.target.movie_description.value,
      movie_poster_url: e.target.movie_poster_url.value,
    };
    fetch(`/api/movie`, {method: "POST", body: JSON.stringify(ob), headers: {"Content-Type": "application/json"}}).then(()=>{
        window.location.href="/";
    });
  };
  return (
    <div className="m-auto pt-32 w-full max-w-xl">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        action="/api/movie"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="movie_name"
          >
            Movie Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="movie_name"
            type="text"
            placeholder="Interstellar"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="movie_description"
          >
            Movie Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="movie_description"
            type="text"
            placeholder="That's why he's the GOAT"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="movie_poster_url"
          >
            Movie Poster link
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="movie_poster_url"
            type="url"
            placeholder="https://w0.peakpx.com/wallpaper/385/944/HD-wallpaper-interstellar-movie.jpg"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add movie
          </button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
}
