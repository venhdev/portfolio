import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-light/80 mb-8">
                I'm always excited to discuss new Flutter projects, app ideas, or
                opportunities to collaborate. Whether you need a mobile app developed
                or have questions about Flutter, feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-secondary">Email:</span>
                  <a
                    href="mailto:venh.dev@gmail.com"
                    className="text-light hover:text-secondary transition-colors duration-300"
                  >
                    venh.dev@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-secondary">Location:</span>
                  <span className="text-light">Your Location</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-secondary">Social:</span>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-light hover:text-secondary transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      href="#"
                      className="text-light hover:text-secondary transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="#"
                      className="text-light hover:text-secondary transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-light mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-tertiary border border-light/20 rounded-md text-light focus:outline-none focus:border-secondary"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-light mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-tertiary border border-light/20 rounded-md text-light focus:outline-none focus:border-secondary"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-light mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-tertiary border border-light/20 rounded-md text-light focus:outline-none focus:border-secondary"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 