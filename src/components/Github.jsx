import React from "react";
import { FaGithub, FaStar, FaCodeBranch, FaUsers, FaUserFriends } from "react-icons/fa";

const Github = () => {
  // Random quotes array
  const devQuotes = [
    "“Talk is cheap. Show me the code.” – Linus Torvalds",
    "“Programs must be written for people to read, and only incidentally for machines to execute.” – Harold Abelson",
    "“Code is like humor. When you have to explain it, it’s bad.” – Cory House",
    "“Simplicity is the soul of efficiency.” – Austin Freeman",
    "“Fix the cause, not the symptom.” – Steve Maguire",
  ];

  // Get today's quote based on the day of the year
  const todayIndex = new Date().getDate() % devQuotes.length;
  const todayQuote = devQuotes[todayIndex];

  return (
    <div className="w-full p-4">
      {/* Outer Container for the MacBook-like tab */}
      <div className="bg-black text-white rounded-lg p-7 w-full shadow-lg">
        {/* MacBook Top Bar */}
        <div className="flex items-center justify-between mb-4">
          {/* Left: Colored Circles */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          {/* Center: Search Bar Lines */}
          <div className="flex flex-col gap-1 pb-2">
            <div className="w-12 h-1 bg-gray-400 rounded"></div>
            <div className="w-16 h-1 bg-gray-400 rounded"></div>
            <div className="w-8 h-1 bg-gray-400 rounded"></div>
          </div>

          {/* Placeholder for symmetry */}
          <div></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
          {/* Left Section: Username and Stats */}
          <div className="flex-shrink-0">
            {/* Username and Logo */}
            <div className="flex items-center text-xl mb-4 font-mono font-extrabold">
              <FaGithub className="text-2xl mr-2" />
              <span> / gwndolyn</span>
            </div>

            {/* GitHub Stats */}
            <ul className="list-none space-y-3 text-xs font-mono font-bold">
              <li className="flex items-center gap-2">
                <FaStar className="text-yellow-500" /> Repositories: 25
              </li>
              <li className="flex items-center gap-2">
                <FaCodeBranch className="text-blue-500" /> Forks: 8
              </li>
              <li className="flex items-center gap-2">
                <FaUsers className="text-green-500" /> Followers: 12
              </li>
              <li className="flex items-center gap-2">
                <FaUserFriends className="text-purple-500" /> Following: 20
              </li>
            </ul>
          </div>

          {/* Right Section: GitHub Contributions Graph */}
          <div className="flex-grow">
          <iframe frameBorder="0" height="145px" width="638px" src="https://git-graph.vercel.app/embed/gwndolyn?showColorLegend=true&showWeekdayLabels=true&showMonthLabels=true&showTotalCount=true&blockMargin=2&blockRadius=2&blockSize=9&fontSize=12&weekStart=0&year=2025"></iframe>
          </div>
        </div>

        {/* Bottom Section: Developer Quote */}
        <div className="mt-8 text-center italic text-gray-400 text-sm">
          "{todayQuote}"
        </div>
      </div>
    </div>
  );
};

export default Github;
