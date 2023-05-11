"use client";

export default async function Home() {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const ob = {
      movie_name: e.target.movie_name.value,
      movie_description: e.target.movie_description.value,
      movie_poster_url: "https://google.com/",
      des: e.target.singer.value
    };
    fetch(`/api/movie`, {
      method: "POST",
      body: JSON.stringify(ob),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      window.location.href = "/";
    });
  };
  return (
    <div className="m-auto pt-32 w-full max-w-xl text-white">
      <form
        className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4"
        action="/api/movie"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-pink text-sm font-bold mb-2"
            htmlFor="movie_name"
          >
            Song Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-pink leading-tight focus:outline-none focus:shadow-outline text-black"
            id="movie_name"
            type="text"
            placeholder="Bohemian Rhapsody"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-pink text-sm font-bold mb-2"
            htmlFor="movie_description"
          >
            Song Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-pink leading-tight focus:outline-none focus:shadow-outline text-black"
            id="movie_description"
            type="text"
            placeholder="Good song"
            required
          />
        </div>
        {/* <div className="mb-4">
          <label
            className="block text-pink text-sm font-bold mb-2"
            htmlFor="movie_poster_url"
          >
            Song link (Spotify or Youtube)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-pink leading-tight focus:outline-none focus:shadow-outline"
            id="movie_poster_url"
            type="url"
            placeholder="https://www.youtube.com/watch?v=jgCVkQhlScc&ab_channel=FIFTYFIFTYOfficial"
            required
          />
        </div> */}
        <div className="mb-4">
          <label
            className="block text-pink text-sm font-bold mb-2"
            htmlFor="singer"
          >
            Singer description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-pink leading-tight focus:outline-none focus:shadow-outline text-black"
            id="singer"
            type="text"
            placeholder="Queen was gooooood!"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Song
          </button>
        </div>
      </form>
      <p className="text-center text-pink text-xs">
      </p>
    </div>
  );
}
