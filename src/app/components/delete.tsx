"use client";
export default function DeleteButton({ id }: { id: number }) {
  const handleClick = () => {
    fetch(`/api/movie/${id}`, { method: "DELETE" }).then(() => {
      window.location.reload();
    });
  }; 
  return (
    <button
      className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 hover:from-orange-600 hover:via-amber-500 hover:to-orange-600 text-white font-bold py-2 px-4 rounded"
      onClick={handleClick}
    >
      Delete
    </button>
  );
}
