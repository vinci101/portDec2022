import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Alvin Calma, nice to meet you. Feel free to look around.
            </p>
          </div>
          <div>
            <p>
              I am passionate about growth and improvements as well as solving
              problems. There's a certain high whenever a bug that impacts the
              customer and application is fixed and the client is satisfied with
              the outcome. I have been in the I.T. industry for more than 10
              years. Mostly as an Application Support mainly monitoring the
              application's availability or ensuring the data integrity. I am
              now upskilling to get more developer roles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
