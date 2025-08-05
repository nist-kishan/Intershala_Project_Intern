import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-[#0c1a38] text-white">
      <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-100 to-white mb-4 animate-pulse">
        404
      </h1>
      <p className="text-2xl font-semibold mb-2">Oops! Page not found.</p>
      <p className="text-base text-gray-300 mb-6 max-w-md">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-white hover:bg-pink-100 transition-all px-5 py-2 rounded-full text-pink-700 font-semibold shadow-md"
      >
        <ArrowLeft size={18} />
        Go back to Home
      </Link>
    </div>
  );
}
