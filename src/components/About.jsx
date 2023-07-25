import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am a Front end Developer. I am currently pursuing B.tech in Electronics and Communication
          from Institute of Engineering and Management, Kolkata. I did my schooling from The 
          Assembly of God Church School. I started my coding journey in my first year. I learned about
          different Data Structures in C++.
        </p>

        <br />

        <p className="text-xl">
        Once I grasped knowledge of the various Data Structures , I started to learn the basics 
        of HTML and CSS and then learned the JavaScript which helped me to make some small projects 
        and built my interest in this domain. After building few static websites I started to learn about the 
        React Framework which allowed me to make single page applications. Tailwind CSS which made developing 
        websites for efficient and quick and made the code cleaner. I have keen interest in this domain and 
        eager to learn more about the developments that keep happening.
        </p>

      </div>
    </div>
  );
};

export default About;
