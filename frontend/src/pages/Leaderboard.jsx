import React, { useState } from "react";
import { Trophy } from "lucide-react";
import { useLeaderboard } from "../modules/hook";
import Loader from "../components/common/Loader";
import LeaderboardTable from "../components/LeaderboardTable";

export default function Leaderboard() {
  const [pageIndex, setPageIndex] = useState(0);
  const { data = [], isLoading, isError } = useLeaderboard();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className={`text-red-500 text-lg`}>Failed to load data.</p>
      </div>
    );
  }

  return (
    <section className="m-5 px-4 sm:px-6 lg:px-8 w-full max-w-screen-xl mx-auto">
      <header className="mb-8 flex items-center gap-4">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-full shadow-lg">
          <Trophy className="text-white" size={28} />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Leaderboard
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Top performers ranked by their achievements and contributions
          </p>
        </div>
      </header>

      <div className="rounded-xl backdrop-blur-md bg-white/10 dark:bg-[#1f1f1f]/30 p-4 sm:p-6 text-white shadow-xl">
        <LeaderboardTable
          data={data}
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
        />
      </div>
    </section>
  );
}
