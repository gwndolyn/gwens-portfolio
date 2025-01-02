import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { VOLUNTEERING_ACTIVITIES } from "../constants";

const Volunteering = () => {
  const location = useLocation();

  // Scroll to the top whenever the route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  return (
    <section className="pt-20" id="volunteering">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="border-b border-neutral-800 pb-4">
          <motion.h2
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="text-3xl text-center my-8"
          >
            Volunteering
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 px-4 lg:px-8 mt-10">
          {VOLUNTEERING_ACTIVITIES.map((activity) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-3xl bg-black/30 backdrop-blur-lg shadow-pink-500/50 shadow-lg mb-10"
            >
              {/* Image */}
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={activity.image}
                alt={activity.title}
                className="h-48 w-full object-cover transition-transform duration-500 rounded-t-3xl"
              />

              {/* Details */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {activity.title}
                </h3>
                <p className="text-sm text-neutral-400">{activity.description}</p>
                <p className="mt-2 text-sm text-neutral-300">{activity.date}</p>
                <span className="mt-2 inline-block rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-pink-300">
                  {activity.organization}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Volunteering;
