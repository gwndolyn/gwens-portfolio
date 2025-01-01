import React from 'react';

const Certifications = () => {
  return (
    <section className="pt-20" id="certifications">
      <div className="border-b border-neutral-800 pb-4">
        <h2 className="text-4xl text-center my-8">Certifications</h2>
        <div className="text-center">
          <ul>
            <li className="mb-4">
              <strong>Certification Name 1</strong> - Institution | Date
            </li>
            <li className="mb-4">
              <strong>Certification Name 2</strong> - Institution | Date
            </li>
            <li className="mb-4">
              <strong>Certification Name 3</strong> - Institution | Date
            </li>
            {/* Add more certifications as needed */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
