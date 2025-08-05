export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-pink-500 animate-spin"></div>
        <div className="absolute inset-2 bg-white rounded-full"></div>
      </div>
    </div>
  );
}
