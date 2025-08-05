import Loader from '../components/common/Loader';
import {
  User,
  Link2,
  IndianRupee,
  Gift,
  Medal,
  Trophy,
  GiftIcon,
} from 'lucide-react';
import { useDashboardData } from '../modules/hook';

export default function Dashboard() {
  const { data: internData, isLoading, isError } = useDashboardData();

  if (isLoading) return <Loader />;
  if (isError) return <p className="text-red-500 text-center">Failed to load data.</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b1d3a] via-[#0d254d] to-[#102b5c] text-white p-6 md:p-12 font-sans">

      <div className="mb-10 text-center bg-white/5 backdrop-blur-lg rounded-xl py-6 px-4 shadow-md border border-white/10">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow mb-2">
          Welcome, {internData.name}! 👋
        </h1>
        <p className="text-lg md:text-xl font-light text-white/80">
          Let’s grow your impact and unlock some rewards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          {
            icon: <User className="text-white/80 w-8 h-8" />,
            label: 'Intern Name',
            value: internData.name,
          },
          {
            icon: <Link2 className="text-white/80 w-8 h-8" />,
            label: 'Referral Code',
            value: internData.referralCode,
          },
          {
            icon: <IndianRupee className="text-white/80 w-8 h-8" />,
            label: 'Total Donations',
            value: `₹ ${internData.totalDonations}`,
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/10 flex items-center gap-4"
          >
            {card.icon}
            <div>
              <p className="text-sm text-white/70">{card.label}</p>
              <h2 className="text-2xl font-semibold">{card.value}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/10">
        <div className="flex items-center gap-3 mb-4">
          <Gift className="text-white w-6 h-6" />
          <h3 className="text-2xl font-bold">Your Rewards</h3>
        </div>
        <ul className="list-none text-white/90 space-y-4 ml-1">
          <li className="flex items-center gap-2">
            <GiftIcon className="text-yellow-400 w-5 h-5" />
            Bronze Tier Unlocked (₹1,000)
          </li>
          <li className="flex items-center gap-2">
            <Medal className="text-gray-300 w-5 h-5" />
            Silver Tier Unlocked (₹5,000)
          </li>
          <li className="flex items-center gap-2">
            <Trophy className="text-yellow-500 w-5 h-5" />
            Gold Tier Unlocked (₹8,000)
          </li>
        </ul>
      </div>
    </div>
  );
}
