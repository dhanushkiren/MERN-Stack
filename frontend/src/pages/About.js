import React from "react";

const About = () => {
  return (
    
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 m-4 sm:p-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Hi there! I'm a passionate developer exploring the endless possibilities of the web development world. I enjoy solving problems, creating beautiful user interfaces, and learning new technologies.
        </p>
        
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">About the MERN Stack</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          The MERN stack is a popular web development framework made up of four key technologies: MongoDB, Express.js, React, and Node.js. Together, these tools enable developers to build full-stack JavaScript applications with ease and efficiency.
        </p>
        
        <h3 className="text-2xl font-semibold text-green-600 mb-4">Why This Project?</h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          This project is a simple and practical way to learn and explore the MERN stack. It combines front-end React development with a back-end powered by Node.js and Express, all while storing data in MongoDB. The goal is to gain hands-on experience and understand how these technologies work together in a real-world scenario.
        </p>

        <div className="mt-8">
          <h4 className="text-xl font-medium text-gray-800">Key Features:</h4>
          <ul className="list-disc pl-6 text-gray-700">
            <li>React-based front-end for a responsive and interactive UI</li>
            <li>Node.js and Express.js back-end for API handling</li>
            <li>MongoDB for database management</li>
            <li>Full-stack integration and deployment</li>
          </ul>
        </div>
      </div>
  );
};

export default About;
