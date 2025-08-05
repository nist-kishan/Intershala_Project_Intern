import { useState } from 'react';
import { useAddIntern } from '../modules/hook';

export default function NewIntern() {
  const [formData, setFormData] = useState({
    name: '',
    referralCode: '',
    totalDonations: '',
  });

  const [message, setMessage] = useState('');
  const { mutate, isPending } = useAddIntern();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');

    const payload = {
      name: formData.name,
      referralCode: formData.referralCode,
      totalDonations: Number(formData.totalDonations),
    };

    mutate(payload, {
      onSuccess: (data) => {
        setMessage(data.message || 'Intern added successfully!');
        setFormData({ name: '', referralCode: '', totalDonations: '' });
      },
      onError: (err) => {
        setMessage(
          err.response?.data?.message || 'Error adding intern. Try again.'
        );
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] p-6">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-xl backdrop-blur-sm bg-white/10 border border-white/20">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          ✨ Add New Intern
        </h2>

        {message && (
          <p
            className={`text-center mb-4 font-medium ${
              message.includes('success') ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-white mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder:text-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div>
            <label className="block text-sm text-white mb-1">Referral Code</label>
            <input
              type="text"
              name="referralCode"
              required
              value={formData.referralCode}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder:text-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div>
            <label className="block text-sm text-white mb-1">Total Donations</label>
            <input
              type="number"
              name="totalDonations"
              required
              value={formData.totalDonations}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder:text-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition duration-200"
          >
            {isPending ? 'Adding...' : 'Add Intern'}
          </button>
        </form>
      </div>
    </div>
  );
}
