import React from "react";
import { motion } from "framer-motion";

const VOLUNTEERING_ACTIVITIES = [
  {
    id: 1,
    title: "Community Cleanup Drive",
    description: "Promoted a cleaner environment by organizing public cleanup events.",
    date: "June 2023",
    image: "/assets/cleanup.jpg",
  },
  {
    id: 2,
    title: "Food Distribution",
    description: "Distributed food to underprivileged families during the festive season.",
    date: "December 2022",
    image: "/assets/food.jpg",
  },
  {
    id: 3,
    title: "Animal Shelter Volunteering",
    description: "Provided care for animals and assisted in adoption events.",
    date: "August 2021",
    image: "/assets/shelter.jpg",
  },
];

const Volunteering = () => {
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 px-4 lg:px-8 mt-10">
          {VOLUNTEERING_ACTIVITIES.map((activity) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-3xl bg-black/30 backdrop-blur-lg shadow-pink-500/50 shadow-lg"
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
                <span className="mr-2 mt-4 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-pink-300 inline-block">
                  {activity.date}
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
