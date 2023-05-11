"use client";
export default function DeleteButton({ id }: { id: number }) {
  const handleClick = () => {
    fetch(`/api/movie/${id}`, { method: "DELETE" }).then(() => {
      window.location.reload();
    });
  }; 
  return (
    <button
      className="bg-gradient-to-r from-red-500 via-purple-600 to-indigo-500 hover:from-purple-600 hover:via-red-500 hover:to-purple-600 text-white font-bold py-2 px-4 rounded"
      onClick={handleClick}
    >
      Delete
    </button>
  );
}
