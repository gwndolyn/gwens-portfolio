import React from 'react';

const Volunteering = () => {
  return (
    <section className="pt-20" id="volunteering">
      <div className="border-b border-neutral-800 pb-4">
        <h2 className="text-4xl text-center my-8">Volunteering</h2>
        <div className="text-center">
          <ul>
            <li className="mb-4">
              <strong>Organization Name</strong> - Role | Duration
            </li>
            <li className="mb-4">
              <strong>Organization Name</strong> - Role | Duration
            </li>
            <li className="mb-4">
              <strong>Organization Name</strong> - Role | Duration
            </li>
            {/* Add more volunteering experiences as needed */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
