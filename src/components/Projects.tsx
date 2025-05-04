import { motion } from 'framer-motion';
import React, { useState } from 'react';

// Update this array with your actual Flutter apps
const projects = [
  {
    title: 'E-Commerce App',
    description: 'A full-featured e-commerce application with product catalog, cart, and payment integration',
    technologies: ['Flutter', 'Firebase', 'Provider', 'Stripe'],
    features: [
      'Product Catalog',
      'Shopping Cart',
      'Payment Integration',
      'User Authentication',
      'Order Tracking'
    ],
    screenshots: [
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
      'https://placehold.co/600x400'
    ],
    github: '#',
    playStore: '#',
    appStore: '#',
  },
  {
    title: 'Fitness Tracker',
    description: 'A health and fitness tracking app with workout plans and progress analytics',
    technologies: ['Flutter', 'Firebase', 'BLoC', 'Google Fit API'],
    features: [
      'Workout Plans',
      'Progress Tracking',
      'Health Metrics',
      'Social Sharing',
      'Custom Workouts'
    ],
    image: 'https://placehold.co/600x400',
    github: '#',
    playStore: '#',
    appStore: '#',
  },
  {
    title: 'Social Media App',
    description: 'A social networking platform with real-time chat and media sharing',
    technologies: ['Flutter', 'Firebase', 'GetX', 'WebRTC'],
    features: [
      'Real-time Chat',
      'Media Sharing',
      'User Profiles',
      'News Feed',
      'Notifications'
    ],
    image: 'https://placehold.co/600x400',
    github: '#',
    playStore: '#',
    appStore: '#',
  },
];

const Projects = () => {
  // Track the current screenshot index for each project
  const [carouselIndexes, setCarouselIndexes] = useState(
    projects.map(() => 0)
  );

  const handlePrev = (projectIdx: number, screenshotsLength: number) => {
    setCarouselIndexes((prev) =>
      prev.map((idx, i) =>
        i === projectIdx
          ? idx === 0
            ? screenshotsLength - 1
            : idx - 1
          : idx
      )
    );
  };

  const handleNext = (projectIdx: number, screenshotsLength: number) => {
    setCarouselIndexes((prev) =>
      prev.map((idx, i) =>
        i === projectIdx
          ? idx === screenshotsLength - 1
            ? 0
            : idx + 1
          : idx
      )
    );
  };

  return (
    <section id="projects" className="py-20 bg-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Apps</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-primary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-light mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    {project.title}
                  </h3>
                  <p className="text-light/60 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-secondary mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside text-light/70 text-sm space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-tertiary text-secondary rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Carousel for screenshots */}
                  {project.screenshots && (
                    <div
                      className="relative mb-4 flex justify-center items-center overflow-hidden"
                      style={{
                        height: "120px",
                        width: `${(120 * 16) / 9}px`,
                        maxWidth: "100%",
                      }}
                    >
                      <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                          transform: `translateX(-${carouselIndexes[index] * 100}%)`,
                          width: `${project.screenshots.length * 100}%`,
                        }}
                      >
                        {project.screenshots.map((screenshot, i) => {
                          // Determine if this is the center, left, or right image
                          let pos = (i - carouselIndexes[index] + project.screenshots.length) % project.screenshots.length;
                          let isCenter = pos === 0;
                          let isSide = pos === 1 || pos === project.screenshots.length - 1;

                          return (
                            <div
                              key={i}
                              className="flex-shrink-0 flex justify-center items-center"
                              style={{
                                width: `${(120 * 16) / 9}px`,
                                height: "120px",
                                transition: "all 0.3s",
                                zIndex: isCenter ? 10 : 0,
                              }}
                            >
                              <div
                                className={`w-full h-full rounded-lg cursor-pointer ${isCenter ? "shadow-lg border-4 border-secondary" : "opacity-80 blur-[1px]"}`}
                                style={{
                                  overflow: "hidden",
                                  aspectRatio: "16/9",
                                  background: "#222",
                                  transition: "all 0.3s",
                                }}
                                onClick={() => {
                                  setCarouselIndexes(prev =>
                                    prev.map((idx, idxProject) => idxProject === index ? i : idx)
                                  );
                                }}
                              >
                                <img
                                  src={screenshot}
                                  alt={`Screenshot ${i + 1}`}
                                  className="w-full h-full object-cover"
                                  draggable={false}
                                  style={{
                                    aspectRatio: "16/9",
                                    width: "100%",
                                    height: "100%",
                                    display: "block",
                                    pointerEvents: isCenter ? "auto" : "auto",
                                  }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <a
                      href={project.github}
                      className="text-secondary hover:text-light transition-colors duration-300 flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Source Code
                    </a>
                    <div className="flex space-x-2">
                      <a
                        href={project.playStore}
                        className="text-secondary hover:text-light transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 20.5v-17c0-.8.7-1.5 1.5-1.5h15c.8 0 1.5.7 1.5 1.5v17c0 .8-.7 1.5-1.5 1.5h-15c-.8 0-1.5-.7-1.5-1.5zm1.5-17v17h15v-17h-15z"/>
                          <path d="M12 16.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5zm0-7c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z"/>
                        </svg>
                      </a>
                      <a
                        href={project.appStore}
                        className="text-secondary hover:text-light transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;