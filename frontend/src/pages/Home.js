import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-800 mb-4">
          Welcome to the Blog Post Journey
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Discover how we build engaging blogs using the MERN Stack.
        </p>
      </div>

      {/* Featured Image */}
      <div className="mb-10">
        <img
          src="/images/mern.jpg"
          alt="Blog Creation"
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>

      {/* Blog Content */}
      <div className="text-gray-700 leading-relaxed space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          About Blog Post Webpages
        </h2>
        <p>
          A <strong>blog post webpage</strong> is a platform where users can
          share their thoughts, ideas, and stories in a structured and visually
          appealing format. It allows for the creation, management, and
          presentation of written content, often enhanced with images, videos,
          and interactive elements. 
        </p>
        <p>
          Building a blog post webpage using the <strong>MERN Stack</strong>{" "}
          (MongoDB, Express.js, React, Node.js) combines robust backend
          functionality with a dynamic frontend interface, making it a powerful
          choice for modern web development.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Usage of MERN Stack
        </h2>
        <p>
          <strong>MongoDB:</strong> A NoSQL database that stores blog data such
          as post content, author details, timestamps, and comments. It enables
          scalability and efficient handling of large datasets.
        </p>
        <p>
          <strong>Express.js:</strong> A backend framework that manages
          server-side logic and API routes. It handles requests to create,
          retrieve, update, or delete blog posts securely and efficiently.
        </p>
        <p>
          <strong>React:</strong> A frontend library used to build a dynamic
          and interactive user interface. It enables features like real-time
          updates, smooth navigation, and a responsive layout for the blog.
        </p>
        <p>
          <strong>Node.js:</strong> Provides the runtime environment for
          executing server-side JavaScript code and facilitates seamless
          integration between the database and the frontend.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Why Choose the MERN Stack?
        </h2>
        <p>
          By leveraging the MERN stack, developers can create a blog post
          webpage that is robust, scalable, and user-friendly. Such a platform
          not only helps in showcasing content but also fosters community
          interaction and knowledge sharing.
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <a
          href="/articles-list"
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-md transition duration-300"
        >
          Explore Articles
        </a>
      </div>
    </div>
  );
};

export default Home;
