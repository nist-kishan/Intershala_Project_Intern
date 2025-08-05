export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6 shadow-md">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">EmpowerHer</h2>
          <p className="text-sm">
            Uplifting and empowering women across the globe with resources,
            education, and community.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-pink-400">Home</a></li>
            <li><a href="#about" className="hover:text-pink-400">About</a></li>
            <li><a href="#services" className="hover:text-pink-400">Services</a></li>
            <li><a href="#contact" className="hover:text-pink-400">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-pink-400">Events</a></li>
            <li><a href="#" className="hover:text-pink-400">Community</a></li>
            <li><a href="#" className="hover:text-pink-400">Blog</a></li>
            <li><a href="#" className="hover:text-pink-400">FAQs</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Newsletter</h3>
          <p className="text-sm mb-3">Get the latest updates and news directly in your inbox.</p>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full pl-2 pr-2 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none"
            />
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-4 py-2 rounded-full transition cursor-pointer">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-10 text-center text-sm border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} EmpowerHer. All rights reserved.
      </div>
    </footer>
  );
}
