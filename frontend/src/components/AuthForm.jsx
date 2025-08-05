import { Mail, Lock, User } from 'lucide-react';

const AuthForm = ({ type, formData, setFormData, onSubmit }) => {
  const isSignup = type === 'signup';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <img
        src="/authBg.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 backdrop-blur-md bg-white/10 p-8 rounded-2xl w-full max-w-sm shadow-xl border border-white/20">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          {isSignup ? 'Create Account' : 'Welcome Back'}
        </h2>

        <form onSubmit={onSubmit}>
          {isSignup && (
            <div className="mb-4 relative">
              <User className="absolute left-3 top-2.5 text-white/60 h-5 w-5" />
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full pl-10 pr-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none"
              />
            </div>
          )}

          <div className="mb-4 relative">
            <Mail className="absolute left-3 top-2.5 text-white/60 h-5 w-5" />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full pl-10 pr-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none"
            />
          </div>

          <div className="mb-6 relative">
            <Lock className="absolute left-3 top-2.5 text-white/60 h-5 w-5" />
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full pl-10 pr-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-md bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:opacity-90 transition cursor-pointer"
          >
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <p className="text-center text-white text-sm mt-4">
          {isSignup ? (
            <>
              Already have an account? <a href="/login" className="text-pink-400 hover:underline">Login</a>
            </>
          ) : (
            <>
              Don’t have an account? <a href="/signup" className="text-pink-400 hover:underline">Sign up</a>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
