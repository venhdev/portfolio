import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'Flutter',
    'Dart',
    'Firebase',
    'RESTful APIs',
    'State Management',
    'UI/UX Design',
    'Git',
    'CI/CD',
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-light/80 mb-6">
                I'm a passionate Flutter Developer with expertise in building cross-platform
                mobile applications. With a strong focus on creating beautiful, performant,
                and user-friendly apps, I bring ideas to life on both iOS and Android platforms.
              </p>
              <p className="text-lg text-light/80 mb-6">
                My journey in mobile development started with a fascination for creating
                seamless user experiences, and it has evolved into a deep passion for
                Flutter's ability to deliver native-like performance across platforms.
              </p>
              <p className="text-lg text-light/80">
                When I'm not coding, you can find me exploring new Flutter packages,
                contributing to open-source projects, or staying updated with the latest
                mobile development trends.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-light mb-6">My Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-tertiary text-secondary rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 