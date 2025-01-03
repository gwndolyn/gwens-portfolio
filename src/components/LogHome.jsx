import React from "react";
import { motion } from "framer-motion";

const LogHome = () => {
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {/* Time Widget */}
        <motion.div
          className="rounded-lg bg-black/30 backdrop-blur-lg shadow-lg p-6 text-white flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold">Time</h3>
          <p className="text-2xl mt-2">{currentTime}</p>
        </motion.div>

        {/* Date Widget */}
        <motion.div
          className="rounded-lg bg-black/30 backdrop-blur-lg shadow-lg p-6 text-white flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold">Date</h3>
          <p className="text-2xl mt-2">{currentDate}</p>
        </motion.div>

        {/* Calendar Widget */}
        <motion.div
          className="col-span-2 lg:col-span-2 rounded-lg bg-black/30 backdrop-blur-lg shadow-lg p-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold">Calendar</h3>
          <div className="mt-2">Your calendar will go here.</div>
        </motion.div>

        {/* Events Widget */}
        <motion.div
          className="rounded-lg bg-black/30 backdrop-blur-lg shadow-lg p-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold">Events</h3>
          <ul className="mt-2">
            <li>- Meeting at 10:00 AM</li>
            <li>- Lunch at 1:00 PM</li>
            <li>- Project review at 3:00 PM</li>
          </ul>
        </motion.div>

        {/* Notes Widget */}
        <motion.div
          className="col-span-2 rounded-lg bg-black/30 backdrop-blur-lg shadow-lg p-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold">Notes</h3>
          <textarea
            className="w-full mt-2 p-2 rounded bg-black/50 backdrop-blur-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-300"
            placeholder="Write your notes here..."
            rows="5"
          ></textarea>
        </motion.div>

        {/* Timetable Widget */}
        <motion.div
          className="col-span-2 lg:col-span-4 rounded-lg bg-black/30 backdrop-blur-lg shadow-lg p-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-lg font-semibold">Timetable</h3>
          <div className="mt-2">Your timetable will go here.</div>
        </motion.div>
      </div>
    </div>
  );
};

export default LogHome;
