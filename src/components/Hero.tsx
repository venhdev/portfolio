import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-light mb-4">
            Hi, I'm <span className="text-secondary">Your Name</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-light/80 mb-8">
            Flutter Developer
          </h2>
          <p className="text-lg text-light/60 max-w-2xl mx-auto mb-8">
            I build beautiful, cross-platform mobile applications with Flutter.
            Specializing in creating smooth, native-like experiences for both iOS and Android platforms.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="btn-primary"
            >
              View My Apps
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-secondary text-secondary font-semibold rounded-md hover:bg-secondary hover:text-primary transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 