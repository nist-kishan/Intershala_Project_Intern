import React from "react";
import {
  Info,
  User,
  Rocket,
  BadgeCheck,
  TrendingUp,
  Gift,
  Share2,
} from "lucide-react";

export default function About() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 sm:px-8 py-12 mt-12 mb-20 bg-white/5 text-white rounded-3xl shadow-xl space-y-12 border border-white/10 backdrop-blur-md">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <Rocket className="w-6 h-6 text-purple-400" />
          <h2 className="text-3xl font-bold">About the Project</h2>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
          This platform is designed to empower interns and volunteers with a centralized dashboard
          to effortlessly track their <span className="text-white font-medium">referrals</span>,{" "}
          <span className="text-white font-medium">donations</span>,{" "}
          <span className="text-white font-medium">rewards</span>, and{" "}
          <span className="text-white font-medium">leaderboard progress</span>. With a sleek modern
          UI and a secure backend, it encourages growth, transparency, and a healthy sense of
          competition.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-8">
        <img
          src="./myPic.png"
          alt="Kishan"
          className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-white shadow-lg object-cover"
        />
        <div>
          <div className="flex items-center gap-3 mb-2">
            <User className="w-6 h-6 text-green-400" />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Hey there! I’m <span className="text-white font-semibold">Kishan</span> 👋 — a passionate
            full-stack developer who thrives on building intuitive, scalable web applications using
            technologies like <span className="text-white font-medium">React</span>,{" "}
            <span className="text-white font-medium">Tailwind CSS</span>,{" "}
            <span className="text-white font-medium">Express.js</span>,{" "}
            <span className="text-white font-medium">MongoDB</span>, and{" "}
            <span className="text-white font-medium">TypeScript</span>. I’m driven by a love for
            clean code, elegant design, and continuous growth.
          </p>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-4">
          <Info className="w-6 h-6 text-blue-400" />
          <h2 className="text-3xl font-bold">Key Features</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          {[
            {
              title: "Referral System",
              icon: <Share2 className="w-5 h-5 inline-block mr-2 text-purple-300" />,
              desc: "Invite others using your referral code and earn exciting rewards.",
            },
            {
              title: "Donation Tracking",
              icon: <TrendingUp className="w-5 h-5 inline-block mr-2 text-green-300" />,
              desc: "Monitor your total donations and measure your impact in real time.",
            },
            {
              title: "Leaderboard",
              icon: <BadgeCheck className="w-5 h-5 inline-block mr-2 text-yellow-300" />,
              desc: "Stay motivated and inspired by climbing the community leaderboard.",
            },
            {
              title: "Unlockable Rewards",
              icon: <Gift className="w-5 h-5 inline-block mr-2 text-blue-300" />,
              desc: "Unlock special badges, titles, and perks as you hit milestones.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white/10 hover:bg-white/15 transition p-5 rounded-2xl shadow-inner border border-white/10"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.icon}
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
