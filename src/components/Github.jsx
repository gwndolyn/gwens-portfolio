import React, { useEffect, useState } from "react";
import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";
import { FaCodeCommit } from "react-icons/fa6";
import { motion } from "framer-motion";

const Github = () => {
  const [totalContributions, setTotalContributions] = useState(0);

  useEffect(() => {
    const fetchContributions = async () => {
      const query = `
        {
          user(login: "gwndolyn") {
            contributionsCollection(from: "2020-01-01T00:00:00Z") {
              contributionCalendar {
                totalContributions
              }
            }
          }
        }`;

      try {
        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
          },
          body: JSON.stringify({ query })
        });

        const data = await response.json();
        console.log("GitHub API Response:", data); // ✅ Log API response
    
        if (data.errors) {
          console.error("GitHub API Error:", data.errors);
        }
    
        if (data.data && data.data.user) {
          setTotalContributions(data.data.user.contributionsCollection.contributionCalendar.totalContributions);
        } else {
          console.error("Unexpected API Response:", data);
        }
      } catch (error) {
        console.error("Fetch Request Error:", error);
      }
    };

    fetchContributions();
  }, []);

  // Random quotes array
  const devQuotes = [
    "“Talk is cheap. Show me the code.” – Linus Torvalds",
    "“Programs must be written for people to read, and only incidentally for machines to execute.” – Harold Abelson",
    "“Code is like humor. When you have to explain it, it’s bad.” – Cory House",
    "“Simplicity is the soul of efficiency.” – Austin Freeman",
    "“Fix the cause, not the symptom.” – Steve Maguire",
    "“A programming language is low level when its programs require attention to the irrelevant.” - Alan Perlis"
  ];

  // Get today's quote based on the day of the year
  const todayIndex = new Date().getDate() % devQuotes.length;
  const todayQuote = devQuotes[todayIndex];

  return (
    <motion.div 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 1, y: 50 }}
      transition={{ duration: 0.8 }}
      className="w-full p-4"
    >
      {/* Outer Container with Pink Glow */}
      <motion.div 
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 1, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className="relative bg-black text-white rounded-lg p-7 w-full shadow-lg"
      >
        {/* Pink Glow */}
        <div className="absolute inset-0 rounded-lg bg-pink-400 opacity-30 blur-3xl -z-10"></div>

        {/* MacBook Top Bar (Fades In) */}
        <motion.div 
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-4"
        >
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
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
          {/* Left Section: Username and Stats (Slide from Left) */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            {/* GitHub Logo and Username Link */}
            <a
              href="https://github.com/gwndolyn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xl mb-4 font-mono font-extrabold hover:text-gray-300 transition duration-200"
            >
              <FaGithub className="text-2xl mr-2" />
              <span> / gwndolyn</span>
            </a>

            {/* GitHub Stats */}
            <ul className="list-none space-y-3 text-xs font-mono font-bold">
              <li className="flex items-center gap-2">
                <FaStar className="text-yellow-500" /> Repositories: 25
              </li>
              <li className="flex items-center gap-2">
                <FaCodeBranch className="text-pink-500" /> Forks: 8
              </li>
              <li className="flex items-center gap-2">
                <FaCodeCommit className="text-orange-500" /> Total Contributions: 55
              </li>

              {/* <li className="flex items-center gap-2">
                🔥 Total Contributions: <span>{totalContributions}</span>
              </li> */}
            </ul>
          </motion.div>

          {/* Right Section: GitHub Contributions Graph (Slide from Right) */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="flex-grow"
          >
            <iframe
              frameBorder="0"
              className="w-full lg:h-[145px] h-[170px]"
              src="https://git-graph.vercel.app/embed/gwndolyn?showColorLegend=true&showWeekdayLabels=true&showMonthLabels=true&showTotalCount=true&blockMargin=2&blockRadius=2&blockSize=9&fontSize=12&weekStart=0&year=2025"
              title="GitHub Contribution Graph"
            ></iframe>
          </motion.div>
        </div>

        {/* Bottom Section: Developer Quote (Fade In) */}
        <motion.div 
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="mt-8 text-center italic text-gray-400 text-sm"
        >
          "{todayQuote}"
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Github;
