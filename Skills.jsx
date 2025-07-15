// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <>
    <section
      id="skills"
      className="relative py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient"
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise honed through various projects and experiences
        </p>
      </div>

      {/* Skill Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-10 items-stretch">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 w-full h-full 
              rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] flex flex-col justify-between"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
              {category.title}
            </h3>

            {/* Skill Items */}
            <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                {category.skills.map((skill) => (
                 <div
  key={skill.name}
  className="flex flex-col items-center justify-center bg-transparent border-2 border-gray-700 rounded-3xl py-3 px-2 sm:py-4 sm:px-3 text-center min-h-[80px]"
>
  <img
    src={skill.logo}
    alt={`${skill.name} logo`}
    className="w-8 h-8 mb-1 object-contain"
  />
  <span className="text-xs sm:text-sm text-gray-300">
    {skill.name}
  </span>
</div>

                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>

      {/* Curved SVG Transition */}
      <div className="w-full overflow-hidden leading-[0] -mt-1">
        <svg
          className="block w-full h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39 56.39C208.57 65.17 99.2 81.43 0 103V120h1200V0c-80.2 56.5-202.7 107.15-320.61 106.39-134.67-.83-202.17-77.4-321.39-83.84C439.33 15.88 400 47.61 321.39 56.39z"
            fill="#050414"
          />
        </svg>
      </div>
    </section>
  </>
);

export default Skills;
